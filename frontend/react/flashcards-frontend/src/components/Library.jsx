import './Library.css'

import { MyButton } from './Button' 
import { AlignStartHorizontal, Search } from 'lucide-react'

function Library() { 
    return (
    <div className="lib">
        <div className="search-bar">
            <div className="left-elements">
                <Search className="search-icon"/>
                <span>Click to Search</span>
            </div>
            <MyButton className="button" text={"Search"}/>
            
        </div>
    </div>
)
}

export default Library

