import {
  AC_ON,
  AC_OFF,
  DO_LOGIN,
  DO_VERIFY,
  DO_LOGOUT,
  GET_AC,
  GET_AC_STATUS
} from "../actions/actionType";

const INITIAL_STATE = {
  data: { data: [], error: null, loading: false }
};

export default function(state = INITIAL_STATE, action) {
  // let error;
  switch (action.type) {
    case AC_ON:
      return { ...state, acOnPayload: action.acOnPayload };
    case AC_OFF:
      return { ...state, acOffPayload: action.acOffPayload };
    case DO_LOGIN:
      return { ...state, loginPayload: action.loginPayload };
    case DO_VERIFY:
      return { ...state, verifyPayload: action.verifyPayload };
    case DO_LOGOUT:
      return { ...state, logoutPayload: action.logoutPayload };
    case GET_AC:
      return { ...state, getacPayload: action.getacPayload };
    case GET_AC_STATUS:
      return { ...state, getAcStatus: action.getAcStatus };
    // case NEW_TODO_SUCCESS: // return list of posts and make loading = false
    //   return {
    //     ...state,
    //     title: { title: action.payload, error: null, loading: false }
    //   };
    // case NEW_TODO_FAILURE: // return error and make loading = false
    //   error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
    //   return {
    //     ...state,
    //     postsList: { posts: [], error: error, loading: false }
    //   };
  }
}
