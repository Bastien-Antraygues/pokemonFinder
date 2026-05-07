import { createContext, use, useState } from "react";
import type { User } from "../interfaces/User";

type AuthContextType = {
    user: User | null,
    token: string | null,
    login: (userData: User, token: string) => void,
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

    const login = (userData: User, token: string) => {
        setUser(userData);
        setToken(token);
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
    return use(AuthContext);
}