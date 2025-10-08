import './Button.css'
import { useState } from 'react'
import { AlignStartHorizontal, Search } from 'lucide-react'

export function MyButton(props) {

    const [answer, setAnswer] = useState(null)

    async function getData() {
        const url = "http://127.0.0.1:8000/library/deck/card/3"
        try {   
            const response = await fetch(url);
            if (!response) {
                throw new Error(`Response status ${response.status}`)
            }
   
            const resultSet = await response.json()
            const resultReadable = resultSet.question + "\n" + resultSet.answer + "\n" + resultSet.difficulty + "\n" + resultSet.date_created
            setAnswer(resultReadable)
            
            console.log(resultReadable)
            alert(resultReadable)
            
            }
    
            catch {
            console.error()
        }
        return resultSet
    }

    return (
        <>
        <button 
            onClick={getData} className='button'>
            Search
        </button>
        <div>
        <p className="api-result">
            Antwort: {answer}
        </p>
        </div>
        </>
)} 
