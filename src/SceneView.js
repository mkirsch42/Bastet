import React, { Component } from 'react';
import SceneButton from './SceneButton.js'
import Scene from './Scene.js'
import './SceneView.css'

class SceneView extends Component {
    render() {
        if(this.props.scene == null) {return null;}
        return (
            <div className='SceneView'>
                {this.props.scene.situations.map((val, ind) => <SceneButton key={ind} name={val.name} handler={() => this.props.scene.apply(val)} />)}
            </div>
        );
    }
}

export default SceneView;