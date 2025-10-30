const FlashCard = ({question, answer}) => {
    return (
        <>
            <div className="min-h-40 max-w-3xl bg-white m-2 border-slate-100 rounded-lg hover:scale-103 ease-in-out duration-150 cursor-pointer border-1"> 

                <p className="flex items-center justify-around h-12 border-b-slate-200 p-2 bg-slate-50 rounded-t-lg text-gray-600 font-bold align-middle text-center">
                {question} 
                </p>
                <p className="p-2 text-gray-600 bg pb-5 text-center"> 
                    {answer}
                </p>
            </div>
        </>
    )
}
 
export default FlashCard;