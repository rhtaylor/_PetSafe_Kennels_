import React, { Component } from 'react'
import Customer_Card from './customers/Customer_Card'
export default class AdminDashboard extends Component{
    constructor(props){
    super(props)  
    // this.makeCustomers = this.makeCustomers.bind(this)
    this.state = {
        customers: []
    } 
    } 

    render(){ 
        debugger
        return(<div>
                <Customer_Card customers={this.state.customers}/> 
               </div>
              )
    
        } 


    componentDidMount() {
        fetch('http://localhost:3000/admin.json')
            .then(response => response.json())
            .then(data => { 
                debugger
                this.setState({
                    customers: data
                })
            })
    }
}