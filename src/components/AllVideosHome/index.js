import {Component} from 'react'

import './index.css'

import {AiOutlineSearch} from 'react-icons/ai'

import ThemeContext from '../../Context/ThemeContext'

import Videos from '../Videos'

class AllVideosHome extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          /* searchElementDiv */

          const searchElementDiv = isDarkTheme
            ? 'dark-theme-search-div-element'
            : 'light-theme-search-div-element'

          /* SearchElement  */
          const searchElement = isDarkTheme
            ? 'dark-theme-search-element'
            : 'light-theme-search-element'

          /* Search Icon */
          const SearchIcon = isDarkTheme
            ? 'search-icon-dark'
            : 'search-icon-light'

          /* SearchiconButton */

          const SearchiconButton = isDarkTheme
            ? 'search-icon-button-dark'
            : 'search-icon-button-light'

          return (
            <div>
              <div className={searchElementDiv}>
                <input
                  type="search"
                  placeholder="Search"
                  className={searchElement}
                />
                <button type="button" className={SearchiconButton}>
                  <AiOutlineSearch className={SearchIcon} />
                </button>
              </div>
              <Videos isDarkTheme={isDarkTheme} />
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default AllVideosHome
