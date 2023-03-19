import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import ThemeContext from '../../Context/ThemeContext'
import Home from '../Home'

class LoginPage extends Component {
  state = {username: '', password: ''}

  getUserPassword = event => {
    this.setState({password: event.target.value})
  }

  getUserName = event => {
    this.setState({username: event.target.value})
  }

  // success Page Redirecting to Home Page

  onSuccessLoginPage = jwtToken => {
    const {history} = this.props
    console.log(history)
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  submitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccessLoginPage(data.jwt_token)
    } else {
      this.onFailurePage(data.error_msg)
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const LoginPageMainBg = isDarkTheme ? 'black-bg' : 'white-bg'
          const secondLoginBg = isDarkTheme ? 'dark' : 'light'
          const NtxWatchLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const UserName = isDarkTheme ? 'dark-username' : 'light-username'
          const UserNameLabel = isDarkTheme
            ? 'dark-username-label'
            : 'light-username-label'
          const ShowPassword = isDarkTheme
            ? 'dark-show-password'
            : 'light-show-password'
          const passwordLabel = isDarkTheme
            ? 'dark-password-label'
            : 'light-password-label'
          const ShowPasswordLabel = isDarkTheme
            ? 'dark-showPassword-label'
            : 'light-showPassword-label'
          const passwordInput = isDarkTheme
            ? 'dark-password-input'
            : 'light-password-input'
          return (
            <div className={LoginPageMainBg}>
              <div className={secondLoginBg}>
                <img src={NtxWatchLogo} className="nxtWatchLogo" />
                <form onSubmit={this.submitLoginForm}>
                  <label htmlFor="text" className={UserNameLabel}>
                    USERNAME
                  </label>
                  <br />
                  <input
                    type="text"
                    id="text"
                    placeholder="Username"
                    className={UserName}
                    onChange={this.getUserName}
                  />
                  <br />
                  <label htmlFor="password" className={passwordLabel}>
                    PASSWORD
                  </label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className={passwordInput}
                    onChange={this.getUserPassword}
                  />
                  <br />
                  <input
                    type="checkbox"
                    id="showPassword"
                    className="checkbox"
                  />
                  <label htmlFor="showPassword" className={ShowPasswordLabel}>
                    Show Password
                  </label>
                  <br />
                  <button type="submit">Login</button>
                </form>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default LoginPage
