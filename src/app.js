import styles from './styles/styles.scss'
import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

class App extends Component {
  render() {
    return(
      <div className="app">
        <h1>Welcome! &hearts;</h1>
      </div>
      )
  }
}

render(<App/>, document.getElementById('app'))