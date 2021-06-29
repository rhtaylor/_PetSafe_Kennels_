import React, { Component } from 'react'  
import './App.css'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home.jsx'
import NavBar from './NavBar.jsx' 
import Kennel from './Kennel.jsx' 
import DogRun from './components/DogRun.jsx' 
import Contact from './Contact.jsx'
import SmallDogKennels from './components/SmallDogKennels';
import BigDogKennels from './components/BigDogKennels'; 
import LowProfilePhoenixKennel from './components/LowProfilePhoenixKennel.jsx'
import HorseShade from './components/HorseShade.jsx'
import AdminDashboard from './components/AdminDashboard'; 
import PetOwner from './components/PetOwner.jsx'
import SecurityCheck from './components/AdminCheck'
import Pictures from './components/Pictures.jsx' 
import CreateAccount from './components/customers/CreateAccount.jsx'
import SignIn from './components/customers/SignIn.jsx'

class App extends Component{ 
  componentDidMount(){
    fetch('http://localhost:3000/customers.json') 
    .then(res =>{
      console.log(res.body) 
      console.log(res.status)  
      console.log(res)
      return res.json();
    })
    .then(data => console.log(data)) 
    .catch(err => console.log(err))
  } 
    
  render(){
  return (<header className="App-header" >
       <Router>
       <Route path='/' component={NavBar} />
       <Route exact path='/' render={(routerProps)=> <Home {...routerProps} />} /> 
       <Route path='/Kennel' component={Kennel} />  
       <Route exact path='/SmallDogKennels' component={Contact} /> {/*render={ (routerProps) => <SmallDogKennels {...routerProps} />} /> */}
       <Route exact path='/LowProfilePhoenixKennel' render={(routerProps) => <LowProfilePhoenixKennel {...routerProps} /> } />
       <Route exact path='/BigDogKennels' component={Contact} /> {/*render={ (routerProps) => <BigDogKennels {...routerProps}/>} /> */}
       <Route path='/DogRun' component={DogRun} />
       <Route path='/Contact' component={Contact} /> 
       <Route exact path='/Pics' render={(routerProps) => <Pictures {...routerProps} /> } />
       <Route exact path='/HorseShade' render={(routerProps)=> <HorseShade {...routerProps} /> } />
       <Route exact path='/Admin' render={ (routerProps)=><SecurityCheck {...routerProps} />} />
       <Route exact path='/AdminDashboard' render={(routerProps)=> <AdminDashboard {...routerProps}/>} />
       <Route exact path='/PetOwner' render={(routerProps)=> <PetOwner />} />
       <Route exact path='/PetOwner/CustomerCreation' render={(routerProps)=> <CreateAccount {...routerProps} />} />
       <Route exact path='/PetOwner/SignIn' render={(routerProps) => <SignIn {...routerProps} />} />
       </Router>
      </header>
    );
}
}
export default App;
