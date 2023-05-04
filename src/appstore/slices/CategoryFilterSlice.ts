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
    clearCategoryFilter(state) {
      console.log("clearing category!");
      state.category = "products";
    },
  },
});

export const { updateCateryFilter, clearCategoryFilter } =
  categoryFilterSlice.actions;

export default categoryFilterSlice.reducer;
