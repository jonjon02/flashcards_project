const FlashCardEditor = ({ isOpen, toggle}) => {
    return (
        <>
        {isOpen && (
            <>
            <div className="flex-col border-1 justify-items-center mx-auto border-slate-100 w-6xl h-7/10 rounded-2xl backdrop-blur-xl bg-slate-50/75 fixed top-7/12 left-1/2 z-200 -translate-x-1/2 -translate-y-3/5 overflow-auto shadow-md">
                <div className="flex mx-auto h-[82%] w-full">
                    <form className="flex justify-items-center mx-auto w-full">
                        <textarea
                            placeholder="Question" 
                            type="textarea"
                            name="card-question"
                            className="m-2 h-full w-[90%] max-h-full bg-white p-1.5 border-2 rounded-lg border-slate-100 focus:outline-0  focus:bg-slate-50"
                            >
                        </textarea>
                        <textarea
                        placeholder="Answer" 
                            type="textarea"
                            name="card-answer"
                            className="m-2 h-full w-[90%] max-h-full bg-white p-1.5 border-2 rounded-lg border-slate-100 focus:outline-0  focus:bg-slate-50">
                        </textarea>
                    </form>
                </div>       
                <div className="flex justify-between w-full my-2 py-4 px-2">
                    <h1>tools...</h1>
                    <h1>mooodess...</h1>
                    <button
                    className="text-gray-600 rounded-xl py-3 px-4 display bg-slate-50/50 flex items-center align-middle gap-2 border-1 border-slate-200 cursor-pointer ease-in-out duration-150 hover:bg-slate-50 active:bg-gray-100">
                    Add Card
                </button>
                </div>
                
            </div>
            </>
   
            //bottom toolbar? 
        )}
        </>
    );
}
 
export default FlashCardEditor;