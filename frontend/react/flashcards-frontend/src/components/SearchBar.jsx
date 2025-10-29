import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = (decks) => {

    const [searchString, setSearchString] = useState(null)
    const decks = {decks}

    return (
        <>
            <div className="mx-auto flex justify-center max-w-3xl">
                <input 
                    placeholder="Search"
                    type="text"
                    name="deck-name"
                    className="bg-white my-4 block p-1.5 border-2 rounded-lg border-slate-100 focus:outline-0 hover:bg-slate-50 hover:w-180 focus:w-180 focus:bg-slate-100 w-150 duration-120">
                </input>
            </div>
        </>
    );
}
 
export default SearchBar;