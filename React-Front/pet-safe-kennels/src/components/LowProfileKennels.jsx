import React, { Component } from 'react' 
import '../css/small-dog-kennel.scss'
export default class LowProfile extends Component{
    constructor(props){
        super(props)  
        this.state={
            display: 'show'  
        }
    } 
    
    componentDidUpdate(props){
        debugger 
       
    }
    render(){
        return(
                <div id="small-dog-kennel"  
                onClick={e=>this.props.clickMe(e)}  
                
                style={{"display" : this.props.show}} 

                key={this.props.show}
                >
                <p>SMALL DOG OUTDOOR KENNELS</p> 
                <p id="bottom">click me</p>
              </div>  
              

        )
    }
}