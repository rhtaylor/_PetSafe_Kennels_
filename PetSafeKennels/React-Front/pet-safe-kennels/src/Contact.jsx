import React, { Component } from 'react' 
import ContactUs from './EmailForm.jsx'
import Button from './Button.jsx'
import './css/button.scss'
let PRICE = '2400'
export default class Contact extends Component{
    constructor(props){
        super(props)
        this.state={
            display: null
        }
        this.updateForm = this.updateForm.bind(this)
    
    }
    updateForm(e) {
        e.preventDefault()
        debugger
        this.state.display == null
            ?
            this.setState(
                {
                    display: "flex",
                    direction: 'column'
                })
            :
            this.setState({
                display: null,
                direction: null
            })

    } 
    render(){
        return(<div id="dog-parent">
            <Button handleClick={(e) => this.updateForm(e)} />
            <ContactUs display={{ display: this.state.display }} stateToProp={this.state.direction} history={this.props.history}
                updateForm={this.updateForm}
            /> 
            <h2>Phone calls are the preferred way to communicate with us.</h2> 
            <p>Contact info</p>
            <p id="call">please call: 520-730-7020</p>  
            <h3 id="highlight">Important: Pet-Safe-Kennels Custom builds kennels by hand with wielders. These craftsmen
            will build the perfect kennel for you, your home, and your pet. The minimum price per Kennel is <b id="call">${PRICE}</b>. However that is also the price of a purebred pitbull. These kennels will outlast your car.</h3>
            <p> If our proposal is satisfactory, we only ask for half of the cost as a deposit and the remaining half upon completion. If you have not yet moved into a home you can reserve a dog kennel to be installed anywhere the greater Phoenix area 30 to 60 days in advance.</p>
            <p>Since 2006 we have fabricated hundreds of custom built predator proof pet enclosues. You Can NOT find better quality pet containment anywhere! We are a small company and once we take a deposit we work on that project until it's complete.</p>
        </div>)
    }
}