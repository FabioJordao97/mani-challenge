import {ActionTypes} from '../constants/actionTypes'

const initialState = {
    tracks: []
}

export const trackReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_TRACKS:
            return {...state, tracks: payload}
    
        default:
         return state
    }
}