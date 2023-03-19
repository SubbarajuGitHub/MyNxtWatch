import {MdCancel} from 'react-icons/md'
import {Component} from 'react'
import './index.css'

class ReactPopUp extends Component {
  state = {bannerShow: true}

  ChangeBannerState = () => {
    this.setState({bannerShow: false})
  }

  render() {
    const {isDarkTheme} = this.props
    const {bannerShow} = this.state
    const bannerDescription = isDarkTheme
      ? 'banner-description-dark'
      : 'banner-description-light'
    const cancellogo = isDarkTheme ? 'cancel-dark-logo' : 'cancel-logo'
    const bannerShowPage = bannerShow ? (
      <div className="banner-bg">
        <div className="banner-logo-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            className="banner-logo"
          />
          <MdCancel className={cancellogo} onClick={this.ChangeBannerState} />
        </div>
        <p className={bannerDescription}>
          Buy Nxt Watch Premium prepaid plans with UPI
        </p>
        <button type="button" className="banner-button">
          GET IT NOW
        </button>
      </div>
    ) : null
    return <div>{bannerShowPage}</div>
  }
}

export default ReactPopUp
