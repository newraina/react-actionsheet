
import './style.css'

import { Component } from 'react'
import { render } from 'react-dom'

import Actionsheet from '../lib'

class App extends Component {

  state = {
    show: false
  }

  onClick = () => {
    const { show } = this.state
    this.setState({show: !show})
  }

  onRequestClose = () => {
    this.onClick()
  }

  render() {
    const { show } = this.state

    const tip = show ? '隐藏' : '显示'
    const menus = [{content: '点我'}, {content: '不要点我'}]

    return (
      <div>
        <button onClick={this.onClick}>{tip}</button>

        <Actionsheet show={show} menus={menus} onRequestClose={this.onRequestClose} />
      </div>
    )
  }
}

window.init = function() {
  render(<App />, document.querySelector('#app'))
}
