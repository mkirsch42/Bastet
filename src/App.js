import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import SceneButton from './SceneButton.js'
import SceneView from './SceneView.js'
import Scene from './Scene.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scenes: [],
      currentScene: null
    };
    axios.get(`${process.env.PUBLIC_URL}/scenes.json`).then(this.setupScenes.bind(this)).catch(()=>{

    });
  }
  setupScenes(json) {
    this.setState({ scenes: json.data.scenes.map((j) => Scene.fromJSON(j))});
  }
  render() {
    return (
      <div className="App">
        <div className="Sidebar z-depth-3">
          <img className="Logo" src={logo} alt="Bastet" />
          <div className="SceneListScroller">
            <div className="SceneList">
              {this.state.scenes.map((val, ind)=> <SceneButton key={ind} name={val.name} handler={()=>this.toggleScene(val)} /> )}
            </div>
          </div>
        </div>
        <div className="SceneView">
          <SceneView scene={this.state.currentScene} />
        </div>
      </div>
    );
  }
  toggleScene(scene) {
    let currentScene = this.state.currentScene;
    if(currentScene) {
      currentScene.stop();
    }
    if(currentScene === scene) {
      this.setState({ currentScene: null })
    } else {
      this.setState({ currentScene: scene })
      scene.play();
    }
  }
}

export default App;
