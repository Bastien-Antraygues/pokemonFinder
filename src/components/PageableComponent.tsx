export function PageableComponent(props:{pageNumber:number,isPage:boolean,onSelectPage(page:number):void}){
    return(
        <>
            <button type="button" onClick={()=>props.onSelectPage(props.pageNumber)}
            className={"m-2 p-2 h-12 w-12 bg-pink-3 "+(props.isPage?"border-pink-6 border-4":"")} >
                {props.pageNumber}
            </button>
        </>
    )
}