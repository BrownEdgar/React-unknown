import { useState } from "react"



export default function useRandom({type, count, range}){
    const [data, setData] = useState([])
    const shuffle = () => {
        const shuffleFunc = [...data].sort(() => Math.random() - 0.5)
        setData(shuffleFunc);
        console.log(data);
      };
    const random = () => {
        
    }
    return [data, { shuffle, random }]
}
