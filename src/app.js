import styles from './styles/styles.scss'
import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

class App extends Component {
  render() {
    return(
      <div className="app">
        <h1>Welcome! &hearts;</h1>
        <p>Looks like you're not connected to the database at the moment.</p>
        <button>Connect Me</button>
      </div>
      )
  }
}

render(<App/>, document.getElementById('app'))