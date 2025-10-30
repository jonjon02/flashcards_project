import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import FlashCard from "../../components/FlashCard"
import SearchBar from "../../components/SearchBar"

const Deck = () => {

    const params = useParams()

    const deckId = params.deckId

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    //filtering
    const [filterString, setString] = useState('')
    
    function filterData(string) {
        setString(string)
    }

    const getCards = async () => {
                setLoading(true)
                setError(null)
                try {
                    const response = await fetch(
                        `http://0.0.0.0:8000/library/deck/${deckId}`
                    )

                    if (!response.ok) {
                        setError(`HTTP error! status: ${response.status}`)
                        throw new Error(`HTTP error! status: ${response.status}`)
                    }

                    const cards = await response.json()
                    console.log(cards)
                    setData(cards)

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
        getCards();
    }, [])

    const empty = (data) => {if(!data) return true}


    return (
        <>
        <SearchBar filterData={filterData}/>
        <div className="flex-col justify-start">
            <div className="max-w-3xl grid grid-cols-1 gap-4 mx-auto pb-5 pt-2">
            {data && data.filter((data) => (
                data.question.q.toLowerCase().includes(filterString.toLowerCase()) ||
                data.answer.a.toLowerCase().includes(filterString.toLowerCase())
                ))
                .map((card) => (
                    <FlashCard 
                    question={card.question.q}
                    answer={card.answer.a}
                    cardId={card.card_id}
                    />
                    ))}
            {loading && <p>...Loading</p>}
            {error && <p>...error</p>}
            {/* {empty && <p className="p-10">Please add Cards to your Deck to view them!</p>} */}
            </div>
        <div className="sticky bottom-0 backdrop-blur-md bg-white/50 py-5 mx-auto flex justify-end border-t-1 border-gray-100">
                <div 
                className="w-3xl mx-auto flex justify-end">
                <button 
                    
                    className="text-gray-600 rounded-xl py-3 px-4 display bg-slate-50/50 flex items-center align-middle gap-2 border-1 border-slate-200 cursor-pointer ease-in-out duration-150 hover:bg-slate-50 active:bg-gray-100">
                New Flashcard
                {/* <FaPlusCircle size={40} className="fill-slate-500 hover:fill-blue-200 hover:rotate-180 duration-500 active:fill-gray-700 cursor-pointer"/> */}
                </button>
                </div>
        </div>
        </div>
        </>
    );
}
 
export default Deck;