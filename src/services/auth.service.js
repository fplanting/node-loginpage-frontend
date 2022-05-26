import axios from "axios";
const API_URL = "http://localhost:3000/users/";

// register a user
const register = (email, password) => {
  return axios.post(API_URL, {
    email,
    password,
  });
};

//login
const login = (email, password) => {
  console.log(email, password);
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const updateUser = (userid, subscription) => {
  return axios.put(API_URL + userid, {
    subscription,
  });
};

const AuthService = {
  register,
  login,
  getCurrentUser,
  updateUser,
};

export default AuthService;
