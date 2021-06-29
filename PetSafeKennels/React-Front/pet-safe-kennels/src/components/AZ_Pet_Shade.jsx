import React, { Component } from 'react'

export default class AZ_Pet_Shade extends Component{
    constructor(props){
        super(props)
    } 
    componentDidMount(){
        debugger
    }
    render(){
        return(<div>
            <img className="horse-shade" src={this.props.pic} />
        </div>)
    }
}