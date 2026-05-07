import fetch from "../config/fetch";

export const tokenInterceptor = (getToken: () => string | null) => {
    fetch.interceptors.request.use((config) => {
        const token = getToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    });
}