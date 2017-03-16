import React, { Component } from 'react';
import { Button } from 'react-materialize';
import './SceneButton.css'

class SceneButton extends Component {
    render() {
        return <Button waves="light" className="SceneButton" onClick={this.props.handler}>{this.props.name}</Button>;
    }
    
}

export default SceneButton; // Don’t forget to use export default!