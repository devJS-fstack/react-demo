import {
    SET_JOB,
    CREATE_JOB,
    DELETE_JOB,
} from './constants'

export const initState = {
    job: '',
    jobs: []
}

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

export default reducerJob