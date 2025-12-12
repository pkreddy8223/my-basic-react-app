import Notes from './components/Notes'
import {Routes, Route} from "react-router-dom"
import {GlobalStyle} from './styledComponents'
import Counter from "./components/Counter"
import Home from "./components/Home"
import  ThemeContext  from './context/ThemeContext'
import { useState } from 'react'


const App = () => {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme === "light"){
        return "dark"
      }
      else {
        return "light"
      }
    })
  }
  return (
     <>
      <ThemeContext.Provider value={{theme : theme,toggleTheme }}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/notes" element={<Notes />}/>
        <Route path="/counter" element={<Counter />}/>
      </Routes>
      </ThemeContext.Provider>
    </>
  )
}

export default App
