import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Axios = axios.create({
    baseURL: BASE_URL + "/api",
});

export const AxiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

export default Axios;
