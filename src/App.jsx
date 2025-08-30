import { useEffect, useState } from "react"
import { ThemeContext } from "./contexts"
import { Home } from "./pages/home"
import { getThemeLocalStorage } from "./db/localStorage.db"


function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const theme = getThemeLocalStorage()
    if (theme) {
      setDarkMode(true)
    }
  }, [])

  return (

    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div data-theme={darkMode ? "dark" : ""}>
        <Home />
      </div >
    </ThemeContext.Provider >

  )
}

export default App
