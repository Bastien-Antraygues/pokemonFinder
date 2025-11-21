import type { Pokemon } from "../interfaces/Pokemon";


export function PokemonStats(props:{stats:Pokemon["stats"]}){
    return(
        <table className="w-[60%] md:w-[80%]">
            <tbody>
                {
                    props.stats.map((pokeStat,index)=>{
                        return <tr key={index}>
                            <td className="text-center"> {getName(pokeStat.stat.name)} </td>
                            <td className=" w-[50%]"> 
                                <div className="bg-[#f5f5f5] w-full m-1 rounded-sm overflow-hidden">
                                    <div className={getClass(pokeStat.base_stat)} style={{width:+getWith(pokeStat.base_stat)+"%"}} >{pokeStat.base_stat}</div>
                                </div>
                                 
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

function getName(name:string){
    switch(name){
        case "hp" : return "Hp"
        case "attack" : return "Attack"
        case "defense" : return "Defense"
        case "special-attack": return "Special attack"
        case "special-defense": return "Special defense"
        case "speed" : return "Speed"
    }
}

function getClass(stat:number){
    let className = "text-white text-center"
    if(stat<=50){
        className +=" bg-stats-bar-1"  
    }else if(stat<80){
        className +=" bg-stats-bar-2"
    }else if(stat<100){
        className +=" bg-stats-bar-3"
    }else if(stat==100){
        className +=" bg-stats-bar-4"
    }else if(stat<120){
        className +=" bg-stats-bar-5"
    }else if(stat<150){
        className +=" bg-stats-bar-6"
    }else if(stat>=150){
        className +=" bg-stats-bar-7"
    }else{
        className +=" bg-red-700"
    }
    return className
}

function getWith(stat:number){
    if(stat==1) return 5
    return (stat*18)/40
}