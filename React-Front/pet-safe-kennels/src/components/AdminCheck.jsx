import React, { Component } from 'react'

export default class SecurityCheck extends Component{
        constructor(props){
            super(props)
            this.state = {name: "", password: "" } 
            this.securityCheck = this.securityCheck.bind(this) 
            this.handleType = this.handleType.bind(this)
        } 

        securityCheck(e){
            e.preventDefault() 
            debugger 
            let name = this.state.name 
            let password = this.state.password 
            if (name == 'John' && password == 'randy'){
                this.props.history.push('/AdminDashboard')
            }
        } 
        handleType(e){
            e.preventDefault() 
            let updated = e.target.name  
            let value = e.target.value
               
            this.setState((preS)=>{
                return {...preS, [updated]:[value] } 
            })
        }
    render(){
        return(<>
        <form onSubmit={(e)=>this.securityCheck(e)} 
        onChange={(e)=>this.handleType(e)}
        > 
            <label>Name</label>
            <input type="text" name="name"  
            onChange={(e) => this.handleType(e)}
            value={this.state.name} />
            <label>Password</label>
            <input type="text" name="password"  
            onChange={(e) => this.handleType(e)}
            value={this.state.password} /> 
            <input type="submit" value="submit" />
        </form>

        </>)
    }   
}