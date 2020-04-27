import React from "react";
import Steg from "./Steg"
import "../style/_choosetime.scss";
import {Link} from "react-router-dom"

const ChooseTime = () => {
    return (
        <div>
            <Steg />
            <div className="choosetime-container">
                <form>
                    <h3>Välj datum och en tid!</h3>  
                    <p>Du kan ändra eller avboka din tid utan kostnad online.</p>
                    <label for="datum">Datum</label>
                    <input type="date" id="datum" name="datum" value="2020-04-27" /><br/>
                    <label for="time">Tid</label>
                    <input type="text" id="tid" name="tid"></input>
                    <Link to="/form"><button className="btn btn-boka">Gå vidare</button></Link>
                </form>
            </div>
        </div>
    )
}
export default ChooseTime;