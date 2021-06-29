import React, { Component } from 'react' 
import '../css/kennel-card-low.scss'
export default class DogKennelBackSmall extends Component{
    constructor(props){
        super(props)
    }  
    componentDidMount(){
       debugger
    }
    render(){ 
        debugger
        return(
            <div id={this.props.id} 
            
             key={this.props.custom_class[this.props.id].i.back} className="parentDog" 
                style={{ backgroundImage: `url(${this.props.image})`, "display": `${this.props.custom_class[this.props.id].i.back}` }}
            onClick={e => this.props.clickMe(e)}
            >
                <div className={this.props.custom_class[this.props.id].i.back}
                style={{ display: this.props.custom_class[this.props.id].i.back}} 
                    style={{ backgroundImage: `url(${this.props.image})` }}
                key={this.props.kennel[2]}>
                    <h3 className="phoenix_kennels" >{this.props.kennel.title}</h3>
                        <ul>
                            <li className="phoenix_kennels">{this.props.kennel.info}</li>
                        <li className="phoenix_kennels">Size: {this.props.kennel.size}</li>

                        </ul>
                    </div>
                </div>
            
        )
    }
}