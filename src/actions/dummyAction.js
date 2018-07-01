import axios from 'axios';

import * as dummyActionTypes from './actionTypes';
import * as serviceUrls from '../util/config';

export function getDummy() {
    return function (dispatch) {
        axios.get(serviceUrls.DUMMY_API).then((response) => {
            dispatch(getDummySuccess(response.data))
        }).catch((error) => {
            dispatch(getDummyFailed(error))
        })
    }
}

export function getDummySuccess(dummy) {
    return {
        type: dummyActionTypes.GET_DUMMY_SUCCESS,
        payload: dummy
    }
}

export function getDummyFailed(error) {
    return {
        type: dummyActionTypes.GET_DUMMY_FAILED,
        payload: error
    }
}
