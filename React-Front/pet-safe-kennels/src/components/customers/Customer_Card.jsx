import React, { Component } from 'react' 
import '../../css/customer.scss'
export default class Customer_Card extends Component{
    constructor(props){
        super(props)
        this.state={ name: 'Pet Owner', 
                     email: 'OwnKennel@gmail.com', 
                     number: 5555555555, 
                     city: 'Kennel Kity',
                     address: 'Kennel Town'           
        } 
        this.make_customers = this.make_customers.bind(this)
    }
    componentDidMount(){
        debugger
    } 
    make_customers(){  
        let newArray = this.props.customers.map( c =>{ 
        return(<div className="Avatar"> 
                <p>{c.customer.name}</p> 
                <p>{c.customer.number}</p> 
                <p>{c.customer.city}</p>
                <p>{c.customer.address}</p>
               </div>)}) 
        return newArray
    }
    render(){
        return(<div class_name="Kennel_Customer_Profile">
                {this.make_customers()}
               </div>)
    } 

}