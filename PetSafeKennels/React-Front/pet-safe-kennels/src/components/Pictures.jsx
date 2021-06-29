import React, { Component } from 'react'
import Pic from './Pic.jsx'
import lowProfileDogkennel from '../pictures/lowProfileDogKennel.jpg'
import small from '../pictures/low-profile-small-dog.jpg'
import low from '../pictures/small-dog-kennels.jpg'
import low_2 from '../pictures/low2.jpg'
import WrapAroundKennel from '../pictures/WrapAroundKennel.jpg'
import DogKennel from './DogKennel.jsx'
import DogKennelBackSmall from './DogKennelBacksmall.jsx'
import hardtop_arizona_kennel from '../pictures/Flat-Top-Kennel.jpg'
import scottsdale_kennel from '../pictures/scottsdale_low_kennel.jpg'
import kennel_with_tunnel_az from '../pictures/Side-Yard-Tunnel.jpg'
import phoenix_window_kennel from '../pictures/under_window.jpg'
import elongated_kennel_az from '../pictures/under_window_3.jpg'
import mid_size_kennel from '../pictures/Phoenix-AZ-Kennels-For-Sale.jpg'
import best from '../pictures/Best-Kennels-Available.jpg'
import wood_top_kennel from '../pictures/custom_roof.jpg' 
import low_best from '../pictures/low.jpg'
import jack from '../pictures/Jaxson_Built_Dog_Kennels.jpg' 
import kennel_heaven from '../pictures/dog_heaven_az.jpg' 
import custom_shape from '../pictures/custom_shape.jpg' 
import custom_roof from '../pictures/custom_roof.jpg' 
import tunnel from '../pictures/Tunnel-5.jpg'
import welder from '../pictures/welder.jpg'
import '../css/pics.scss'
const GALLERY = [{img: welder}, {img: tunnel}, {img: custom_roof}, {img: jack}]


export default class Pictures extends Component{ 
    constructor(props){
        super(props)
        this.photo_gallery = this.photo_gallery.bind(this) 
        this.change_display = this.change_display.bind(this)
        this.state = { 
            'maxWidth': "auto", 
            'min-width': "auto"
    }
    }
    static getDerivedStateFromProps(props, state) {
       return GALLERY.map((g,i)=>{
           return { id: i , [i]:{'maxWidth': '500px'}}
        })
    }
    change_display(e){
        let savedE = e
        let savedTarget = e.currentTarget
        let currentI = savedTarget.id
        e.persist()  
        let answer = (this.state[currentI][currentI]["maxWidth"] == '500px') ? 'none' : '500px'

        debugger
        this.setState(preS=> {
            return {...preS, id: currentI, 
            [currentI]:{
                'maxWidth': answer
            }
            }})
    }
    photo_gallery(array){
        return array.map((img, id) => <Pic key={this.state[`${id}`]} id={id} maxWidth={this.state[`${id}`][`${id}`]['max-width']} changeDisplay={this.change_display} img={img} />)
    }
    render(){
        return(<div>
            <div id="row">{this.photo_gallery(GALLERY)}</div>
        </div>)
    }
}