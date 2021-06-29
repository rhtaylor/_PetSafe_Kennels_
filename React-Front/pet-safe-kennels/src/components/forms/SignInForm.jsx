import React, { Component } from 'react'
export default class SignInForm extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div>
        <form className='form'>
        <label>email</label>
        <input
            type="text"
            name="email"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.email} />
        <label>Password</label>
        <input
            type="password"
            name="password"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.password} />
            <br/>
        <input type="submit" name="submit" />
        
    </form>
    </div>) 
    } 
}