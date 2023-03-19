import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'
import ThemeContext from '../../Context/ThemeContext'

class GameItem extends Component {
  render() {
    const {EachTrendingVideo} = this.props
    const {thumbnailUrl, viewCount, title, id} = EachTrendingVideo
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const GamingTitle = isDarkTheme
            ? 'gaming-title-dark'
            : 'gaming-title-light'
          const GamingCounts = isDarkTheme
            ? 'gaming-count-dark'
            : 'gaming-count-light'
          return (
            <Link to={`/videos/${id}`} className="link">
              <li className="gaming-main-div">
                <img src={thumbnailUrl} className="thumbnailUrl-gaming" />
                <p className={GamingTitle}>{title}</p>
                <p className={GamingCounts}>{viewCount} Watching Worldwide</p>
              </li>
            </Link>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default GameItem
