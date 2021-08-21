import {ActionTypes} from '../constants/actionTypes'

export const setTracks = (tracks) => {
    return {
        type: ActionTypes.SET_TRACKS,
        payload: tracks
    }
}

export const addToPlaylist = (trackId) => {
    return {
        type: ActionTypes.ADD_TRACKS_TO_PLAYLIST,
        payload: {
            id: trackId
        }
    }
}

export const removeFromPaylist = (trackId) => {
    return {
        type: ActionTypes.REMOVE_TRACKS_FROM_PLAYLIST,
        payload: {
            id: trackId
        }
    }
}