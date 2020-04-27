import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";
import Form from "./Form";
import Bokningar from "./Bokningar";
import Notfoundpage from "./Notfoundpage";
import Header from "./Header";
import Footer from "./Footer";
import ChooseTime from "./ChooseTime";
import "../style/_main.scss";


class Approute extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" component={App} exact></Route>
                    <Route path="/tid" component={ChooseTime} exact></Route>
                    <Route path="/form" component={Form} exact></Route>
                    <Route path="/bokningar" component={Bokningar} exact></Route>
                    <Route component={Notfoundpage}></Route>
                </Switch>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default Approute;