import '../App.css';
import Content_UseCallback from './Content_UseCallback'
const {
    useState,
    useRef,
    useCallback,
    useMemo
} = require('react')




function App_UseMemo() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const [products, setProducts] = useState([])

    const nameRef = useRef()


    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price
        }])
        setName('')
        setPrice('')

        nameRef.current.focus()
    }

    const cost = useMemo(() => products.reduce((acc, product) => (acc + product.price), 0), [products])


    return (
        <div className="app" style={{ padding: 32 }}>
            <input
                ref={nameRef}
                value={name}
                placeholder="Enter name..."
                onChange={(e) => setName(e.target.value)}
            />

            <input
                value={price}
                placeholder="Enter price..."
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handleSubmit}>Add product</button>
            <br />
            Your Products:
            <br />
            <ul>
                {
                    products.map((product, index) => <li key={index}>{product.name}: {product.price}$</li>)
                }
            </ul>
            Total: {cost}$

        </div >
    )
}

export default App_UseMemo;
