import {Component} from 'react'
import './index.css'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import ThemeContext from '../../Context/ThemeContext'
import Dashboard from '../Dashboard'
import ContactUs from '../ContactUs'
import GameItem from '../GameItem'

class Gaming extends Component {
  state = {trendingVideosList: []}

  componentDidMount() {
    this.renderTrendingVideos()
  }

  renderTrendingVideos = async () => {
    const {trendingVideosList} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const FetchedData = await fetch(url, options)
    const data = await FetchedData.json()
    if (FetchedData.ok) {
      const VideosDetails = data.videos
      console.log(VideosDetails)
      const VideoDetailsCamelCase = VideosDetails.map(EachVideo => ({
        thumbnailUrl: EachVideo.thumbnail_url,
        viewCount: EachVideo.view_count,
        id: EachVideo.id,
        title: EachVideo.title,
      }))
      this.setState({trendingVideosList: VideoDetailsCamelCase})
    }
  }

  render() {
    const {trendingVideosList} = this.state
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
            ? 'gaming-video-ul-dark'
            : 'gaming-video-ul-light'
          return (
            <div className={trendingMainBg}>
              <div>
                <Dashboard />
                <ContactUs />
              </div>
              <div className={trendingVideosDiv}>
                <div className={trendingHeading}>
                  <div className={trendingBackground}>
                    <SiYoutubegaming className="trending-icon" />
                  </div>
                  <h1 className={heading}>Gaming</h1>
                </div>
                <ul className={trendingVideoUnorderedList}>
                  {trendingVideosList.map(EachVideo => (
                    <GameItem
                      EachTrendingVideo={EachVideo}
                      isDarkTheme={isDarkTheme}
                    />
                  ))}
                </ul>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Gaming
