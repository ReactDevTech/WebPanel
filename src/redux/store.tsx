import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.tsx";

export default configureStore({
  reducer: rootReducer,
});
