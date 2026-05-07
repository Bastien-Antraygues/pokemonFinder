import type { Pokemon } from "../interfaces/Pokemon";
import fetch from "../config/fetch";
 


const api = {
  getPokemons: async () => {
    return fetch.get<Pokemon[]>("/pokemon/all").then((res)=> res.data)
  },
  getPokemonById: async (id:string) => {
    return fetch.get<Pokemon>("/pokemon/"+id).then((res)=>res.data)
  },
  
}


 
export default api;