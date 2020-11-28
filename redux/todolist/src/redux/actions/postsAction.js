// FETCH_POST_REQUEST
// FETCH_POST_SUCCESS
// FETCH_POST_ERROR
const URL = "https://jsonplaceholder.typicode.com/posts";
export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";

export const fetchPosts = (dispatch) => {
  dispatch({ type: FETCH_POST_REQUEST });
  fetch(URL)
    .then((response) => response.json())
    .then((posts) => {
      dispatch({
        type: FETCH_POST_SUCCESS,
        payload: {
          posts,
        },
      });
    })
    .catch((e) => dispatch({ type: FETCH_POST_ERROR, payload: { e } }));
};
