import {Component} from 'react'

import './index.css'

import {Link} from 'react-router-dom'

class VideoItem extends Component {
  render() {
    const {EachVideo} = this.props
    const {
      name,
      profileImageUrl,
      thumbnailUrl,
      title,
      viewCount,
      publishedAt,
      id,
    } = EachVideo
    const {isDarkTheme} = this.props
    const specificVideoTitle = isDarkTheme ? 'title-dark' : 'title-light'
    const nameSpecificVideo = isDarkTheme ? 'name-dark' : 'name-light'
    const publishedAts = isDarkTheme ? 'published-dark' : 'published-light'
    const viewCounts = isDarkTheme ? 'viewcounts-dark' : 'viewcounts-light'
    return (
      <Link to={`/videos/${id}`} className="link">
        <li className="videos-list-items">
          <img src={thumbnailUrl} className="thumbnailUrl" />
          <div className="profile-title-div">
            <img src={profileImageUrl} className="profileImageUrl" />
            <p className={specificVideoTitle}>{title}</p>
          </div>
          <p className={nameSpecificVideo}>{name}</p>
          <div className="viewcount-publishedAt-div">
            <p className={viewCounts}>{viewCount}</p>
            <p className={publishedAts}>{publishedAt}</p>
          </div>
        </li>
      </Link>
    )
  }
}
export default VideoItem
