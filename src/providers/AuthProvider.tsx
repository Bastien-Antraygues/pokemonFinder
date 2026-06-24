import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import type { User } from "../interfaces/User";
import api from "../services/api";
import fetch from "../config/fetch";

type AuthContextType = {
    user: User | null,
    token: string | null,
    login: (token: string) => void,
    logout: () => void,
    isAuthorized: (requiredRole: string) => boolean
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    token: null,
    login: () => { },
    logout: () => { },
    isAuthorized: () => false
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(()=>{
        const fetchMe =  async () => {
            try {
                const res = await api.getNewToken()
                const newToken = res.token;
                fetch.defaults.headers["Authorization"] = `Bearer ${newToken}`;
                setToken(newToken);
                const userData = await api.getUserMe()
                setUser(userData.user)
            }catch{
                setToken(null)
                setUser(null)
            }
        };
        fetchMe()
    },[]);

    useLayoutEffect(()=>{
        fetch.defaults.headers["Authorization"] = token ? `Bearer ${token}` : "";
    },[token])

    const login = async (token: string) => {
        setToken(token);
        const userData = await api.getUserMe()
        setUser(userData.user);
        
    }

    const logout = () => {
        setUser(null);
        setToken(null);
    }

    const isAuthorized = (requiredRole: string) => {
        if (!token) return false;
        if (!user) return false;
        return user.role === requiredRole;
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthorized }}>
            {children}
        </AuthContext.Provider>
    );

}

export function useAuth() {
    return useContext(AuthContext);
}