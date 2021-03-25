import {instance} from "./API";

export const securityAPi = {
    getCaptcha() {
        return instance.get("security/get-captcha-url");
    }
}