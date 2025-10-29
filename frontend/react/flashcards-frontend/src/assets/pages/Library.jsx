import DeckCard from "../../components/DeckCard";
import InputModal from "../../components/InputModal";
import SearchBar from "../../components/SearchBar";
import { FaPlusCircle } from 'react-icons/fa';

import { useEffect } from "react";
import { useState } from "react"; 


const Library = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

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

    useEffect(() => {
        getDecks();
    }, [])

    //search-bar
    const [filter, setFilter] = useState(data)

    const getFilter = (filter) => {
        setFilter(filter)
    }


    //new deck input-modal
    const [deckName, setDeckName] = useState(null)
    const [deckDescription, setDeckDescription] = useState(null)
    const [isOpen, setVisibility] = useState(false)
    const toggleInputModal = () => {
        setVisibility(!isOpen)
    }

    return (
        <>
        <div className="flex-col justify-start">
            <InputModal 
                isOpen={isOpen} 
                toggle={toggleInputModal} 
                userId={5}
                refreshDecks={getDecks}
                />
            <SearchBar
               data={data} 
               getFilter={getFilter}
            />
            <div className="max-w-3xl grid grid-cols-3 gap-4 mx-auto pb-5 pt-2">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {data && data.map((deck) => (
                    <DeckCard 
                    deck_name={deck.deck_name}
                    deck_description={deck.deck_description}
                    />
                ))}
            </div>
            <div className="sticky bottom-0 backdrop-blur-lg bg-white/75 py-5 mx-auto flex justify-end border-t-1 border-gray-100">
                <div 
                className="w-3xl mx-auto flex justify-end">
                <button 
                    onClick={toggleInputModal}
                    className="text-gray-600 rounded-xl py-3 px-4 display bg-slate-50/50 flex items-center align-middle gap-2 border-1 border-slate-200 cursor-pointer ease-in-out duration-150 hover:bg-slate-50 active:bg-gray-100">
                New Deck
                {/* <FaPlusCircle size={40} className="fill-slate-500 hover:fill-blue-200 hover:rotate-180 duration-500 active:fill-gray-700 cursor-pointer"/> */}
                </button>
                </div>
            </div>
            
        </div>
       
        </>
    );
}
 
export default Library;