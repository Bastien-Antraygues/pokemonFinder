import axios from "axios";
import type { Page } from "../interfaces/Page";
import type { Pokemon } from "../interfaces/Pokemon";
import type { Ability } from "../interfaces/Ability";

 
const fetch = axios.create({

  baseURL: "/api",

  headers: {

    "Content-Type": "application/json"

  }

});

const api = {
  getPokemons: async () => {
    return fetch.get<Pokemon[]>("/pokemon/all").then((res)=> res.data)
  },
  getPokemonById: async (id:string) => {
    return fetch.get<Pokemon>("/pokemon/"+id).then((res)=>res.data)
  },
  
}


 
export default api;