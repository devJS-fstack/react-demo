import logo from '../logo.svg';
import '../App.css';

const {
    useState,
    useEffect,
    useLayoutEffect
} = require('react')


function Content_UseLayoutEffect() {


    const [counter, setCounter] = useState(0)

    // useEffect(() => {
    //     if (counter > 3) setCounter(0)
    // }, [counter])

    // Case use useLayoutEffect ==> callback ==> render UI

    useLayoutEffect(() => {
        if (counter > 3) setCounter(0)
    }, [counter])
    const handleCounter = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleCounter}>Click</button>
        </div>
    )
}

export default Content_UseLayoutEffect;
