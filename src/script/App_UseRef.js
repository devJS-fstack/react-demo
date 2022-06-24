import '../App.css';

const {
    useState,
    useRef
} = require('react')


function App_UseRef() {

    const [counter, setCounter] = useState(60)

    const ref = useRef();

    const handleStart = () => {
        ref.current = setInterval(() => {
            setCounter(counter => counter - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(ref.current)
    }


    return (
        <div className="app" style={{ padding: 32 }}>
            <h1>{counter}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div >
    )
}

export default App_UseRef;
