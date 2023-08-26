import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0),
      isRunning: false
    };
  }
  componentDidMount() {
    this.start();
  }
  runTimer = () => {
    this.idInterval = setTimeout(() => {
      const { time } = this.state;
      const newTime = new Date(time.getTime() + 1000);
      this.setState({ time: newTime });
      this.runTimer();
    }, 1000);
  }
  start = () => {
    if (!this.state.isRunning) {
      this.runTimer();
      this.setState({ isRunning: true });
    }
  }
  stop = () => {
    clearInterval(this.idInterval);
    this.setState({ isRunning: false });
  }
  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0), isRunning: false });
  }
  componentWillUnmount = () => {
    this.stop();
  }
  render() {
    return (
      <div>
        <h1>{this.state.time.toLocaleTimeString('en-GB')}</h1>
        <button onClick={this.start}>START</button>
        <button onClick={this.reset}>RESET</button>
        <button onClick={this.stop}>STOP</button>
      </div>
    );
  }
}

export default StopWatch;
