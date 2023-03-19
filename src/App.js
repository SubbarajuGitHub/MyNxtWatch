import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import ThemeContext from './Context/ThemeContext'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import SpecificVideo from './components/SpecificVideo'
import Header from './components/Header'
import TrendingVideos from './components/TrendingVideos'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    isDarkTheme: true,
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Header />
        <Switch>
          <ProtectedRoute exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={SpecificVideo}
            isDarkTheme={isDarkTheme}
          />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
