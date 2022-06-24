import {
    SET_JOB,
    CREATE_JOB,
    DELETE_JOB,
} from './constants'

export const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

export const createJob = payload => {
    return {
        type: CREATE_JOB,
        payload
    }
}

export const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}