import { createStore } from "redux";

const initialState = 0;

// Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

var obj = {};
// funciones reducer
// const [state,setState] = useState(0)
// action : {type : 'ACCION',....º}

// Reducers
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

// Triggers
export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

const store = createStore(counter);
// store.dispatch(increment())
export default store;
