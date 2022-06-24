import Content from './Content'
import { useState, createContext } from 'react'

import { ThemeContext } from './Theme_Context'
import { useContext } from 'react'

function App() {
    const data = useContext(ThemeContext)
    return (
        <div style={{ padding: 20 }}>
            <button onClick={data.handleTheme}>Change Theme</button>
            <Content />
        </div>
    )
}

export default App