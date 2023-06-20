import { useEffect, useState} from "react"

export default function useRandom({type, count, range}) {
    const [data, setData] = useState([])
    
    if (type === "number" && data.length < count) {
        const random = Math.floor(Math.random() * (range.max - range.min) + range.min)
        setData([...data, random])
    }

    else if(type === "string" && data.length < count) {
        const randomChars = Math.floor(Math.random() * 26) + 97;
        const random2 = String.fromCharCode(randomChars);
        setData([...data, random2])
    }
      
    const [dataNew, setDataNew] = useState(data)

    const shuffle = () => {
       const shuffle =  data.toSorted(() => Math.random() - 0.5)
       setData(shuffle)
    }

    const sorted = () => {
        const sorted = data.toSorted((a, b) => a - b)
        setData(sorted)
    }

    const max = () => {
        const maxValue = Math.max(...data)
        setDataNew(maxValue)
    }

    const min = () => {
        const minValue2 = Math.min(...data)
        setDataNew([minValue2])
    };

    return  [data, dataNew, {shuffle, sorted, max, min}] 

 
}
