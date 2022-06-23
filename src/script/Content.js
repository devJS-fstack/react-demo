import logo from '../logo.svg';
import '../App.css';

const {
    useState,
    useEffect
} = require('react')

const tabs = ['posts', 'comments', 'albums']
const lessons = [
    {
        id: 1,
        name: 'ReactJs là gì'
    },
    {
        id: 2,
        name: 'Arrow Function?'
    },
    {
        id: 3,
        name: 'Clouser?'
    },
]
function Content() {
    {/* === Ex1 === */ }
    // const [type, setType] = useState('posts')
    // const [list, setList] = useState([])
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then(response => response.json())
    //         .then(data => setList(data))
    // }, [type])

    {/* === Ex2 === */ }
    // const [countdown, setCountdown] = useState(180)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCountdown(pre => pre - 1)
    //     }, 1000)
    //     return () => clearInterval(interval)
    // }, [])

    // === Ex3 ===
    // const [avatar, setAvatar] = useState()
    // const handleChangeFile = (e) => {
    //     const file = e.target.files[0]

    //     file.preview = URL.createObjectURL(file)

    //     setAvatar(file)
    // }

    // useEffect(() => {
    //     return () => {
    //         avatar && URL.revokeObjectURL(avatar.preview)
    //     }
    // }, [avatar])

    // === Ex4 ===

    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleEvent = (({ detail }) => {
            const lesson = lessons.find(item => item.id === detail)
            console.log(`Listening of '${lesson.name}'`)
        })
        window.addEventListener(`lesson-${lessonId}`, handleEvent)

        return () => window.removeEventListener(`lesson-${lessonId}`, handleEvent)
    }, [lessonId])
    return (
        <div className="app" style={{}}>
            {/* === Ex1 === */}
            {/* {
                tabs.map(tab => <button
                    style={tab === type ? {
                        color: '#fff',
                        backgroundColor: '#333',
                        margin: 12
                    } : { margin: 12 }}
                    onClick={() => setType(tab)}
                    key={tab}>{tab}</button> 
                )
            }
            <ul>
                {
                    list.map(item => <li key={item.id}>{item.title ?? item.name}</li>)
                }
            </ul> */}

            {/* === Ex2 === */}
            {/* <input
                type="file"
                onChange={(e) => handleChangeFile(e)}
            />
            {avatar && (
                <img
                    src={avatar.preview}
                    alt=""
                    width="80px"
                    height="80px"
                />
            )} */}

            {/* Ex4 */}
            <ul>
                {lessons.map(lesson =>
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 'red' : '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >{lesson.name}</li>
                )}
            </ul>
        </div >
    )
}

export default Content;
