import {ActionTypes} from '../constants/actionTypes'

export const setTracks = (tracks) => {
    return {
        type: ActionTypes.SET_TRACKS,
        payload: tracks
    }
}

export const selectedTracks = (track) => {
    return {
        type: ActionTypes.SELECT_TRACKS,
        payload: track
    }
}

