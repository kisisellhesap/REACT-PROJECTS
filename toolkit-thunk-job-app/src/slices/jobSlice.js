import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    jobList: [],
    loading: false,
    error: null,
  },
  reducers: {
    displayJob: (state, action) => {
      state.jobList = action.payload;
      state.loading = false;
      state.error = null;
    },
    loading: (state) => {
      state.loading = true;
    },
    error: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    deleteJob: (state, action) => {
      const index = state.jobList.findIndex((job) => job.id === action.payload);

      state.jobList.splice(index, 1);
    },
    addJob: (state, action) => {
      state.jobList.push(action.payload);
    },
  },
});

export const { displayJob, loading, error, deleteJob, addJob } =
  jobSlice.actions;
export default jobSlice.reducer;
