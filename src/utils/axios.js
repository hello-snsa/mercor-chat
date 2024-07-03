import axios from "axios";
import { BASE_URL,TOKEN_URL } from "./apiConstants";

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

api.interceptors.request.use(
    function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem("MercorUserToken")}`;
        return config;
    },
    function (error) {
        console.log("error: request interceptor", error);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if (error?.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                try {
                    const token = await new Promise(function (resolve, reject) {
                        failedQueue.push({ resolve, reject });
                    });
                    originalRequest.headers.Authorization = 'Bearer ' + token;
                    return await api(originalRequest);
                } catch (err) {
                    return await Promise.reject(err);
                }
            }

            originalRequest._retry = true;
            isRefreshing = true;

            const refreshToken = localStorage.getItem("MercorRefreshToken");
            return new Promise(function (resolve, reject) {
                axios.post(`${TOKEN_URL}`, {
                    "grant_type": "refresh_token",
                    "refresh_token": refreshToken,
                  })
                    .then(({ data }) => {
                        localStorage.setItem("MercorUserToken", data.access_token);
                        api.defaults.headers.Authorization = 'Bearer ' + data.access_token;
                        originalRequest.headers.Authorization = 'Bearer ' + data.access_token;
                        processQueue(null, data.access_token);
                        resolve(api(originalRequest));
                    })
                    .catch((err) => {
                        processQueue(err, null);
                        reject(err);
                    })
                    .finally(() => {
                        isRefreshing = false;
                    });
            });
        }

        return Promise.reject(error);
    }
);

export default api;
