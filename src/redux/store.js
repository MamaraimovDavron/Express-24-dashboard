import { createStore } from "redux";
// import data from "../page/Foydalanuvchilar/data";

const initialState = { edit: true, display: 1 };

const reducer = (state = initialState, action) => {
  console.log(state.display);

  switch (action.type) {
    case "EDIT":
      return {
        ...state,
        edit: !state.edit,
      };

    case "SET_DISPLAY":
      return {
        ...state,
        display: (state.display = 0),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
