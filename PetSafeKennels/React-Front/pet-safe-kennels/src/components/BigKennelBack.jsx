import React, { Component } from 'react'
import KennelBtn from './KennelBtn.jsx'
import '../css/big-kennel.scss'
export default class BigKennelBack extends Component{
    constructor(props){
        super(props)
        this.myRouting = this.myRouting.bind(this) 
    }

    myRouting(e) {
        
        e.preventDefault() 
        debugger
        this.props.push.push('/DogRun')

    }
    render(){           
        return (<div id="big-kennel-back" style={{ display: this.props.show }}
            key={this.props.show}
            onClick={e => this.props.clickMe(e)}>
            <p>Our Big Dog model will keep your Big Dog Happy.</p> 
            <ul><li>Extra Space for Play</li>
                <li>Full Door from for Owners+Dogs.</li>
                <li><KennelBtn myroute={this.myRouting} /></li>
            </ul> 
        </div>)
    }
}