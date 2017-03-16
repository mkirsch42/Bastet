import React, { Component } from 'react';
import { Howl } from 'howler';
import logo from './logo.svg';
import './App.css';
import SceneButton from './SceneButton.js'
import SceneView from './SceneView.js'
import Scene, { SoundSet, Situation, SoundEffect } from './Scene.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scenes: [
        new Scene( "TEST",
          new SoundSet(
            [new SoundEffect(new Howl({
              src: process.env.PUBLIC_URL + '/sounds/Galway.mp3'
            }))]
          ),
          [
            new Situation([1])
          ]
        )
      ],
      currentScene: null
    }
  }
  render() {
    return (
      <div className="App">
        <div className="Sidebar z-depth-3">
          <img className="Logo" src={logo} alt="Bastet" />
          <div className="SceneListScroller">
            <div className="SceneList">
              {this.state.scenes.map((val, ind)=> <SceneButton key={ind} name={val.name} handler={()=>this.toggleScene(val)} /> )}
              {this.state.scenes.map((val, ind) => <SceneButton key={ind} name={val.name} handler={() => this.toggleScene(val)} />)}
              {this.state.scenes.map((val, ind) => <SceneButton key={ind} name={val.name} handler={() => this.toggleScene(val)} />)}
              {this.state.scenes.map((val, ind) => <SceneButton key={ind} name={val.name} handler={() => this.toggleScene(val)} />)}
              {this.state.scenes.map((val, ind) => <SceneButton key={ind} name={val.name} handler={() => this.toggleScene(val)} />)}
              {this.state.scenes.map((val, ind) => <SceneButton key={ind} name={val.name} handler={() => this.toggleScene(val)} />)}
              {this.state.scenes.map((val, ind) => <SceneButton key={ind} name={val.name} handler={() => this.toggleScene(val)} />)}
              {this.state.scenes.map((val, ind) => <SceneButton key={ind} name={val.name} handler={() => this.toggleScene(val)} />)}
              {this.state.scenes.map((val, ind) => <SceneButton key={ind} name={val.name} handler={() => this.toggleScene(val)} />)}
              {this.state.scenes.map((val, ind) => <SceneButton key={ind} name={val.name} handler={() => this.toggleScene(val)} />)}
              {this.state.scenes.map((val, ind) => <SceneButton key={ind} name={val.name} handler={() => this.toggleScene(val)} />)}
              {this.state.scenes.map((val, ind) => <SceneButton key={ind} name={val.name} handler={() => this.toggleScene(val)} />)}
              {this.state.scenes.map((val, ind) => <SceneButton key={ind} name={val.name} handler={() => this.toggleScene(val)} />)}
              {this.state.scenes.map((val, ind) => <SceneButton key={ind} name={val.name} handler={() => this.toggleScene(val)} />)}
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
