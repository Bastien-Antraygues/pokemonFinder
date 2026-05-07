import axios from "axios";

const fetch = axios.create({

  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }

});

export default fetch;