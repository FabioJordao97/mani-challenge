import {ActionTypes} from '../constants/actionTypes'

const initialState = {
    tracks: [],
    playlist: [],
    search: '',
    result: [],
    show: false
}

export const trackReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_TRACKS:
            return {...state, 
                tracks: payload,
                show: false
            }

        case ActionTypes.ADD_TRACKS_TO_PLAYLIST:
    const track = state.tracks.find((track) => track.id === payload.id)
            return {
                ...state, 
                playlist: [...state.playlist, {...track}]
            }
        case ActionTypes.ADD_TRACKS_TO_PLAYLIST_FROM_SEARCH:
            const searchTrack = state.result.find((track) => track.id === payload.id)
            return {
                ...state, 
                playlist: [...state.playlist, {...searchTrack}]
            }
        case ActionTypes.REMOVE_TRACKS_FROM_PLAYLIST:
            return {
                ...state,
                playlist: state.playlist.filter(track => track.id !== payload.id)
            }
        case ActionTypes.SEARCH_TRACKS:
            return {
                ...state,
                search: payload
            }
        case ActionTypes.SEARCH_RESULTS:
            return {
                ...state,
                result: payload,
                show: true
            }
        default:
         return state
    }
}