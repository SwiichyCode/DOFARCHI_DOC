import axios from "axios";
import API_URL from "@/constants/api_url";
const fromLocalHost = false;

const api_url = fromLocalHost
  ? "http://localhost:3000/api/token/"
  : API_URL.api_token;

const createToken = async (userId: string) => {
  return axios.post(api_url + "create", {
    userId,
  });
};

const getToken = async (userId: string) => {
  return axios.post(api_url + "get", {
    userId,
  });
};

const TokenService = {
  createToken,
  getToken,
};

export default TokenService;
