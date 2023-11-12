import { combineReducers } from "redux";
import LoadingReducer from "./LoadingReducer";
import Theme from "./Theme";
import UIReducer from "./UIReducer";

export default combineReducers({
  loading: LoadingReducer,
  UI: UIReducer,
  theme: Theme,
});
