import axios from "axios";
import { baseURL } from "./base-url";

export const api = axios.create({
    baseURL,
});
