import React, {Component} from "react"

class Eventtest extends Component{
    state={
        count:1
    }
    onClick(){
        this.setState({count:this.state + 1})
    }
    render(){
        return(
            <div>
                <button onClick={this.onClick.bind(this)}>count</button>
                {this.state.count}
            </div>
        )
    }
}
export default Eventtest;