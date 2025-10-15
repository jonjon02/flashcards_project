import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="sticky top-0">
            <div className="mb-2 border-slate-600 border-b-3 bg-slate  flex justify-center items-center h-12 space-x-14 text-white bg-slate-500">
                <h1 className="ml-4 text-black">
                💡
                    </h1>
                <Link to="/" className=" p-3 hover:bg-slate-600 hover:inset-shadow-xs duration-200 ease-in-out active:bg-slate-700"> Home</Link>
                <Link to="/library" className="p-3 hover:bg-slate-600 hover:inset-shadow-xs duration-200 ease-in-out active:bg-slate-700">Library</Link>
                <Link to="/notes" className="p-3 hover:bg-slate-600 hover:inset-shadow-xs duration-200 ease-in-out active:bg-slate-700">Notes</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;