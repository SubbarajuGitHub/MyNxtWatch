import {Component} from 'react'

import ThemeContext from '../../Context/ThemeContext'

import './index.css'

class ContactUs extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const contactUsBg = isDarkTheme
            ? 'contact-us-dark-bg'
            : 'contact-us-light-bg'

          /* contactUsHeading */

          const contactUsHeading = isDarkTheme
            ? 'contact-us-dark-heading'
            : 'contact-us-light-heading'

          /* contactusDescription */

          const contactUsDescription = isDarkTheme
            ? 'contact-us-dark-description'
            : 'contact-us-light-description'

          return (
            <div className={contactUsBg}>
              <p className={contactUsHeading}>CONTACT US</p>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                  className="contact-us-logos"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                  className="contact-us-logos"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                  className="contact-us-logos"
                />
              </div>
              <p className={contactUsDescription}>
                Enjoy! Now to see your channels and recommendations!
              </p>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default ContactUs
