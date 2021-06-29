import React, { Component } from 'react'

export default class Create_Form extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
    return(<div>
        <form className="form" onSubmit={ event => this.props.handleSubmit(event) }>
            <label>First and Last Name</label>
            <input
            type="text"
            name="name"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.name}
            /> 
        <label>Number</label>
        <input
            type="text"
            name="number"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.number} />
         
        <label>email</label>
        <input
            type="text"
            name="email"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.email} /> 
        <label>City</label>
        <input
            type="text"
            name="city"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.city} />
        <label>Address</label> 
        <input
                type="text"
                name="address"
                onChange={event => this.props.handleChange(event)}
                value={this.props.formData.address} />
        <label>Password</label>
        <input
                type="password"
                name="password"
                onChange={event => this.props.handleChange(event)}
                value={this.props.formData.password} /> 
        <label>Password Confirmation</label>
        <input
                type="password"
                name="password_confirmation"
                onChange={event => this.props.handleChange(event)}
                value={this.props.formData.password_confirmation} />
        <input className="button" type="submit" value="create" />
        </form>  

    </div> )
    }
}