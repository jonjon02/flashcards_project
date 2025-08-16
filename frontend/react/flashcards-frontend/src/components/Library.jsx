import './Library.css'
import { AlignStartHorizontal, Search } from 'lucide-react'

function Library() { 
    return (
    <div className="lib">
        <div className="search-bar">
            <Search className="search-icon"/>
            <span>
            Search Decks
            </span>
        </div>
    </div>
)
}

export default Library

