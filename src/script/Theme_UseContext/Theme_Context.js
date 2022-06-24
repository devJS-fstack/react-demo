import { useState, createContext } from 'react'

export const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')


    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const data = {
        theme,
        handleTheme
    }

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider