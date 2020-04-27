import React from "react";
import Tjänster from "./Tjänster";
import undersökning from "../images/undersökning.jpg";
import akuttandvård from "../images/akuttandvård.jpg";
import tandhygienist from "../images/tandhygienist.jpg";
import övriga from "../images/övriga.jpg";

let tjänsterList=[
    {   "id":'1',
        "title":'Undersökning',
        "text":'Ta röntgenbilder, kontroll av tänder och tandkött',
        "image": undersökning
    },
    {
        "id":'2',
        "title":'Akuttandvård',
        "text":'Tandvärk, utslagen eller skadad tand etc.',
        "image":akuttandvård
    },
    {
        "id":'3',
        "title":'Tandhygienist',
        "text":'Tandstensborttagning och förebygande tandvård.',
        "image":tandhygienist
    },
    {
        "id":'4',
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