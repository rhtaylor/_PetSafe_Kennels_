import react, { Component } from 'react'

export default class Pic extends Component{
    constructor(props){
        super(props)
    }
    render(){ 
        debugger
        return(<div className="pup" id={this.props.id} 
        onClick={e=>this.props.changeDisplay(e)}
        >
            <img id={this.props.id} key={this.props.id << 1} style={{'maxWidth': this.props.maxWidth}} src={this.props.img.img} />
        </div>)
    }
}