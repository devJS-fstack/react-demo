import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import News from './News'
import Contact from './Contact'

function App() {
    return (
        <div className="app">
            <nav>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/news" >News</Link>
                    </li>
                    <li>
                        <Link to="/contact" >Contact</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/news" element={<News />}></Route>
                <Route path="/contact" element={<Contact />}></Route>

            </Routes>

        </div>
    )
}

export default App