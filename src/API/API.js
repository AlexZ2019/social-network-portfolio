import axios from "axios";

export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "a2b41d7e-e497-49f0-9283-a973ebd9da7e"
    }
})

