import '../App.css';
import Content_UseCallback from './Content_UseCallback'
const {
    useState,
    useRef,
    useCallback,
} = require('react')



function App_UseCallback() {

    const [counter, setCounter] = useState(60)


    const handleStart = useCallback(() => {
        setCounter(counter => counter - 1)
    }, [])




    return (
        <div className="app" style={{ padding: 32 }}>
            <Content_UseCallback onIncrease={handleStart}
            />
            <h1>{counter}</h1>
        </div >
    )
}

export default App_UseCallback;
