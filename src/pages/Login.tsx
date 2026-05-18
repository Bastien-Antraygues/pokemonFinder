import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { useState } from "react";
import { useAuth } from "../providers/AuthProvider";

export function Login(){

    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await api.login(email, password);
            login(res.user, res.token);
            navigate("/");
        } catch (error) {
            console.error("Login failed", error);
        }
    }

    return(
        <form className="m-4 p-4 border-2 w-[40%] mx-auto border-pink-6 bg-pink-3 rounded-xl
        flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex gap-1 justify-center">
                <div className="w-[15%] mt-2"><label htmlFor="email" className="">Email :</label></div>
                <input type="email" name="email" id="email" placeholder="exemple@gmail.com"
                className="w-[80%] p-2 border-2 bg-pink-3 border-pink-12 rounded-lg" 
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex gap-1 justify-center">
                <div className="w-[15%] mt-2"><label htmlFor="password" className="">Password :</label></div>
                <input type="password" name="password" id="password" placeholder="password"
                className="w-[80%] p-2 border-2 bg-pink-3 border-pink-12 rounded-lg" 
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="flex justify-center">
                <button className="mr-4 text-pink-12 underline">Forgot Password?</button>
                <Link to="/signup" className="text-pink-12 underline">Sign Up</Link>
            </div>
            <div className="flex justify-center">
                <button className="bg-pink-8 hover:bg-pink-9 text-white font-bold py-2 px-4 rounded-lg">Login</button>
            </div>
            
        </form>
    )
}