// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    runningStatus: false,
    seconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({runningStatus: true})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({runningStatus: false, seconds: 0})
  }

  renderSeconds = () => {
    const {seconds} = this.state
    const second = Math.floor(seconds % 60)

    if (second < 10) {
      return `0${second}`
    }
    return second
  }

  renderMinutes = () => {
    const {seconds} = this.state
    const minutes = Math.floor(seconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {runningStatus} = this.state
    console.log(runningStatus)

    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="start-button button"
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
