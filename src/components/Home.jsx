import React, { Component } from 'react'
import Modal from './Modal'
export default class Home extends Component {
render() {
    return (
    <div>
        <div className="layer1" >
        <img style={{width:"100%",}} src={require('../kposhop.jpeg')}/>
        </div>
        <div className="layer2">
            <Modal/>
        </div>
    </div>
    )
}
}
