import { configureStore } from "@reduxjs/toolkit";
import  Database  from "../Redux/Reduser";

export default configureStore({
  reducer: {
    data: Database,
  },
});
