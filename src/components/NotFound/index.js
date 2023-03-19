import {Component} from 'react'
import ThemeContext from '../../Context/ThemeContext'
import Dashboard from '../Dashboard'
import ContactUs from '../ContactUs'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const trendingMainBg = isDarkTheme
            ? 'trending-main-bg-dark'
            : 'trending-main-bg-light'
          const NotFoundImage = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          const NotFoundBg = isDarkTheme
            ? 'not-found-dark-bg'
            : 'not-found-light-bg'
          const failureTitle = isDarkTheme
            ? 'notfound-title-dark'
            : 'notfound-title-light'
          const notFoundDescription = isDarkTheme
            ? 'notfound-description-dark'
            : 'notfound-description-light'
          return (
            <div className={trendingMainBg}>
              <div>
                <Dashboard />
                <ContactUs />
              </div>
              <div className={NotFoundBg}>
                <img src={NotFoundImage} className="not-found-image" />
                <h1 className={failureTitle}>Page Not Found</h1>
                <p className={notFoundDescription}>
                  We are sorry,the page you requested could not found{' '}
                </p>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default NotFound
