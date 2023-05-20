const API_URL = "http://localhost:3000/api/auth/";

const register = (email: string, password: string) => {
  fetch(API_URL + "register", {
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

const login = (email: string, password: string) => {
  fetch(API_URL + "login", {
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
