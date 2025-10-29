import { useCallback, useState } from "react";
import { FaSearch } from "react-icons/fa";

const debounce = (func, delay) => {
        let timer
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };

const SearchBar = ({data, getFilter}) => {

    const [searchString, setSearchString] = useState('')
    const decks = {data}

    const debouncedSearch = useCallback(
        debounce((value) => {
            setSearchString(value)
            getFilter(searchString)
        }, 400)
        , []
    )

    function handleSearch(event) {
        const value = event.target.value
        debouncedSearch(value)
    };

    return (
        <>
            <div className="mx-auto flex justify-center max-w-3xl">
                <form
                    onChange={handleSearch}> 
                    <input
                        placeholder="Search"
                        type="txt"
                        name="searchString"
                        className="bg-white my-4 block p-1.5 border-2 rounded-lg border-slate-100 focus:outline-0 hover:bg-slate-50 hover:w-180 focus:w-180 focus:bg-slate-100 w-150 duration-120">
                    </input>
                </form>
            </div>
        </>
    );
}
 
export default SearchBar;