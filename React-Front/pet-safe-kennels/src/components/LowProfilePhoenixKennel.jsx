import React, { Component } from 'react'  
import '../css/kennel-card-low.scss'
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
const DOGARRAY = [{ title: 'Outdoor Yard Kennel', info: 'Classic Medium size dog Kennel', img: mid_size_kennel, size: '6x4' }, { title: 'Room to Run', info: 'Elongated for more run room', img: elongated_kennel_az, size: '20x15' }, { title: 'Gilbert Patio Kennel', info: 'Low profile and coustom built to connect to home with doggy door', size: '12x3', img: phoenix_window_kennel }, { title: 'Small Kennel + Dog Run', info: 'small dog kennel attached to Dog Run', size: '3x5 + 10x10', img: kennel_with_tunnel_az }]
const SMALL_DOG_KENNELS = [{ title: 'Beautiful Wood Top', info: 'Medium sized Dog Kennel', img: wood_top_kennel, size: '8x3.5' }, 
    { title: 'Connected to Home', info: 'Under window kennel with doggy door.', img: best, size: '9x4' }, { title: 'Scottsdale Yard Kennel', info: 'Low profile and made for safe outdoor play', size: '7x3.5', img: scottsdale_kennel }, { title: 'Rain Roof Dog Kennel', info: 'Hardtop to protect from Rain & SNAKE WIRE', size: '10x4', img: hardtop_arizona_kennel }]
const info = "It’s our years of experience that sets us apart from other Arizona outdoor pet enclosure companies. Our extensive research and development has developed Exclusive Proprietary Designs to Guarantee your pets safety! We take Pride in our Commitment to The Very Best Quality Dog Kennels, Great Service, and Client Satisfaction. Much of our work is from referrals and word of mouth."
export default class LowProfilePhoenixKennel extends Component{
    constructor(props){
        super(props) 
        this.make_kennels = this.make_kennels.bind(this)
        this.make_kennels_2 = this.make_kennels_2.bind(this)
        this.custom_class = {
            0: { i: { display: 'myKennels', back: 'none' } }, 1: { i: { display: 'myKennels', back: 'none' } }, 2: { i: { display: 'myKennels', back: 'none' } }, 3: { i: { display: 'myKennels', back: 'none' } },
            4: { i: { display: 'myKennels', back: 'none' } }, 5: { i: { display: 'myKennels', back: 'none' } }, 6: { i: { display: 'myKennels', back: 'none' } }, 7: { i: { display: 'myKennels', back: 'none' } }

        } 
        this.state= {} 
        this.flipKennel = this.flipKennel.bind(this) 
        
    }  
 
    static getDerivedStateFromProps(props, state) {
        let new_array = DOGARRAY.concat(SMALL_DOG_KENNELS).map((k, i) => {
            return { id: i, i: { display: 'myKennels', back: 'none' } }
        })
        debugger
        return new_array

    }
    make_kennels(array, i=0) { 
         
          
        return array.map((ele,i)=>{   
            
        return (<span id={i} key={i}><DogKennel my_state={this.state} id={i} kennel={ele}
            clickMe={e => this.flipKennel(e)}
            custom_class={this.custom_class}
        /><DogKennelBackSmall display={this.state} id={i} image={ele.img} custom_class={this.custom_class}
            clickMe={e => this.flipKennel(e)}
            kennel={ele} /></span>)}, i) 
        
        
    } 
    make_kennels_2(array,i) {
        debugger

        return array.map((ele, i) => {
            debugger
            return (<span id={ i == 0 ? 4 : i + 4 } key={i}><DogKennel my_state={this.state} id={i == 4 ? i : i + 4} kennel={ele}
                clickMe={e => this.flipKennel(e)}
                custom_class={this.custom_class}
            /><DogKennelBackSmall display={this.state} id={i == 0 ? 4 : i + 4} image={ele.img} custom_class={this.custom_class}
                clickMe={e => this.flipKennel(e)}
                kennel={ele} /></span>)
        }, i)


    }
    flipKennel(e){
       
            let savedE = e
            let savedTarget = e.currentTarget
            let currentI = savedTarget.id
            e.persist()

            debugger
            if (this.custom_class[currentI].i.display == 'myKennels') {
                this.custom_class[savedTarget.id].i = { display: 'none', back: 'kennel_back' }
            } else {
                this.custom_class[savedTarget.id].i = { display: 'myKennels', back: 'none' }
            }
            debugger
            this.setState((preS) => {
                return {
                    [savedTarget.id]: {
                        id: savedTarget.id,
                        i: this.custom_class[savedTarget.id].i
                    }
                }
            })
        }
    
    render(){
        return (<>
            <p>{info}</p>
            <div id="kennel_slide">
            {this.make_kennels(SMALL_DOG_KENNELS,0)}
            </div> 
            <div id="kennel_slide">
            {this.make_kennels_2(DOGARRAY,0)}
           </div>
           </> 
        )
    }
}  


// Custom map_with_index fxn
Array.prototype.map_with_index = function(){ 
    debugger 
    let i = 0; 
    var myobj = {}
    var len = this.length 
      for (let j=i; j < len; j++){ 
           
          myobj[j]= this[j]
          myobj[j]['inx']= j  
          debugger
        return myobj
    }
    return myobj
}