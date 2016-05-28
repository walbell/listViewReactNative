import { combineReducers } from 'redux';
import VideoReducer from './videoReducer';

const rootReducer = combineReducers({
    videos: VideoReducer
});

export default rootReducer;
