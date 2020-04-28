import React from 'react';
import Webcam from "react-webcam";

import './App.css';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};


class WebcamCapture2 extends React.Component {

  constructor(props) {
    super(props);    
    this.webcamRef = React.createRef(null);
    this.state = {
      screenshot: null,
    };

    this.capture = this.capture.bind(this);
  }

  capture() {
    const imageSrc = this.webcamRef.current.getScreenshot();
    this.setState({screenshot: imageSrc});
    console.log(imageSrc);
  }

  render() {
    return (
      <>
      {!this.state.screenshot ? 
      <Webcam
          audio={false}
          height={720}
          ref={this.webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
          /> : <img src={this.state.screenshot}/>}
        
        <button onClick={this.capture}>Capture photo</button>
      </>
    );
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WebcamCapture2 />
        
      </header>
    </div>
  );
}

export default App;
