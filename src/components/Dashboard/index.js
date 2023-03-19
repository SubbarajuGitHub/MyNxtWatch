import {Component} from 'react'

import './index.css'

import {Link} from 'react-router-dom'
import {AiFillHome, AiTwotoneFire} from 'react-icons/ai'

import {SiYoutubegaming} from 'react-icons/si'

import {RiPlayListAddFill} from 'react-icons/ri'

import ThemeContext from '../../Context/ThemeContext'

class Dashboard extends Component {
  state = {
    isClickedHome: true,
    isClickedGaming: true,
    isClickedTrending: true,
    isClickedSaved: true,
  }

  isClickedHome = () => {
    this.setState(prevState => ({isClickedHome: !prevState.isClickedHome}))
  }

  isClickedGaming = () => {
    this.setState(prevState => ({isClickedGaming: !prevState.isClickedGaming}))
  }

  isClickedTrending = () => {
    this.setState(prevState => ({
      isClickedTrending: !prevState.isClickedTrending,
    }))
  }

  isClickedSaved = () => {
    this.setState(prevState => ({isClickedSaved: !prevState.isClickedSaved}))
  }

  render() {
    const {
      isClickedHome,
      isClickedGaming,
      isClickedTrending,
      isClickedSaved,
    } = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const iconColorHome = isClickedHome ? 'red-icon' : null
          const iconColorGaming = isClickedGaming ? 'red-icon' : null
          const iconColorTrending = isClickedTrending ? 'red-icon' : null
          const iconColorSavedVideo = isClickedSaved ? 'red-icon' : null
          const dashBoardOptions = isDarkTheme
            ? 'dashboard-dark-options'
            : 'dashboard-light-options'

          const dashboardIconsHome = isDarkTheme
            ? `dashboard-icons-dark ${iconColorHome}`
            : `dashboard-icons-light ${iconColorHome}`

          const dashboardIconsGaming = isDarkTheme
            ? `dashboard-icons-dark ${iconColorGaming}`
            : `dashboard-icons-light ${iconColorGaming}`

          const dashboardIconsTrending = isDarkTheme
            ? `dashboard-icons-dark ${iconColorTrending}`
            : `dashboard-icons-light ${iconColorTrending}`

          const dashboardIconsSaved = isDarkTheme
            ? `dashboard-icons-dark ${iconColorSavedVideo}`
            : `dashboard-icons-light ${iconColorSavedVideo}`

          const dashboardButtons = isDarkTheme
            ? 'dashboard-button-dark'
            : 'dashboard-button-light'

          return (
            <>
              {/* home dashboard */}
              <Link to="/" className={dashBoardOptions}>
                <li className="dashboardHomeBg">
                  <AiFillHome className={dashboardIconsHome} />
                  <button
                    type="button"
                    className={dashboardButtons}
                    onClick={this.isClickedHome}
                  >
                    Home
                  </button>
                </li>
              </Link>
              {/* Trending dashboard */}
              <Link to="/trending" className={dashBoardOptions}>
                <li className="dashboardHomeBg">
                  <AiTwotoneFire className={dashboardIconsTrending} />
                  <button
                    type="button"
                    className={dashboardButtons}
                    onClick={this.isClickedTrending}
                  >
                    Trending
                  </button>
                </li>
              </Link>
              {/* Gaming dashboard */}
              <Link to="/gaming" className={dashBoardOptions}>
                <li className="dashboardHomeBg">
                  <SiYoutubegaming className={dashboardIconsGaming} />
                  <button
                    type="button"
                    className={dashboardButtons}
                    onClick={this.isClickedGaming}
                  >
                    Gaming
                  </button>
                </li>
              </Link>

              {/* Saved Videos dashboard */}
              <Link to="/saved-videos" className={dashBoardOptions}>
                <li className="dashboardHomeBg">
                  <RiPlayListAddFill className={dashboardIconsSaved} />
                  <button
                    type="button"
                    className={dashboardButtons}
                    onClick={this.isClickedSaved}
                  >
                    Saved videos
                  </button>
                </li>
              </Link>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Dashboard
