import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  redirection: null,
  brainOptions: "",
  statusQuiz: "",
  optionMobileMoney: "",
  token: null,
};
const gestStock = createSlice({
  name: "brainsQuiz",
  initialState,
  reducers: {
    setRedirection(state, action) {
      state.redirection = action.payload;
    },
    setBrainOptions(state, action) {
      state.brainOptions = action.payload;
    },
    setStatusQuiz(state, action) {
      state.statusQuiz = action.payload;
    },
    setOptionMobileMoney(state, action) {
      state.optionMobileMoney = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export default gestStock.reducer;
export const {
  setRedirection,
  setBrainOptions,
  setStatusQuiz,
  setOptionMobileMoney,
  setToken,
} = gestStock.actions;
