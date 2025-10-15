import { FaBook } from 'react-icons/fa';

const DeckCard = (props) => {
    return (
        <>
        <div className=" bg-white m-2 border-b-2 border-gray-300 rounded-lg hover:scale-103 ease-in-out duration-150 cursor-pointer shadow-lg"> 
            <p className="flex items-center justify-around h-12 border-b-gray-200 p-2 bg-linear-to-t from-gray-500 to-slate-500 rounded-t-lg text-white font-bold border-b-5 align-middle text-center">
            <FaBook/>{props.deck_name} 
            </p>
            <p className="p-2 text-gray-600 bg pb-5 text-center"> 
                {props.deck_description}
            </p>
        </div>
        </>
    )
}
 
export default DeckCard;