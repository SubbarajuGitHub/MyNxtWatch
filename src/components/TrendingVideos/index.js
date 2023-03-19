import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import {AiTwotoneFire} from 'react-icons/ai'
import FailurePage from '../FailurePage'
import ThemeContext from '../../Context/ThemeContext'
import Dashboard from '../Dashboard'
import ContactUs from '../ContactUs'
import TrendingVideoItem from '../TrendingVideoItem'

class TrendingVideos extends Component {
  state = {trendingVideosList: [], successPage: true}

  componentDidMount() {
    this.renderTrendingVideos()
  }

  renderTrendingVideos = async () => {
    const {trendingVideosList} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        publishedAt: EachVideo.published_at,
        thumbnailUrl: EachVideo.thumbnail_url,
        viewCount: EachVideo.view_count,
        id: EachVideo.id,
        title: EachVideo.title,
        name: EachVideo.channel.name,
        profileImageUrl: EachVideo.channel.profile_image_url,
      }))
      this.setState({trendingVideosList: VideoDetailsCamelCase})
    } else {
      this.setState({successPage: false})
    }
  }

  render() {
    const {trendingVideosList, successPage} = this.state
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
          const FailureHomeImage = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          return (
            <>
              {successPage ? (
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
                      <h1 className={heading}>Trending</h1>
                    </div>
                    <ul className={trendingVideoUnorderedList}>
                      {trendingVideosList.map(EachVideo => (
                        <TrendingVideoItem
                          EachTrendingVideo={EachVideo}
                          isDarkTheme={isDarkTheme}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className={trendingMainBg}>
                  <div>
                    <Dashboard />
                    <ContactUs />
                  </div>
                  <div className="home-failure-mode">
                    <img
                      src={FailureHomeImage}
                      className="failure-home-image"
                    />
                    <h1>Oops! Something Went Wrong</h1>
                    <p>
                      We are having some trouble to complete your Request.Please
                      try again.
                    </p>
                    <button className="retry-button">Retry</button>
                  </div>
                </div>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default TrendingVideos
