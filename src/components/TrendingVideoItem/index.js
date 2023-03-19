import {Component} from 'react'

import './index.css'
import {Link} from 'react-router-dom'

class TrendingVideoItem extends Component {
  render() {
    const {EachTrendingVideo, isDarkTheme} = this.props
    const {
      publishedAt,
      thumbnailUrl,
      viewCount,
      profileImageUrl,
      name,
      title,
      id,
    } = EachTrendingVideo
    const trendingEachVideoBg = isDarkTheme
      ? 'trending-each-video-dark'
      : 'trending-each-video-light'
    const trendingVideoSpecification = isDarkTheme
      ? 'trending-video-specification-dark'
      : 'trending-video-specification-light'
    const trendingVideoViewsDate = isDarkTheme
      ? 'trending-video-views-date-dark'
      : 'trending-video-views-date-dark'
    const trendingVideoTitle = isDarkTheme
      ? 'trending-video-title-dark'
      : 'trending-video-title-light'
    const trendingVideoName = isDarkTheme
      ? 'trending-video-name-dark'
      : 'trending-video-name-light'
    const trendingVideoCount = isDarkTheme
      ? 'trending-video-count-dark'
      : 'trending-video-count-dark'
    const trendingVideoDate = isDarkTheme
      ? 'trending-video-date-dark'
      : 'trending-video-date-dark'
    return (
      <Link to={`/videos/${id}`} className="link">
        <li className={trendingEachVideoBg}>
          <img src={thumbnailUrl} className="thumbnailUrl-trending" />
          <div className={trendingVideoSpecification}>
            <p className={trendingVideoTitle}>{title}</p>
            <p className={trendingVideoName}>{name}</p>
            <div className={trendingVideoViewsDate}>
              <p className={trendingVideoCount}>{viewCount} views</p>
              <li className={trendingVideoDate}>{publishedAt}</li>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}
export default TrendingVideoItem
