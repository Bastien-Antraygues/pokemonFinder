import type { Pokemon } from "../interfaces/Pokemon";
import fetch from "../config/fetch";
 


const api = {
  getPokemons: async () => {
    return fetch.get<Pokemon[]>("/pokemon/all").then((res)=> res.data)
  },
  getPokemonById: async (id:string) => {
    return fetch.get<Pokemon>("/pokemon/"+id).then((res)=>res.data)
  },
  getNewToken: async () => {
    return fetch.get("/auth/refreshToken").then((res)=>res.data)
  },
  getUserMe: async () => {
    return fetch.get("/auth/me").then((res)=>res.data)
  },
  login: async (email:string, password:string) => {
    return fetch.post("/auth/login", {email, password}).then((res)=>res.data)
  },
  logout: async () => {
    return fetch.post("/auth/logout").then((res)=>res.data)
  }
}


 
export default api;