import {Component} from 'react'

import Dashboard from '../Dashboard'

import ReactPopUp from '../PopPupHomePage'

import ContactUs from '../ContactUs'

import AllVideosHome from '../AllVideosHome'

import ThemeContext from '../../Context/ThemeContext'

import './index.css'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          // DashBoard and PopPop Div

          const dashBoardPopPup = isDarkTheme
            ? 'dark-dash-pop-div'
            : 'light-dash-pop-div'

          // HomeMainBg

          const HomeMainBg = isDarkTheme
            ? 'main-bg-home-dark'
            : 'main-bg-home-light'

          return (
            <div className={HomeMainBg}>
              {/* dash board and right side popup all videos div */}
              <div className={dashBoardPopPup}>
                {/* dash board div */}
                <div className="dashboard-div">
                  <div>
                    <Dashboard />
                  </div>
                  <div className="contact-us">
                    <ContactUs />
                  </div>
                </div>
                {/* right side popup all videos div */}
                <div className="right-side-popup-all-videos-div">
                  <div className="pop-up-div">
                    <ReactPopUp isDarkTheme={isDarkTheme} />
                  </div>
                  {/* search element all videos componenet */}
                  <div>
                    <AllVideosHome />
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
