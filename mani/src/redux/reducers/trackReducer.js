import {ActionTypes} from '../constants/actionTypes'

const initialState = {
    tracks: [],
    playlist: []
}

export const trackReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_TRACKS:
            return {...state, 
                tracks: payload
            }

        case ActionTypes.ADD_TRACKS_TO_PLAYLIST:
    const track = state.tracks.find((track) => track.id === payload.id)
            return {
                ...state, 
                playlist: [...state.playlist, {...track}]

            }
        case ActionTypes.REMOVE_TRACKS_FROM_PLAYLIST:
            return {
                ...state,
                playlist: state.playlist.filter(track => track.id !== payload.id)
            }
        default:
         return state
    }
}