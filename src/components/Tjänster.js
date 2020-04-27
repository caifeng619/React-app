import React, {Component} from "react";
import Card from "./Card";
import "../style/_tjänster.scss";
import Steg from "./Steg";


class Tjänster extends Component{
    render(){
        const {tjänster}=this.props
        return(
            <div>
                <Steg/>
                <div className="tjänster-container">
                {(tjänster.map(
                    tjänst =>
                    <Card 
                    id={tjänst.id}
                    title={tjänst.title}
                    text={tjänst.text}
                    image={tjänst.image}
                    />
                ))}
            </div>
            </div>
            
        )
    }
}

export default Tjänster;