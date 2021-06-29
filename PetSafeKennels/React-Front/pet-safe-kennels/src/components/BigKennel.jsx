import React, { Component } from 'react'
import '../css/big-kennel.scss'
export default class BigKennel extends Component{
    constructor(props) {
        super(props)
        this.state = {
            display: 'show'
        }
    }  

    render(){
        return(<div id="big-kennel" 
            onClick={e => this.props.clickMe(e)}

            style={{ "display": this.props.show }}

            key={this.props.show}
        >
            <p>LARGE DOG OUTDOOR KENNELS</p>
            <p id="bottom">click me</p>
        </div>)
    }
}