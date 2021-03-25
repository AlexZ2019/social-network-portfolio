import {instance} from "./API";

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
