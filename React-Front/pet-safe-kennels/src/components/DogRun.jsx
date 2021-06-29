import React, { Component } from 'react'
import DogRunFront from './DogRunFront.jsx' 
import tunnel from '../pictures/6FTtall-kennel.jpg'
import tree from '../pictures/9FTX9FT-Run.jpg'  
import side from '../pictures/Side-Yard-Kennel-Solid-Roof.jpg'
import kennel_with_tunnel from '../pictures/12FTX12FTwith-Tunnel.jpg'
const RUNS = [{info: 'side yard kennel', pic: side},{info:'away from house with tunnel', pic: kennel_with_tunnel },{info:"Corner kennel", pic: tree }, {info: "Corridor Kennel", pic: tunnel}]
// const DOGARRAY = [{ title: 'Corner Kennel', info: 'Large Kennel with Tree', img: tree, size: '10x10' }, { title: 'Wrap Around', info: 'Custom kennel to wrap to the contours of the house.', img: WrapAroundKennel, size: '20x3' }, { title: 'Cool and low-down', info: 'Low profile and coustom built to fit in house window nook', size: '7x2.5', img: low }, { title: 'Perfection', info: 'small dog kennel attached to house with doggy-door and dog-door', size: '3x5', img: lowProfileDogkennel }]

export default class DogRun extends Component{
    constructor(props){
        super(props) 
        this.state={
            picture: "auto", 
            id: 'show'
        } 
        this.custom_class = {
            0: { i: { display: '100%',} }, 1: { i: { display: 'myKennels', back: 'none' } }, 2: { i: { display: 'myKennels', back: 'none' } }, 3: { i: { display: 'myKennels', back: 'none' } }
        }
        this.openPic = this.openPic.bind(this) 
        this.makeRuns = this.makeRuns.bind(this)
    }  

    static getDerivedStateFromProps(props, state) {
        let new_array = RUNS.map((k, i) => {
            return { id: i, [i]: { display: 'myKennels', position: 'absolute'} }
        }) 
    }
    openPic(e){ 
        debugger
        e.preventDefault()
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
                [currentI]: {
                    id: currentI,
                    i: this.custom_class[currentI].i.display, 
                    position: 'absolute'
                    } 
            }
    
        })
        
    } 
    makeRuns(){ 
        debugger
        return RUNS.map((runObjects,i) => <span key={i}><DogRunFront flex={i} 
        display={this.state.i}  
        position={this.state.id.position}
        key={this.state.id}
        picture={this.state.picture} pic={runObjects.pic} id={i} name={i} openPic={this.openPic}/></span>)
    }
    render(){ 

        return(
            <div className="dog-run-arizona"> 
                <h1 id='info'>For your happiest dog</h1>
                <p id='info'>These are built for large pets perfect for high energy dogs that require huge amounts of daily exercise. Some breeds need more exercise than others to prevent bad behavior (digging, chewing, excessive woofing, etc.) and maintaining healthy weight, it’s necessary to stay in great shape physically and mentally.</p>
                <p id='info'>A dog run will allow your pet the spaces for this</p> 
                <div className="dog-run-phoenix"> 
                <div id="all-arizona-runs">{this.makeRuns()}</div>
                </div>
            </div>
        )
    }
} 



{/* <DogRunFront pos={this.state.position} picture={this.state.picture} openPic={this.openPic} /> */}