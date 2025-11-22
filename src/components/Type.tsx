export function Type(props:{name:string}){
    
    return(
        <>
            <div className={TYPE_STYLES[props.name]+" rounded-[3px] w-[38.4375%] leading-8 mx-auto"}>{props.name}</div>
        </>
    )
}

const TYPE_STYLES: Record<string, string> = {
    grass: 'bg-[#9bcc50] text-black',
    fire: 'bg-[#fd7d24] text-white',
    water: 'bg-[#4592c4] text-white',
    poison: 'bg-[#b97fc9] text-white',
    flying: 'bg-[#3dc7ef] text-black',
    bug: 'bg-[#729f3f] text-white',
    normal: 'bg-[#a4acaf] text-black',
    electric: 'bg-[#eed535] text-black',
    sol: 'bg-[#ab9842] text-black',
    fairy: 'bg-[#fdb9e9] text-black',
    fighting: 'bg-[#d56723] text-white',
    psychic: 'bg-[#f366b9] text-white',
    rock: 'bg-[#a38c21] text-white',
    steel: 'bg-[#9eb7b8] text-black',
    ice: 'bg-[#51c4e7] text-black',
    ghost: 'bg-[#7b62a3] text-white',
    dragon: 'bg-[#53a4cf] text-white',
    dark: 'bg-[#707070] text-white',
    ground: 'bg-[#ab9842] text-black',
};