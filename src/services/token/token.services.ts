const API_URL = "http://localhost:3000/api/token/";

const createToken = async (userId: string) => {
  return fetch(API_URL + "create", {
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
  return fetch(API_URL + "get", {
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
