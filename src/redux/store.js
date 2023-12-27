import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
// import thunk from "redux-thunker";
import reducer from "./reducer";

// import data from "../page/Foydalanuvchilar/data";
const store = createStore(reducer);

const dispatch = store.dispatch;
export { dispatch };

export default store;
