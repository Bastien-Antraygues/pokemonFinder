import type { Types } from "./Types"

export interface Pokemon{
    id:number,
    name:string,
    sprites:{
        front_default:string,
        back_default:string
    },
    types:Types[],
    order:number
}