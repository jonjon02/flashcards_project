import { useCallback } from "react";

const debounce = (func, delay) => {
        let timer
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };

const SearchBar = ({filterData}) => {

    const debouncedSearch = useCallback(
        debounce((value) => {
            filterData(value)
        }, 250)
        , []
    )

    function handleSearch(event) {
        const value = event.target.value
        debouncedSearch(value)
    };

    return (
        <>
            <div className="z-25 sticky top-14 mx-auto flex justify-center max-w-3xl">
                <form
                    className=""
                    onChange={handleSearch}> 
                    <input
                        placeholder="Search"
                        type="txt"
                        name="searchString"
                        className="px-5 bg-slate-50/75 backdrop-blur-md my-4 block p-1.5 border-1 rounded-2xl border-slate-100 focus:outline-0 hover:bg-slate-50 hover:w-180 focus:w-180 focus:bg-slate-100/70 w-150 duration-120 h-12">
                    </input>
                </form>
            </div>
        </>
    );
}
 
export default SearchBar;