import * as types from '../actions/actionTypes';

const initialState = {
    results: [],
    isSearching: false
};

export default function videos(state = initialState, action = {}) {
    switch (action.type) {
        case types.GET_VIDEOS_STARTED:
            return ({
                ...state,
                isSearching: true
            });
        case types.GET_VIDEOS_FAILED:
            return ({
                ...state,
                results: [],
                isSearching: false
            })
        case types.GET_VIDEOS_RESULT:
            console.log('returning videos', action.data.videos);
            return ({
                ...state,
                isSearching: false,
                results: action.data.videos
            })
        default:
            return state;
    }
}
