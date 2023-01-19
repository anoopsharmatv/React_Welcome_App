import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  changeSubscribeState = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  changeButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.changeButtonText()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thankyou! Happy Learning</p>
        <button
          className="button"
          type="button"
          onClick={this.changeSubscribeState}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
