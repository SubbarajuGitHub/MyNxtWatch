import {Component} from 'react'
import {AiTwotoneFire} from 'react-icons/ai'
import ThemeContext from '../../Context/ThemeContext'
import Dashboard from '../Dashboard'
import ContactUs from '../ContactUs'

class SavedVideos extends Component {
  render() {
    const {savedVideosList} = this.props
    console.log(savedVideosList)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const trendingMainBg = isDarkTheme
            ? 'trending-main-bg-dark'
            : 'trending-main-bg-light'
          const trendingVideosDiv = isDarkTheme
            ? 'trending-videos-dark-div'
            : 'trending-videos-light-div'
          const trendingBackground = isDarkTheme
            ? 'trending-background-dark'
            : 'trending-background-light'
          const trendingHeading = isDarkTheme
            ? 'trending-heading-dark'
            : 'trending-heading-light'
          const heading = isDarkTheme ? 'dark-heading' : 'light-heading'
          const trendingVideoUnorderedList = isDarkTheme
            ? 'trending-video-ul-dark'
            : 'trending-video-ul-light'
          return (
            <div className={trendingMainBg}>
              <div>
                <Dashboard />
                <ContactUs />
              </div>
              <div className={trendingVideosDiv}>
                <div className={trendingHeading}>
                  <div className={trendingBackground}>
                    <AiTwotoneFire className="trending-icon" />
                  </div>
                  <h1 className={heading}>Saved Videos</h1>
                </div>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default SavedVideos
