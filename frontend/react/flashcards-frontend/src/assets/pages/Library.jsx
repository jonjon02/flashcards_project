import DeckCard from "../../components/DeckCard";
import { FaPlusCircle } from 'react-icons/fa';

import { useEffect } from "react";
import { useState } from "react"; 


const Library = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getDecks = async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(
                    'http://0.0.0.0:8000/library/'
                )

                if (!response.ok) {
                    setError(`HTTP error! status: ${response.status}`)
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const decks = await response.json()
                console.log(decks)
                setData(decks)

            }
            catch (error) {
                console.error("Fetch error", error)
                setError(`Loading failed: ${error.message}`)
            }
            finally {
                setLoading(false)
            }
        }
        getDecks();
    }, [])

    return (
        <>
        <div className="flex-col justify-start">
            <div className="max-w-3xl grid grid-cols-3 gap-4 mx-auto">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {data && data.map((deck) => (
                    <DeckCard 
                    deck_name={deck.deck_name}
                    deck_description={deck.deck_description}
                    />
                ))}
            </div>
            <div className="my-10 py-10 max-w-3xl mx-auto flex justify-end border-t-2 border-gray-100">
                <button><FaPlusCircle size={40} className="fill-slate-500 hover:fill-blue-200 hover:rotate-180 duration-500 active:fill-gray-700 cursor-pointer"/></button>
            </div>
        </div>
        </>
        
    );
}
 
export default Library;