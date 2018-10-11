import {
  NEW_TODO,
  OLD_TODO,
  DO_LOGIN,
  NEW_TODO_FAILURE,
  NEW_TODO_SUCCESS,
  TEST_API
} from "../actions/actions";

const INITIAL_STATE = {
  data: { data: [], error: null, loading: false }
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case NEW_TODO: // start fetching posts and set loading = true
      return { ...state, payload: action.payload };
    case OLD_TODO: // start fetching posts and set loading = true
      return { ...state, oldPayload: action.oldPayload.value };
    case DO_LOGIN: // start fetching posts and set loading = true
      return { ...state, loginPayload: action.loginPayload };
    case TEST_API:
      return { ...state, testPayload: action.testPayload };
    case NEW_TODO_SUCCESS: // return list of posts and make loading = false
      return {
        ...state,
        title: { title: action.payload, error: null, loading: false }
      };
    case NEW_TODO_FAILURE: // return error and make loading = false
      error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
      return {
        ...state,
        postsList: { posts: [], error: error, loading: false }
      };
  }
}
