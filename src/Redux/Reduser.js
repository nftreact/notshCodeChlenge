import { createSlice } from "@reduxjs/toolkit";
export const Database = createSlice({
  name: "data",
  initialState: {
    token: "",
    currentTime: "",
  },
  reducers: {
    setToken: (state, actions) => {
      state.token = actions.payload;
    },
    setcurrentTime: (state, actions) => {
      state.currentTime = actions.payload;
    },
  },
});

export const { setToken, setcurrentTime } = Database.actions;

export default Database.reducer;
