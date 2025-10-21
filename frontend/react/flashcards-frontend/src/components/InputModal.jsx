const InputModal = ({ isOpen, toggle }) => {
    return (
        <>
        {isOpen && (
            <div className="flex-col border-1 justify-items-center mx-auto border-slate-100 w-90 h-110 rounded-2xl backdrop-blur-3xl fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-90 overflow-auto shadow-md">
            <h1 className="my-5 font-bold text-2xl text-slate-600 cursor-default">Create new deck</h1>
                <form>
                    <input 
                        placeholder="Deck-Name" type="text"
                        className="bg-white my-4 block p-1.5 border-2 rounded-lg border-slate-100 focus:outline-0 focus:bg-slate-50"
                        />
                    <textarea 
                        placeholder="Deck-Description" type="textarea"
                        className="bg-white min-h-40 my-4 block p-1.5 border-2 rounded-lg border-slate-100 focus:outline-0  focus:bg-slate-50"
                        />
                </form>
                <button onClick={toggle}
                    className="text-gray-600 rounded-2xl py-2 px-4 display flex items-center align-middle gap-4 drop-shadow-sm bg-white cursor-pointer ease-in-out duration-150 hover:bg-slate-50 active:bg-gray-100"
                    >
                    Add Deck
                </button>
            </div>
        )}
        </>
    );
}
 
export default InputModal;