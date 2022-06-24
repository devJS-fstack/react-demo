import logo from '../logo.svg';
import '../App.css';
import Content from './Content'
import Content_UseLayoutEffect from './Content_UseLayoutEffect'

const {
    useState,
    useEffect
} = require('react')

function App_UseEffects() {
    const [show, setShow] = useState(false)

    return (
        <div className="app" style={{ padding: 32 }}>

            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Content_UseLayoutEffect />}
        </div >
    )
}

export default App_UseEffects;
