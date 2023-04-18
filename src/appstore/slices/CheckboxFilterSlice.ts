import { createSlice } from "@reduxjs/toolkit";

interface CheckboxFilterState {
  [menuKey: string]: {
    [checkBoxKey: string]: boolean | number;
    selected: number;
  };
}

const initialState: CheckboxFilterState = {};

const CheckboxFilterSlice = createSlice({
  name: "CheckboxFilterState",
  initialState,
  reducers: {
    toggleCheckboxFilter(state, action) {
      const {
        menuKey,
        menuCheckBoxValue: { checkBoxKey, value },
      } = action.payload;
      state[menuKey] = {
        ...state[menuKey],
        [checkBoxKey]: value,
      };
    },

    setSelectedCheckboxCount(state, action) {
      const { menuKey, selected } = action.payload;
      state[menuKey] = {
        ...state[menuKey],
        selected: selected,
      };
    },
  },
});

export const { toggleCheckboxFilter, setSelectedCheckboxCount } =
  CheckboxFilterSlice.actions;

export default CheckboxFilterSlice.reducer;
