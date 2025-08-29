import { useState } from "react"
import { ThemeContext } from "./contexts"
import { Home } from "./pages/home"


function App() {
  const [darkMode, setDarkMode] = useState(false)


  return (

    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div data-theme={darkMode ? "dark" : ""}>
        <Home />
      </div >
    </ThemeContext.Provider >

  )
}

export default App
