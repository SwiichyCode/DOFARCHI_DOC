import API_URL from "@/constants/api_url";
const fromLocalHost = true;

const api_url = fromLocalHost
  ? "http://localhost:3000/api/auth/"
  : API_URL.api_auth;

const register = async (email: string, password: string) => {
  return fetch(api_url + "register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

const login = async (email: string, password: string) => {
  return fetch(api_url + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.accessToken) {
        localStorage.setItem("user", JSON.stringify(response));
      }
      return response;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
