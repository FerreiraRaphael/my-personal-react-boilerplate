import React from 'react'
import Input from './components/Input'

export default class App extends React.Component {
  constructor (props) {
    super()
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange (value) {
    this.setState({ value })
  }
  render () {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Hello World!</h1>
        <h3>{this.state.value}</h3>
        <Input onChange={this.onChange} />
      </div>
    )
  }
}
