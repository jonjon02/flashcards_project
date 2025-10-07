import './Library.css'

import { MyButton } from './button' 
import { AlignStartHorizontal, Search } from 'lucide-react'

function notify(msg) {
    alert(msg)
}

function Library() { 
    return (
    <div className="lib">
        <div className="search-bar">
            <div className="left-elements">
                <Search className="search-icon"/>
                <span>Click to Search</span>
            </div>
            <MyButton className="button" func={notify} msg={"look at this!"}/>
        </div>
    </div>
)
}

export default Library

