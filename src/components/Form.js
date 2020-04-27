import React from "react";
import "../style/_form.scss";
import { Link } from "react-router-dom";
import Steg from "./Steg";

class Form extends React.Component {
    state = {
        name: "",
        appointmentTime: "",
        telefon: ""
    }

    handleOnChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleOnChangeEmail = (e) => {
        this.setState({
            appointmentTime: e.target.value
        })
    }
    handleOnChangeTel = (e) => {
        this.setState({
            telefon: e.target.value
        })
    }
    handleOnSubmit = e => {
        e.preventDefault()
        localStorage.setItem("state", JSON.stringify(this.state))
    }

    render() {
        return (
            <div>
                <Steg />
                <div className={"form-container"}>
                    <form onSubmit={this.handleOnSubmit}>
                        <h3>Fyll kontakt information för att boka!</h3>
                        <input type={"text"} name={"name"} onChange={this.handleOnChangeName} placeholder={"Ange ditt name"}></input><br />
                        <input type={"email"} name={"email"} onChange={this.handleOnChangeEmail} placeholder={"Ange din e-postadress"}></input><br />
                        <input type={"number"} name={"telefon"} onChange={this.handleOnChangeTel} placeholder={"Ange telefon nummer"}></input><br />
                        <Link to="/bokningar"><button type={"submit"} className={"btn btn-boka"}>Boka</button></Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;