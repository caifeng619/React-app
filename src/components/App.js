import React from "react";
import Tjänster from "./Tjänster";
import undersökning from "../images/undersökning.jpg";
import akuttandvård from "../images/akuttandvård.jpg";
import tandhygienist from "../images/tandhygienist.jpg";
import övriga from "../images/övriga.jpg";

let tjänsterList=[
    {   "title":'Undersökning',
        "text":'Ta röntgenbilder, kontroll av tänder och tandkött',
        "image": undersökning
    },
    {
        "title":'Akuttandvård',
        "text":'Tandvärk, utslagen eller skadad tand etc.',
        "image":akuttandvård
    },
    {
        "title":'Tandhygienist',
        "text":'Tandstensborttagning och förebygande tandvård.',
        "image":tandhygienist
    },
    {
        "title":'Övriga tandvård',
        "text":'Alla andra typer av besvär som inte är akuta.',
        "image":övriga
    }
]
const App=()=>{
    return(
        <div>
            <Tjänster tjänster={tjänsterList}/>
        </div>
    )
}

export default App;