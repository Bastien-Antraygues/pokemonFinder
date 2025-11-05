import { useEffect, useState } from "react";

export function useFetch<T>(url:string): T | null{
    const [data, setData] = useState(null)
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(setData)
    },[url])
    return data
}