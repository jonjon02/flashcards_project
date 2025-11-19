const FlashCardEditor = ({ isOpen, toggle}) => {
    return (
        <>
        {isOpen && (
            <div className="flex-col border-1 justify-items-center mx-auto border-slate-100 w-90 h-110 rounded-2xl backdrop-blur-xl bg-slate-50/75 fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-3/5 overflow-auto shadow-md">
                <p>hello world</p>
            </div>
        )}
        </>
    );
}
 
export default FlashCardEditor;