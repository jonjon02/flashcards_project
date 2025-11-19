import DeckCard from "../../components/DeckCard";
import DeckInputModal from "../../components/DeckInputModal";
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

                    console.log(data)

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
    const [filterString, setString] = useState('')
   
    function filterData(string) {
        setString(string)
    }
    
    //new deck input-modal
    const [DeckInputisOpen, setVisibility] = useState(false)
    const toggleDeckInputModal = () => {
        setVisibility(!DeckInputisOpen)
    }

    return (
        <>
        <div className="flex-col justify-start">
            <DeckInputModal 
                isOpen={DeckInputisOpen} 
                toggle={toggleDeckInputModal} 
                userId={5}
                refreshDecks={getDecks}
                />
            <SearchBar
               filterData={filterData}
            />
            <div className="max-w-3xl grid grid-cols-3 gap-4 mx-auto pb-5 pt-2">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {data && data.filter((data) => (
                        data.deck_name.toLowerCase().includes(filterString.toLowerCase()) ||
                        data.deck_description.toLowerCase().includes(filterString.toLowerCase())
                        ))
                        .map((deck) => (
                        <DeckCard 
                        deck_id={deck.deck_id}
                        deck_name={deck.deck_name}
                        deck_description={deck.deck_description}
                        />
                ))}
            </div>
            <div className="sticky bottom-0 backdrop-blur-md bg-white/50 py-5 mx-auto flex justify-end border-t-1 border-gray-100">
                <div 
                className="w-3xl mx-auto flex justify-end">
                <button 
                    onClick={toggleDeckInputModal}
                    className="text-gray-600 rounded-xl py-3 px-4 display bg-slate-50/50 flex items-center align-middle gap-2 border-1 border-slate-200 cursor-pointer ease-in-out duration-150 hover:bg-slate-50 active:bg-gray-100">
                New Deck
                </button>
                </div>
            </div>
            
        </div>
       
        </>
    );
}
 
export default Library;