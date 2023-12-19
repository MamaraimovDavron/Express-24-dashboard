import { createStore } from "redux";
// import data from "../page/Foydalanuvchilar/data";

const initialState = {
  category: [{ title: "Italian Pizza", completed: false }],
  edit: true,
  display: 1,
  addDisplay: false,
  taom: false,
};

const reducer = (state = initialState, action) => {
  console.log(state);

  switch (action.type) {
    case "EDIT":
      return {
        edit: !state.edit,
      };

    case "SET_DISPLAY":
      return {
        display: (state.display = 0),
      };

    case "ADD_CATEGORY":
      return {
        ...state,
        addDisplay: !state.addDisplay,
      };

    case "ADD_MEAL": {
      return {
        ...state,
        taom: !state.taom,
      };
    }
    case "SET_CATEGORY":
      return {
        ...state,
        category: [
          ...state.category,
          { title: action.payload, completed: false },
        ],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
