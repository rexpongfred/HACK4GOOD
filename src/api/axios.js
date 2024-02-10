import axios from "axios";
const BASE_URL = "http://localhost:3500";
//  const BASE_URL = "https://hack4goodbackend.onrender.com";

export default axios.create({
    baseURL: BASE_URL,
});

// attached interceptors to the axios private (JWT tokens) refresh it if necessary
export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
