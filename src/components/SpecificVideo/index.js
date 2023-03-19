import {Component} from 'react'

import ReactPlayer from 'react-player'

import './index.css'

import Cookies from 'js-cookie'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Dashboard from '../Dashboard'
import ContactUs from '../ContactUs'

import ThemeContext from '../../Context/ThemeContext'

class SpecifiVideo extends Component {
  state = {specificVideoDetails: [], channelData: []}

  componentDidMount() {
    this.renderSpecificVideo()
  }

  renderSpecificVideo = async () => {
    const {specificVideoDetails, channelData} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const FetchedData = await fetch(url, options)
    const data = await FetchedData.json()
    if (FetchedData.ok) {
      const ChannelData = data.video_details.channel
      const VideosDetails = data.video_details

      const VideoDetailsCamelCase = {
        description: VideosDetails.description,
        publishedAt: VideosDetails.published_at,
        thumbnailUrl: VideosDetails.thumbnail_url,
        videoUrl: VideosDetails.video_url,
        viewCount: VideosDetails.view_count,
        id: VideosDetails.id,
        title: VideosDetails.title,
      }

      const ChannelDataCamelCase = {
        profileImageUrl: ChannelData.profile_image_url,
        subscriberCount: ChannelData.subscriber_count,
        name: ChannelData.name,
      }

      this.setState({
        specificVideoDetails: VideoDetailsCamelCase,
        channelData: ChannelDataCamelCase,
      })
    }
  }

  render() {
    const {specificVideoDetails, channelData} = this.state
    const {
      videoUrl,
      description,
      publishedAt,
      title,
      viewCount,
      id,
    } = specificVideoDetails
    const {subscriberCount, profileImageUrl, name} = channelData

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, updateSavedVideoList} = value
          const SpecificVideoBg = isDarkTheme
            ? 'specific-video-dark'
            : 'specific-video-light'
          const videoPlayerBackScreen = isDarkTheme
            ? 'dark-video-screen'
            : 'light-video-screen'
          const videoPlayerdescription = isDarkTheme
            ? 'video-player-description-dark'
            : 'video-player-description-light'
          const reactIcons = isDarkTheme ? 'dark-icon' : 'light-icon'
          const VideosubscriberCount = isDarkTheme
            ? 'dark-subscribe-count'
            : 'light-subscribe-count'
          const VideopublishedAt = isDarkTheme
            ? 'dark-published'
            : 'light-published'
          const LikeDisLikeSave = isDarkTheme
            ? 'like-dislike-dark'
            : 'like-dislike-light'

          return (
            <div className={SpecificVideoBg}>
              <div>
                <Dashboard />
                <ContactUs />
              </div>
              <div className={videoPlayerBackScreen}>
                <ReactPlayer url={videoUrl} />
                <p className={videoPlayerdescription}>{title}</p>
                <div className="video-specification-main-div">
                  <div className="first-div">
                    <p className={VideosubscriberCount}>{viewCount} Views</p>
                    <p className={VideopublishedAt}>{publishedAt}</p>
                  </div>
                  <div className="main-icon-div">
                    <div className="icon-div">
                      <BiLike className={reactIcons} />
                      <button className={LikeDisLikeSave}>Like</button>
                    </div>
                    <div className="icon-div">
                      <BiDislike className={reactIcons} />
                      <button className={LikeDisLikeSave}>DisLike</button>
                    </div>
                    <div className="icon-div">
                      <MdPlaylistAdd className={reactIcons} />
                      <button
                        className={LikeDisLikeSave}
                        onClick={this.addToSave}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="channel-div">
                  <img src={profileImageUrl} className="profileImageUrl" />
                  <div>
                    <p className={VideopublishedAt}>{name}</p>
                    <p className={VideopublishedAt}>
                      {subscriberCount} subscribers
                    </p>
                  </div>
                </div>
                <p className={VideopublishedAt}>{description}</p>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SpecifiVideo
