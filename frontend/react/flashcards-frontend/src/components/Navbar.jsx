import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="sticky top-0">
            <div className="mb-2 border-gray-100 border-b-3 bg-wwhite max-w-7xl flex justify-center items-center h-12 space-x-14 text-black">
                <h1 className="ml-4 text-black">
                🐡
                    </h1>
                <Link to="/" className=" p-3 hover:bg-gray-100 hover:inset-shadow-xs duration-200 ease-in-out active:bg-gray-200"> Home</Link>
                <Link to="/library" className="p-3 hover:bg-gray-100 hover:inset-shadow-xs duration-200 ease-in-out active:bg-gray-200">Library</Link>
                <Link to="/notes" className="p-3 hover:bg-gray-100 hover:inset-shadow-xs duration-200 ease-in-out active:bg-gray-200">Notes</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;