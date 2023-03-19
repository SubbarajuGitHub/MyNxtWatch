import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

import {FaMoon} from 'react-icons/fa'

import {HiOutlineSun} from 'react-icons/hi'

import ThemeContext from '../../Context/ThemeContext'

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const HeaderBg = isDarkTheme ? 'black-header-bg' : 'white-header-bg'
          const NtxWatchLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          // changing themeMode
          const changeThemeMode = () => {
            toggleTheme()
          }

          const isDarkLightLogo = isDarkTheme ? (
            <HiOutlineSun className="logo sun" onClick={changeThemeMode} />
          ) : (
            <FaMoon className="logo moon" onClick={changeThemeMode} />
          )
          const LogoutButton = isDarkTheme
            ? 'dark-mode-logout'
            : 'light-mode-logout'
          return (
            <div className={HeaderBg}>
              <img src={NtxWatchLogo} className="nxtWatchLogoNavbar" />
              <div className="navbar-right-div">
                {isDarkLightLogo}
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="website logo"
                  className="profile"
                />
                <Link to="/login">
                  <button
                    type="button"
                    data-testid="theme"
                    className={LogoutButton}
                  >
                    Logout
                  </button>
                </Link>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Header
