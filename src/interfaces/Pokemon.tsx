import type { Types } from "./Types"

export interface Pokemon{
    id:number,
    name:string,
    sprites:{
        front_default:string,
        back_default:string
    },
    types:[{
        type:{
            name:string,
            url:string,
    }}],
    order:number
}