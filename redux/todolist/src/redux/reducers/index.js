import { combineReducers } from "redux";
import todo from "./todoReducer";
import posts from "./postsReducer";
// import otro from ...
export default combineReducers({
  todo,
  posts,
  // otro
});
