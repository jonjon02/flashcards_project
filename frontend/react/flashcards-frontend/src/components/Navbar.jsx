import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/"> Home</Link>
                <Link to="/library">Library</Link>
                <Link to="/learn">Learn</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;