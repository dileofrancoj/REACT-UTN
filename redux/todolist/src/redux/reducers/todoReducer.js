import { ADD_TODO, MODIFY_TODO, DELETE_TODO } from "./../actions/todoAction";

//

const initialState = {
  // CUALQUIER COSA
  todos: [
    {
      id: "masidmiasdm1_",
      text: "Subir clases a tiempo",
      checked: false,
      fecha: new Date(),
    },
  ],
};

function todo(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case MODIFY_TODO:
      // const index = state.todos.find()
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (action.payload.id === todo.id) {
              todo.checked = !todo.checked;
            }
            return todo;
          }),
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default todo;
