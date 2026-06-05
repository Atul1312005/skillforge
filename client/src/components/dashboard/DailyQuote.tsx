import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"


export default function DailyQuote()
{
    const [quote, setQuote] = useState({
    author: "Atul Tripathi",
    quote: "Track your progress, trust the process, and keep moving forward."
    });
    const auth = useAuth()
    useEffect(()=>{
        auth?.APIFunctions.GetRequest("/quote",true).then((response:any)=>{
            if(response.data)
            setQuote(response.data.data);
        })
    },[])
    return (
    <>
        <h1 className="font-bold">Today's Daily Quote</h1>
        <p className="opacity-90 text-pretty text-sm">
            {quote.quote}
        </p>
        <h1 className="text-bold text-xs">~{quote.author}</h1>
    </>
  )
}