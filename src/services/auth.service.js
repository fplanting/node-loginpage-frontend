import axios from "axios";
const API_URL = "https://node-loginpage.herokuapp.com/users/";

// register a user
const register = (email, password, subscription) => {
  return axios.post(API_URL, {
    email,
    password,
    subscription,
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
      console.log(response);
      console.log(typeof response);
      if (response.data.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }
      return response.data.data;
    });
};

//show logged in user
const getCurrentUser = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  return axios.get(API_URL + user.id);
};

//update users subscription
const updateUser = (subscription) => {
  console.log("subscription", subscription);
  let user = JSON.parse(localStorage.getItem("user"));
  return axios.put(API_URL + user.id, {
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
