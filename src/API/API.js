import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "a2b41d7e-e497-49f0-9283-a973ebd9da7e"
    }
})

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

export const AuthorizationApI = {
    getAuthMe() {
        return instance.get("auth/me");
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post("auth/login", {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete("auth/login");
    }
}

export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },

    getProfileStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },

    updateProfileStatus(status) {
        return instance.put(`profile/status/`, {status});
    },

    changePhoto(photo) {
        let formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            }
        )
    },

    saveProfileRequest(profileData) {
        return instance.put("profile", profileData);
    }
}

export const securityAPi = {
    getCaptcha() {
        return instance.get("security/get-captcha-url");
    }
}