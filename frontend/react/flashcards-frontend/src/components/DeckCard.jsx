import { FaBook } from 'react-icons/fa';

const DeckCard = (props) => {
    return (
        <>
        <div className="min-h-40 bg-white m-2 border-slate-100 rounded-lg hover:scale-103 ease-in-out duration-150 cursor-pointer border-1"> 
            <p className="flex items-center justify-around h-12 border-b-slate-200 p-2 bg-slate-50 rounded-t-lg text-gray-600 font-bold align-middle text-center">
            {/* <FaBook/> */}
            {props.deck_name} 
            </p>
            <p className="p-2 text-gray-600 bg pb-5 text-center"> 
                {props.deck_description}
            </p>
        </div>
        </>
    )
}
 
export default DeckCard;