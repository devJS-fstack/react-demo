import {
    setJob,
    createJob,
    deleteJob
} from './actions'

import {
    useRef,
    useReducer
} from 'react'

import reducerJob, { initState } from './reducer'

function App_UseReducer() {
    const [state, dispatch] = useReducer(reducerJob, initState)
    const { job, jobs } = state
    const inputRef = useRef()
    const handleAddJob = () => {
        dispatch(createJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }
    return (
        <div className="app" style={{ padding: 32 }}>
            <h3>Todo List</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo..."
                onChange={(e) => dispatch(setJob(e.target.value))}
            ></input>

            <button onClick={handleAddJob}>Add</button>
            <ul>
                {
                    jobs.map((item, index) =>
                        <li
                            key={index}
                            onClick={() => dispatch(deleteJob(index))}
                        >{item} &times;</li>)
                }
            </ul>
        </div >
    )
}

export default App_UseReducer;
