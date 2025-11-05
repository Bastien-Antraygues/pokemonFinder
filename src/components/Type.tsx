export function Type(props:{name:string}){
    
    function getType(name:string){
        
        switch(name){
            case 'grass':
                return 'bg-[#9bcc50] text-black'
            case 'fire':
                return 'bg-[#fd7d24] text-white'
            case 'water':
                return 'bg-[#4592c4] text-white'
            case 'poison':
                return 'bg-[#b97fc9] text-white'
            case 'flying':
                return 'bg-[#3dc7ef] text-black'
            case 'bug':
                return 'bg-[#729f3f] text-white'
            case 'normal':
                return 'bg-[#a4acaf] text-black'
            case 'electric':
                return 'bg-[#eed535] text-black'
            case 'sol':
                return 'bg-[#ab9842] text-black'
            case 'fairy':
                return 'bg-[#fdb9e9] text-black'
            case 'fighting':
                return 'bg-[#d56723] text-white'
            case 'psychic':
                return 'bg-[#f366b9] text-white'
            case 'rock':
                return 'bg-[#a38c21] text-white'
            case 'steel':
                return 'bg-[#9eb7b8] text-black'
            case 'ice':
                return 'bg-[#51c4e7] text-black'
            case 'ghost':
                return 'bg-[#7b62a3] text-white'
            case 'dragon':
                return 'bg-[#53a4cf] text-white'
            case 'dark':
                return 'bg-[#707070] text-white'
        }
    }
    
    return(
        <>
            <div className={getType(props.name)+" rounded-[3px] w-[38.4375%] leading-8 mx-auto"}>{props.name}</div>
        </>
    )
}