import {Component} from 'react'

import './index.css'

import Cookies from 'js-cookie'

import ThemeContext from '../../Context/ThemeContext'

import VideoItem from '../VideoItem'

class Videos extends Component {
  state = {AllvideosList: [], successPage: true}

  componentDidMount() {
    this.getAllHomeVideos()
  }

  /*  fetching all home videos */

  getAllHomeVideos = async () => {
    const {AllvideosList, successPage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/all?search='
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const video = data.videos

      const videosDataCamelCase = video.map(EachVideo => ({
        id: EachVideo.id,
        publishedAt: EachVideo.published_at,
        thumbnailUrl: EachVideo.thumbnail_url,
        title: EachVideo.title,
        viewCount: EachVideo.view_count,
        name: EachVideo.channel.name,
        profileImageUrl: EachVideo.channel.profile_image_url,
      }))
      this.setState(
        {AllvideosList: videosDataCamelCase},
        this.renderSuccessPage,
      )
      console.log(AllvideosList)
    } else {
      this.setState((successPage: false))
    }
  }

  render() {
    const {AllvideosList, successPage} = this.state
    const {isDarkTheme} = this.props
    const FailureHomeImage = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarktheme} = value
          return (
            <>
              {successPage ? (
                <ul className="videos-unordered-list">
                  {AllvideosList.map(EachVideo => (
                    <VideoItem
                      EachVideo={EachVideo}
                      isDarkTheme={isDarkTheme}
                    />
                  ))}
                </ul>
              ) : (
                <div className="home-failure-mode">
                  <img src={FailureHomeImage} className="failure-home-image" />
                  <h1>Oops! Something Went Wrong</h1>
                  <p>
                    We are having some trouble to complete your Request.Please
                    try again.
                  </p>
                  <button className="retry-button">Retry</button>
                </div>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Videos
