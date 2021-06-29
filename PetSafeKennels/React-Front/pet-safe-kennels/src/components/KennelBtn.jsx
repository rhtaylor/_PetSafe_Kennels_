import React, { Component } from 'react'
import '../css/small-dog-kennel.scss'
export default class KennelBtn extends Component{
    constructor(props){
        super(props)
    } 
    componentDidMount(){
        debugger
    }
    render(){
        return(<div>
            <button id="more" onClick={e => this.props.myroute(e)}> More about These Dog Kennels</button>
        </div>)
    }
}