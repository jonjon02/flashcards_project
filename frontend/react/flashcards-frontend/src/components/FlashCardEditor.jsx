const FlashCardEditor = ({ isOpen, toggle}) => {
    return (
        <>
        {isOpen && (
            <div className="flex-col border-1 justify-items-center mx-auto border-slate-100 w-6xl h-7/10 rounded-2xl backdrop-blur-xl bg-slate-200/75 fixed top-7/12 left-1/2 z-200 -translate-x-1/2 -translate-y-3/5 overflow-auto shadow-md">
                <p>hello world</p>
            </div>
            //mode -> fc / mc
            // editor left question -> right answer
            //bottom toolbar? 
        )}
        </>
    );
}
 
export default FlashCardEditor;