import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  updateSavedVideoList: () => {},
})

export default ThemeContext
