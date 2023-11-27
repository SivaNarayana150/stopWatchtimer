// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {stopWatchTimerMin: 0, stopWatchTimerSeconds: 0, isRunning: false}

  startTimer = () => {
    const {isRunning} = this.state

    this.setState(prev => ({isRunning: !prev.isRunning}))

    if (!isRunning) {
      this.timerId = setInterval(() => {
        this.setState(prev => {
          const newSeconds = prev.stopWatchTimerSeconds + 1
          if (newSeconds === 59) {
            return {
              stopWatchTimerSeconds: 0,
              stopWatchTimerMin: prev.stopWatchTimerMin + 1,
            }
          }
          return {stopWatchTimerSeconds: newSeconds}
        })
      }, 1000)
    } else {
      this.setState({isRunning: false})
    }
  }

  resetTimer = () => {
    this.setState({stopWatchTimerMin: 0, stopWatchTimerSeconds: 0})
    clearInterval(this.timerId)
    this.setState({isRunning: false})
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  render() {
    const {stopWatchTimerMin, stopWatchTimerSeconds} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="image-heading-container">
            {' '}
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              alt="stopwatch"
              className="image-styling"
            />
            <h1 className="timer-heading">Timer</h1>
          </div>
          <h1>
            {stopWatchTimerMin > 9
              ? stopWatchTimerMin
              : `0${stopWatchTimerMin}`}
            :
            {stopWatchTimerSeconds > 9
              ? stopWatchTimerSeconds
              : `0${stopWatchTimerSeconds}`}
          </h1>
          <div className="buttons-container">
            <button
              type="button"
              className="button button-bg"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="button button-bg1"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button button-bg2"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
