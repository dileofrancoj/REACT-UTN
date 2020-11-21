import { combineReducers } from "redux";
import counter from "./../reducers/counterReducer";
import users from "./usersReducer";

// para crear store siempre se hace a través de reducers nunca de acciones
export default combineReducers({
  counter,
  users,
});
