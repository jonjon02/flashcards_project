import { Link } from 'react-router-dom'

const Navbar = () => {  
    return (
        <nav className="z-100 sticky top-0">
            
            <div className="mb-2 border-b-1 border-slate-200  flex justify-center items-center h-12 space-x-14 text-black bg-slate-50">
                <Link to="/" className=" p-3 hover:bg-slate-200 hover:inset-shadow-xs duration-200 ease-in-out active:bg-slate-300"> Home</Link>
                <Link to="/library" className="p-3 hover:bg-slate-200 hover:inset-shadow-xs duration-200 ease-in-out active:bg-slate-300">Library</Link>
                <Link to="/notes" className="p-3 hover:bg-slate-200 hover:inset-shadow-xs duration-200 ease-in-out active:bg-slate-300">Notes</Link>
                {/* <div className='flex justify-around'>
                    <div className='flex justify-center'>
                        <h1 className='flex justify-center items-center bg-slate-400 rounded-3xl min-w-9 min-h-9 border-1 border-white text-white font-black hover:bg-slate-300 duration-100 cursor-pointer'>J</h1>    
                    </div>
                    <button 
                        className="text-gray-600 mx-5 rounded-xl max-w-20 max-h-5 mt-0.5 py-4 px-4 display bg-slate-50/50 flex items-center align-middle gap-2 border-1 border-slate-200 cursor-pointer ease-in-out duration-150 hover:bg-slate-50 active:bg-gray-100">
                    Logout
                    </button>
                </div> */}
            </div>
        </nav>
    );
}
export default Navbar;