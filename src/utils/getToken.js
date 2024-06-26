import axios from "axios";
import { TOKEN_URL } from "./apiConstants";

const getToken = async (callback=()=>{}) => {
    try {
      const response = await axios.post(TOKEN_URL,
        {
          "grant_type": "refresh_token",
          "refresh_token": localStorage.getItem('MercorRefreshToken'),
        }
      )
      console.log("response of token===>", response);
      localStorage.setItem('MercorUserToken', response?.data?.access_token);
      localStorage.setItem('MercorRefreshToken', response?.data?.refresh_token);
      callback();
    } catch (error) {
      console.log(error);
    }
  }
export default getToken;