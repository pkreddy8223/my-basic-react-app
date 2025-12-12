import {useEffect, useState} from "react"
import { useContext } from "react"
import  ThemeContext  from "../../context/ThemeContext"
import "./index.css"

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const {theme, toggleTheme} = useContext(ThemeContext)
    
    var timerId
    useEffect(() => {
        timerId = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1)
        }, 1000)

        return (()=> {
            clearInterval(timerId)
        })
    },[])

    const themeClass = theme ===  'light' ? "class-light" : "class-dark"
    return (
        <div className={`${themeClass}`}>
            <h1>Counter Application</h1>
            <p>{counter} Sec</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default Counter