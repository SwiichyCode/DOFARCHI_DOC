import API_URL from "@/constants/api_url";

const createToken = async (userId: string) => {
  return fetch(API_URL.api_token + "create", {
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
  return fetch(API_URL.api_token + "get", {
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
