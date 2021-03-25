import {instance} from "./API";

export const UsersApI = {
    getUsersRequest(currentPage, pageSize, term = "", friend = null) {
        debugger
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? "" : `&friend=${friend}`)).then(response => {
            return response.data
        })
    },
    getSubscribed(userId) {
        return instance.post("follow/" + userId).then(response => {
            return response.data
        })
    },
    getUnsubscribed(userId) {
        return instance.delete("follow/" + userId).then(response => {
            return response.data
        })
    }
}