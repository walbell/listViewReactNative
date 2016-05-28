import {
  GET_VIDEOS_STARTED,
  GET_VIDEOS_RESULT,
  GET_VIDEOS_FAILED
} from './actionTypes';

export const getVideos = (latitude, longitude) => (dispatch) => _getVideos(dispatch, latitude, longitude);

const _getVideos = (dispatch, latitude, longitude) => {
    dispatch(_getVideosStarted(latitude, longitude));

    let url = 'http://localhost:3000/api/videos';

    return fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        if (data.error) {
            throw data.error.message || 'Unable to get videos';
        }
        return data;
    })
    .then((data) => {
        dispatch(_getVideosResultReceived(data));
    })
    .catch((err) => {
        dispatch(_getVideosFailed(err));
    });
},
_getVideosStarted = (latitude, longitude) => ({type: GET_VIDEOS_STARTED, latitude, longitude}),
_getVideosResultReceived = (data) => ({type: GET_VIDEOS_RESULT, data}),
_getVideosFailed = (message) => ({type: GET_VIDEOS_FAILED, message});
