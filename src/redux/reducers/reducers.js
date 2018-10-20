import {
  AC_ON,
  AC_OFF,
  TV_ON,
  TV_OFF,
  LAMP_ON,
  LAMP_OFF,
  DO_LOGIN,
  DO_VERIFY,
  DO_LOGOUT,
  GET_AC,
  GET_AC_STATUS,
  GET_TV,
  GET_TV_STATUS,
  GET_LAMP,
  GET_LAMP_STATUS,
  NOTIF_TOKEN
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
    case TV_ON:
      return { ...state, tvOnPayload: action.tvOnPayload };
    case TV_OFF:
      return { ...state, tvOffPayload: action.tvOffPayload };
    case LAMP_ON:
      return { ...state, lampOnPayload: action.lampOnPayload };
    case LAMP_OFF:
      return { ...state, lampOffPayload: action.lampOffPayload };
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
    case GET_TV:
      return { ...state, getTvPayload: action.getTvPayload };
    case GET_TV_STATUS:
      return { ...state, getTvStatus: action.getTvStatus };
    case GET_LAMP:
      return { ...state, getLampPayload: action.getLampPayload };
    case GET_LAMP_STATUS:
      return { ...state, getLampStatus: action.getLampStatus };
    case NOTIF_TOKEN:
      return { ...state, notifPayload: action.notifPayload };
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
