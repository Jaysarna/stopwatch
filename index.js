import {Component} from 'react'

import './index.css'

const initialState = {
  runningStatus: false,
  timeElapsedInSeconds: 0,
}

class Stopwatch extends Component {
  state = initialState

  incrementalTimer = () => {
    this.setState = prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    })
  }

  onStart = () => {
    const {runningStatus} = this.state
    if (runningStatus) {
      this.intervalId = setInterval(this.incrementalTimer, 1000)
    }
    this.setState({runningStatus: true})
  }

  onStop = () => {
    const {runningStatus} = this.state
    if (runningStatus) {
      clearInterval(this.intervalId)
      this.setState({runningStatus: false})
    }
  }

  onReset = () => {
    this.setState(initialState)
    clearInterval(this.intervalId)
  }

  getElapsedSecondsInTimeFormat = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {runningStatus, timeElapsedInSeconds} = this.state
    console.log(timeElapsedInSeconds, runningStatus)

    return (
      <div className="bg-container">
        <div className="watch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-font">Timer</p>
            </div>
            <p className="count">{this.getElapsedSecondsInTimeFormat()}</p>
            <div className="btn-container">
              <button
                className="btn btn-1"
                type="button"
                onClick={this.onStart}
                // disabled={runningStatus}
              >
                Start
              </button>
              <button
                className="btn btn-2"
                type="button"
                onClick={this.onStop}
                // disabled={runningStatus}
              >
                Stop
              </button>
              <button
                className="btn btn-3"
                type="button"
                onClick={this.onReset}
                // disabled={runningStatus}
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
