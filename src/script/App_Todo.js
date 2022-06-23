import logo from '../logo.svg';
import '../App.css';

const {
    useState
} = require('react')


function App_Todo() {
    const [val, setVal] = useState('')
    const [list, setItem] = useState([])
    const handleSubmit = () => {
        setItem([
            ...list,
            val
        ])
        setVal('')
    }
    return (
        <div className="app" style={{ padding: 32 }}>
            <input
                value={val}
                onChange={(e) => setVal(e.target.value)}
            ></input>
            < button onClick={handleSubmit}> Add!</button>
            <ul>
                {
                    list.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div >
    )
}

export default App_Todo;
