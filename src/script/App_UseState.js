import logo from './logo.svg';
import './App.css';

const {
  useState
} = require('react')


function App() {
  // ==> Ex 1:
  // const [counter, setCounter] = useState(1);
  // const handleCounter = () => {
  //   setCounter(preState => preState + 1)
  // }

  // ==> Ex 2:
  // const [info, setInfo] = useState({
  //   name: 'Dev Nguyen',
  //   age: 21,
  //   address: 'HCM, VN'
  // })
  // const handleUpdate = () => {
  //   setInfo(pre => ({ ...pre, bio: 'Dev nguyen is the best' }))
  // }
  // ==> Ex 3:
  // const gifts = [
  //   'CPU i9', 'RAM 32GB', 'RGB Keyboard'
  // ]
  // const [gift, setGift] = useState('Not have any gift')
  // const handleUpdateGift = () => setGift(gifts[Math.floor(Math.random() * 3)])
  // ==> Ex 4:

  const courses = [
    {
      id: 1,
      name: 'NodeJs'
    },
    {
      id: 2,
      name: 'ReactJs'
    },
    {
      id: 3,
      name: 'VueJs'
    },
  ]

  const [itemChecked, setItemChecked] = useState([])

  const handleSubmit = () => {
    console.log(itemChecked)
  }

  const handleOnChange = (id) => {
    const isChecked = itemChecked.includes(id)
    if (isChecked) {
      setItemChecked(itemChecked.filter(item => item !== id))
    } else {
      setItemChecked([...itemChecked, id])
    }
  }
  return (
    <div className="app" style={{ padding: 32 }}>
      {courses.map(item => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={itemChecked.includes(item.id)}
            onChange={() => handleOnChange(item.id)}
          /> {item.name}
        </div>
      ))}

      < button onClick={handleSubmit} > Submit!</button>
    </div >
  )
}

export default App;
