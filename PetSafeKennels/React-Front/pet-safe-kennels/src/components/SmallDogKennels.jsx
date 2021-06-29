import React, { Component } from 'react' 
import DogKennel from './DogKennel.jsx'
import lowProfileDogkennel from '../pictures/lowProfileDogKennel.jpg' 
import small from '../pictures/low-profile-small-dog.jpg' 
import low from '../pictures/small-dog-kennels.jpg'
import WrapAroundKennel from '../pictures/WrapAroundKennel.jpg'
const SMALLDOGARRAY = [{title:'Klassic Kennel', info: 'Classic Small Dog Kennel', img: small, size: '6x3'},{title: 'Wrap Around', info: 'Custom kennel to wrap to the contours of the house. Attached to the house with doggy-door.',img:  WrapAroundKennel, size: '20x3'}, 
    { title: 'Cool and low-down', info:'Low profile and out of the way of your home, custom built to fit in house window nook', size:'7x2.5', img: low } ,{title: 'perfection for the little ones', info: 'small dog kennel attached to house with doggy-door and dog-door' , size: '3x5', img: lowProfileDogkennel}]
export default class SmallDogKennels extends Component{
    constructor(props){
        super(props) 
        this.state ={i: 0} 
        this.makeKennels = this.makeKennels.bind(this) 
        this.backUp = this.backUp.bind(this)
    } 
    
    backUp(e){
        e.preventDefault()
        debugger
        this.props.history.goBack(-1)
    }
    makeKennels(){  
    return <DogKennel key={this.i} kennel={SMALLDOGARRAY[this.state.i] || SMALLDOGARRAY[0]} />
    }  


    render(){
        return( <div id="small-dog-kennels-page">
            <a><h1 id="back" 
            onClick={e=>this.backUp(e)}
            >{'<~Back'}</h1></a> 
            <p>Does not obstruct window view, and out of the HOA view too</p>
            <p>Choose your style of custom fabricated lifting lids and dog doors</p>
            {this.makeKennels()}
        </div>

        )
    } 

    componentDidMount() {
        if(this.state.i > SMALLDOGARRAY.length){
            
            return this.setState({i: 0})
        }
        this.intervalI = setInterval(() => { 
                   
         return   this.setState(preState => ({ i: ++preState.i }))
        }, 5000)
        
    } 
    componentWillUnmount(){
        clearInterval(this.intervalI)
    }
}