import axios from "axios";

// axios.defaults.baseURL = "https://advancedtechacademy.herokuapp.com/";
axios.defaults.baseURL = "http://localhost:9001";

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`