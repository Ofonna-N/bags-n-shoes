import { sortingDropDownValues } from "@/utility/baseExports";
import { createSlice } from "@reduxjs/toolkit";

interface SortingDropdownState {
  value: string;
}

const initialState: SortingDropdownState = {
  value: sortingDropDownValues.name_asc,
};

const SortingDropDownSlice = createSlice({
  name: "sortingDropDownSlice",
  initialState,
  reducers: {
    setDropDownValue(state, action) {
      const { value } = action.payload;

      state.value = value;
    },
  },
});

export const { setDropDownValue } = SortingDropDownSlice.actions;

export default SortingDropDownSlice.reducer;
