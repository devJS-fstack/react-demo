import '../App.css';
import Content_UseCallback from './Content_UseCallback'
const {
    useState,
    useReducer,
    useRef
} = require('react')

// 1. Init state
const initState = {
    job: '',
    jobs: []
}
// 2. Actions
const SET_JOB = 'set_job'
const CREATE_JOB = 'create_job'
const DELETE_JOB = 'delete_job'

// function actions ==> 

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const createJob = payload => {
    return {
        type: CREATE_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

// 3. Reducer
const reducerJob = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                job: action.payload,
                jobs: state.jobs
            }
        case CREATE_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJobs
            }
        default: return state
    }
}

// 4. Dispatch



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
