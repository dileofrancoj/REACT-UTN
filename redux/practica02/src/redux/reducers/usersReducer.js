import { MODIFY_USER } from "./../actions/users";
const initialState = {
  nombre: "",
  apellido: "",
};

const user = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case MODIFY_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default user;
