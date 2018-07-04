import * as dummyActionsTypes from "../actions/actionTypes";

const dummyReducer = (
  state = {
    dummy: [],
    dummyLoaded: false,
    dummyLoading: true,
    dummyLoadingFailed: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case dummyActionsTypes.GET_DUMMY:
      return {
        ...state,
        dummyLoading: true
      };
    case dummyActionsTypes.GET_DUMMY_SUCCESS:
      return {
        ...state,
        dummyLoading: false,
        dummyLoaded: true,
        dummy: action.payload
      };
    case dummyActionsTypes.GET_DUMMY_FAILED:
      return {
        ...state,
        dummyLoading: false,
        dummyLoaded: false,
        dummyLoadingFailed: true,
        error: action.payload
      };
    default:
      return state;
  }
};

export default dummyReducer;
