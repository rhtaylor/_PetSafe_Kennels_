import React from 'react' 
import icon from '../pictures/paw.png'
import { Component } from 'react';
import '../css/dogrun.scss'
export default class DogRunFront extends Component{
    constructor(props) {
        super(props)
        
    }
    render(){ 
        debugger
         return(

                <div className="custom-kennels"
                id={this.props.name} 
                onClick={ e=> this.props.openPic(e) }
                 style={{ 'maxWidth': this.props.picture, position: this.props.position }}
                key={this.props.pic} > 
                <img id="img" style={{width: this.props.display, position: this.props.position}} src={this.props.pic}></img>
                

            </div> 
             
        )
    }
}