import { Link } from 'react-router-dom'

const Navbar = () => {  
    return (
        <nav className="z-100 sticky top-0">
            <div className="mb-2 border-b-1 border-slate-200  flex justify-center items-center h-12 space-x-14 text-black bg-slate-50">
                <Link to="/" className=" p-3 hover:bg-slate-200 hover:inset-shadow-xs duration-200 ease-in-out active:bg-slate-300"> Home</Link>
                <Link to="/library" className="p-3 hover:bg-slate-200 hover:inset-shadow-xs duration-200 ease-in-out active:bg-slate-300">Library</Link>
                <Link to="/notes" className="p-3 hover:bg-slate-200 hover:inset-shadow-xs duration-200 ease-in-out active:bg-slate-300">Notes</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;