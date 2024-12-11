import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    singleJob: null,
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSinglejob: (state, action) => {
      state.singleJob = action.payload;
    },
  },
});
export const { setAllJobs, setSinglejob } = jobSlice.actions;
export default jobSlice.reducer;
