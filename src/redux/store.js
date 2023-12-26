import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunker";
// import data from "../page/Foydalanuvchilar/data";

const initialState = {
  category: [{ title: "Pizza", completed: false }],
  edit: true,
  display: true,
  addDisplay: false,
  taom: false,
  // menu: [
  //   {
  //     imgUrl: "https://4yourstyle.ru/wp-content/uploads/2020/05/20-4.jpg",
  //     mealTitle: "Manti",
  //     comment: "Ajoyib!",
  //     price: 100,
  //   },
  //   {
  //     imgUrl:
  //       "https://ligabiznesa.ru/wp-content/uploads/2020/01/2.-gotovye-sushi.jpg",
  //     mealTitle: "Sushu",
  //     comment: "Ajoyib!",
  //     price: 100,
  //   },
  // ],
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
        ...state,
        display: !state.display,
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

      // case "SET_MENU":
      return {
        ...state,
        menu: [
          ...state.menu,
          {
            imgUrl: action.payload,
            mealTitle: action.payload,
            comment: action.payload,
            price: action.payload,
          },
        ],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
