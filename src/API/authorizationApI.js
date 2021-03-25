import {instance} from "./API";

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