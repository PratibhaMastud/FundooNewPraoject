import http from "./Http";

const register = (data) => {
  return http.post("/user/userSignUp", data);
};
const login = (data) => {
  return http.post("/user/login", data);
};
const forgot = (data) => {
  return http.post("/user/reset", data);
};

const reset = (data, token) => {
  return http.post("/user/reset-password/", data, {
    headers: {
      Authorization: `${token}`,
    },
  });
};
const logout = (tokenAuth) => {
  return http.post("/user/logout",tokenAuth, {
    headers: {
      Authorization: `${tokenAuth}`,
    },
  });
};

// export default UserService;

export default {
  register,
  forgot,
  login,
  reset,
  logout,
};