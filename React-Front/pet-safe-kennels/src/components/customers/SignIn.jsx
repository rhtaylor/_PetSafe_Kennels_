import React, { Component } from 'react'
import SignInForm from '../forms/SignInForm.jsx' 
import '../../css/customer.scss' 
const SIGNIN_URL = 'http://localhost:3001/login' 

export default class SignIn extends Component{
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: ''
        } 
        this.handleChange = this.handleChange.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this) 
        this.POST_BODY = {
            method: "POST",
            mode: 'no-cors',
            headers: {
                    'Content-Type': "application/json", 
                     "Accept": "application/json", 
                    'Access-Control-Allow-Origin': 'http://localhost:3001', 
                    'Access-Control-Allow-Credentials': true
                     
            },
            body: JSON.stringify(this.state)
        }  
    }
    componentDidMount(){
        debugger
    }
    handleChange(e){
        e.preventDefault() && e.presist()
        let saved_e = e
        let for_update = saved_e.currentTarget.name
        let value = saved_e.currentTarget.value
        this.setState(pS => {
            // below is beautiful code just had to brag!
            return {
                ...pS,
                [for_update]: value
            }
        })
    }
    handlesubmit(e){
        // sends POST signin request to Ruby Backend
        e.preventDefault() && e.presist()
        let saved_e = e  
        fetch(SIGNIN_URL, this.POST_BODY) 
        .then(res =>{
            debugger
        })
        
    }
    render(){
        return(<div>
                <SignInForm handleChange={this.handleChange} formData={this.state} />
              </div>)
    }
}