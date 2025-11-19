import { useState } from "react";

const DeckInputModal = ({ isOpen, toggle, userId, refreshDecks }) => {

    const [error, setError] = useState(null)
    const [loading, isLoading] = useState(null)

    async function handleSubmit(event) {

        setError(null)
        event.preventDefault();

        const formData = new FormData(event.target);
        const formValues = {
            deck_name: formData.get('deck-name'),
            deck_description: formData.get('deck-description'),
            user_id: userId
            }

        console.log(JSON.stringify(formValues))

        if(formValues.deck_name) {
        
            try {
                const response = await fetch('http://0.0.0.0:8000/library/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formValues)
                });
                const data = await response.json();
                console.log(data);

                if (!response.ok) {
                    setError(true);
                }
            
            } 
            catch {
                console.error(error)
                setError(true)
            }

            refreshDecks()
            toggle()
        }

        else {
            setError('No Deck Name provided!')
        }        
    }

    function handleReset(event) {    
        setError(null)
        toggle()
    }
    return (
        <>
        {isOpen && (
            <div className="flex-col border-1 justify-items-center mx-auto border-slate-100 w-90 h-110 rounded-2xl backdrop-blur-xl bg-slate-50/75 fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-3/5 overflow-auto shadow-md">
            <h1 className="my-5 font-bold text-2xl text-gray-600 cursor-default">Create new deck</h1>
                <form
                    // method="post"
                    onSubmit={handleSubmit}>
                    <input 
                        placeholder="Name"
                        type="text"
                        name="deck-name"
                        className="bg-white my-4 block p-1.5 border-2 rounded-lg border-slate-100 focus:outline-0 focus:bg-slate-50"/>
                    <textarea 
                        placeholder="Deck-Description" 
                        type="textarea"
                        name="deck-description"
                        className="bg-white max-h-60 min-h-40 my-4 block p-1.5 border-2 rounded-lg border-slate-100 focus:outline-0  focus:bg-slate-50"/>
                    <div
                        className="flex mx-auto justify-between">
                        <button
                            onClick={handleReset}
                            type="button"
                            className="text-gray-600 rounded-xl py-2 px-4 display flex items-center align-middle gap-4 border-1 border-slate-100 bg-white cursor-pointer ease-in-out duration-150 hover:bg-slate-50 active:bg-gray-100">
                            Cancel
                        </button>
                        <button
                            className="text-gray-600 rounded-xl py-2 px-4 display flex items-center align-middle gap-4 border-1 border-slate-100 bg-white cursor-pointer ease-in-out duration-150 hover:bg-slate-50 active:bg-gray-100"
                            type="submit">
                        Add Deck
                        </button>
                    </div>
                </form>
                {error && 
                <p className="my-3 text-red-300">Something went wrong: <br/> {error}</p>
                }
            </div>
        )}
        </>
    );
}
 
export default DeckInputModal;