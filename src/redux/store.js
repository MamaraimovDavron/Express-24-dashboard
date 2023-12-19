import { createStore } from "redux";
// import data from "../page/Foydalanuvchilar/data";

const initialState = {
  category: [{ title: "", completed: false }],
  edit: true,
  display: 1,
  addDisplay: false,
  taom: false,
  menu: [
    {
      imgUrl: "https://4yourstyle.ru/wp-content/uploads/2020/05/20-4.jpg",
      mealTitle: "Manti",
      comment: "Ajoyib!",
      price: 100,
      categoryTitle: "Milliy taom",
    },
  ],
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

    case "SET_MENU":
      return {
        ...state,
        menu: [
          ...state.menu,
          {
            imgUrl: action.payload,
            mealTitle: action.payload,
            comment: action.payload,
            price: action.payload,
            categoryTitle: action.payload,
          },
        ],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
