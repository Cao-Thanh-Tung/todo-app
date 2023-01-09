import axios from "axios";

const baseUrl = "http://localhost:8080/v1";

const serverConnect = axios.create({ baseURL: baseUrl });
export default serverConnect;
