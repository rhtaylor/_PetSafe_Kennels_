import React, { Component } from 'react' 
import '../css/kennel-card.scss'

export default class DogKennel extends Component{
    constructor(props){ 
        super(props) 
        this.state = { display: "kennel_slide"} 
        this.local_update = this.local_update.bind(this)
        
    }   
    local_update(e){
        e.preventDefault() 
        this.setState({display: 'kennel_back'})
    } 
    static getDerivedStateFromProps(props, state) {
     
        return { ...state, ...props.my_state}
    } 
    render(){ 
        
        return(
            <div  id={this.props.id} key={this.props.custom_class[this.props.id].i.display} 
                onClick={e => this.props.clickMe(e)}  
                className="parentDog" 
               >
                <div style={{ display: this.props.custom_class[this.props.id].i.display, opacity: this.props.custom_class[this.props.id].i.opacity}} className={this.props.my_state[this.props.id]['i'].display} key={this.props.custom_class}>
                    <h3>{this.props.kennel.title}</h3> 
                        <ul>
                                <img src={this.props.kennel.img}></img>
                                
                        </ul>
                    </div>
                </div>
            
        )
    } 
    
}