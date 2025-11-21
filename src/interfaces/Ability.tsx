export interface Ability{
    effect_entries: {
        effect:string
        language:{
            name:string,
            url:string
        }
    }[],
    flavor_text_entries:{
        flavor_text:string,
        language:{
            name:string,
            url:string
        }
    }[],
    names:{
        language:{name:string,url:string},
        name:string
    }[]
}