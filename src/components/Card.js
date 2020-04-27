import React from "react"
import {Link} from "react-router-dom"

const Card = ({id, title, text, image}) => {
    
    return (
        <div className={"card"} key={id}>
            <img src={image} className={"card-img-top"} alt={title} />
            <div className={"card-body"}>
                <h5 className={"card-title"}>{title}</h5>
                <p className={"card-text"}>{text}</p>
                <Link to="/tid"><button className={"btn btn-boka"}>Boka</button></Link>
            </div>
        </div>
    )
}
export default Card;