import { createSlice } from "@reduxjs/toolkit";

interface CategorySliceState {
  category: string;
}

const initialState: CategorySliceState = {
  category: "products",
};

const categoryFilterSlice = createSlice({
  name: "categoryFilterSlice",
  initialState,
  reducers: {
    updateCateryFilter(state, { payload }: { payload: CategorySliceState }) {
      state.category = payload.category;
    },
  },
});

export const { updateCateryFilter } = categoryFilterSlice.actions;

export default categoryFilterSlice.reducer;
