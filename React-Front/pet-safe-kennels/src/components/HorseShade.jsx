import React, { Component } from 'react'
import AZ_Pet_Shade from './AZ_Pet_Shade.jsx'
import horse_shade from '../pictures/Horse-Livestock-Shade-Installed.jpg'
import az_pet_shade from '../pictures/horse_shade.jpg'
const INFO = "If you want horse shade installers in Phoenix Arizona or the surrounding areas. You have come to the right website. Pet-Safe-Kennels parent company OK Corrals is The Top Quality Shade For Horses Installation Team in AZ! We specialize in installation of mare motels and horse shelter, Shade and/or Covered Stalls, Snake Proof Gates, and Runs. The difference is in the details. We Custom Build and Install ALL Types of Shade in Arizona. Our Mare Motels are Built to Outlast Your Grand Kids. Our Equestrian Shade and Facilities are Built with the Heaviest Steel on the market. We Invented the Snake Proof Dog Kennel! PUT YOUR KENNEL UNDER A HORSE SHADE!!!"
const AZ_PET_SHADE = [{img: horse_shade}]
export default class HorseShade extends Component{
    constructor(props){
        super(props)
        this.makePetShade=this.makePetShade.bind(this)
    } 
    makePetShade(){
       return AZ_PET_SHADE.map(shade=> <span><AZ_Pet_Shade pic={shade.img} shade={shade} /></span>)
    }
    render(){
        return (<div className="horse-shade" >
            <p className="horse-shade">{INFO}</p> 
            
            <div id="kennel_slide">{this.makePetShade()}</div>
            </div>)
    }
}