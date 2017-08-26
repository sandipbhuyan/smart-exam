const initialState = {}
import { pages } from '../actions/projectActions'

export default function pageStateReducer(state= initialState, action) {

    switch (action.type) {
        case pages.PAGESTATE_UPDATE:
            return action.payload;
    }
    return state
}