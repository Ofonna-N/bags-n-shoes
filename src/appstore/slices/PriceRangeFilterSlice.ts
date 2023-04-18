import { createSlice } from "@reduxjs/toolkit";

interface PriceRangeFilterState {
  from: number | undefined;
  to: number | undefined;
}

const initialState: PriceRangeFilterState = {
  from: undefined,
  to: undefined,
};

const PriceRangeFilterSlice = createSlice({
  name: "PriceRangeFilterState",
  initialState,
  reducers: {
    updateFromState(state, action) {
      const { from } = action.payload;
      //   console.log(from, "Update from state");
      // console.log("from", from, "to", state.to);
      state.from = from;

      if (from && !state.to) {
        state.to = Number(from) + 1;
      } else if (from && state.to && from > state.to) {
        state.to = Number(from) + 1;
      }
    },
    updateToState(state, action) {
      const { to } = action.payload;
      if (to && !state.from) {
        state.to = to;
        state.from = 0;
        console.log("ARRR");
      } else if (to && state.from && state.from > to) {
        state.to = to;
        state.from = Number(to) - 1;
      } else {
        state.to = to;
      }
    },
  },
});

export const { updateFromState, updateToState } = PriceRangeFilterSlice.actions;

export default PriceRangeFilterSlice.reducer;
