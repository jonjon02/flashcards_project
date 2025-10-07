import './Button.css'
import { AlignStartHorizontal, Search } from 'lucide-react'

export function MyButton(props) {

    async function getData() {
        const url = "http://127.0.0.1:8000/library/deck/card/3"
        try {   
            const response = await fetch(url);
            if (!response) {
                throw new Error(`Response status ${response.status}`)
            }
            console.log("test2")
            
            const result = await response.json()
            console.log(result.answer)
            
            }
        
            catch {
            console.error()
        }
    
        return result.answer
    }

    return (
        <button 
            onClick={getData} className='button'>
            Search
        </button>
    )
} 