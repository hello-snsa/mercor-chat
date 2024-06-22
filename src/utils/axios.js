import axios from 'axios';

const { PUBLIC_URL: BASE_URL } = process.env;

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

api.interceptors.request.use(function (config) {
    
document.getElementById('loaderOverlay').style.display='block';

    return config;
}, function (error) {
    return Promise.reject(error);
});

api.interceptors.response.use(function (response) {

    document.getElementById("loaderOverlay").style.display = "none";
    return response;
}, function (error) {
    document.getElementById("loaderOverlay").style.display = "none";
    return Promise.reject(error);
});
export default api;