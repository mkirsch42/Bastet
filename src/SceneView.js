import React, { Component } from 'react';
import './SceneView.css'

class SceneView extends Component {
    render() {
        if(this.props.scene == null) {return null;}
        return <p>{this.props.scene.name}</p>;
    }
}

export default SceneView;