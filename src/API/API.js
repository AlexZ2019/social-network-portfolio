import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "a2b41d7e-e497-49f0-9283-a973ebd9da7e"
    }
})

export const UsersApI = {
    getUsersRequest() {
        return instance.get(`users?page=${1}&count=${10}`).then(response => {
            return response.data
        })
    }
}