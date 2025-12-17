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
    return fetch.get<Page>("/pokemon/?limit=1302").then((res)=> res.data)
  },

  getPokemon: async (url:string) => {
    return fetch.get<Pokemon>(url).then((res)=> res.data)
  },
  getPokemonById: async (id:string) => {
    return fetch.get<Pokemon>("/pokemon/"+id).then((res)=>res.data)
  },
  getAbility: async (url:string) =>{
    return fetch.get<Ability>(url).then((res)=> res.data)
  }
}


 
export default api;