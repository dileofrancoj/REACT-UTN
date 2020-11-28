import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  fetchPosts,
} from "./../actions/postsAction";
const initialState = {
  posts: [],
  isFetching: false,
  errors: false,
  errorMessage: "",
};

function posts(state = initialState, actions) {
  switch (actions.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: actions.payload.posts,
      };
    case FETCH_POST_ERROR:
      return {
        ...state,
        errors: true,
        errorMessage: actions.payload.e,
      };

    default:
      return state;
  }
}
export default posts;
