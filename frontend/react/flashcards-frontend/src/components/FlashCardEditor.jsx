const FlashCardEditor = ({ isOpen, toggle}) => {
    return (
        <>
        {isOpen && (
            <>
            <div className="flex-col border-1 justify-items-center mx-auto border-slate-100 w-6xl h-7/10 rounded-2xl backdrop-blur-xl bg-slate-200/75 fixed top-7/12 left-1/2 z-200 -translate-x-1/2 -translate-y-3/5 overflow-auto shadow-md">
                <div className="flex mx-auto h-[90%]">
                    <form className="grid grid-cols-2 gap-4 justify-items-center mx-auto">
                        <textarea
                            placeholder="Question" 
                            type="textarea"
                            name="card-question"
                            className="m-2 w-full bg-white p-1.5 border-2 rounded-lg border-slate-100 focus:outline-0  focus:bg-slate-50"
                            >
                        </textarea>
                        <textarea
                        placeholder="Answer" 
                            type="textarea"
                            name="card-answer"
                            className="m-2  bg-white p-1.5 border-2 rounded-lg border-slate-100 focus:outline-0  focus:bg-slate-50">
                        </textarea>
                    </form>
                </div>       
                <div>
                    <h1>tools...</h1>
                    <h1>mooodess...</h1>
                </div>
            </div>
            </>
   
            //bottom toolbar? 
        )}
        </>
    );
}
 
export default FlashCardEditor;