import API_URL from "@/constants/api_url";
const fromLocalHost = true;

const api_url = fromLocalHost
  ? "http://localhost:3000/api/token/"
  : API_URL.api_token;

const createToken = async (userId: string) => {
  return fetch(api_url + "create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
    }),
  });
};

const getToken = async (userId: string) => {
  return fetch(api_url + "get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
    }),
  });
};

const TokenService = {
  createToken,
  getToken,
};

export default TokenService;
