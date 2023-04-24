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

    // setSelectedCheckboxCount(state, action) {
    //   const { menuKey, selected } = action.payload;
    //   state[menuKey] = {
    //     ...state[menuKey],
    //     selected: selected,
    //   };
    // },

    addSelectedCheckboxCount(state, action) {
      const { menuKey } = action.payload;
      state[menuKey] = {
        ...state[menuKey],
        selected: state[menuKey].selected + 1,
      };
    },

    subtractSelectedCheckboxCount(state, action) {
      const { menuKey } = action.payload;
      state[menuKey] = {
        ...state[menuKey],
        selected: state[menuKey].selected - 1,
      };
    },

    resetSelectedCheckboxCount(
      state,
      { payload }: { payload: { menuKey: string } }
    ) {
      const { menuKey } = payload;
      state[menuKey] = {
        ...state[menuKey],
        selected: 0,
      };
    },
  },
});

export const {
  toggleCheckboxFilter,
  addSelectedCheckboxCount,
  subtractSelectedCheckboxCount,
  resetSelectedCheckboxCount,
} = CheckboxFilterSlice.actions;

export default CheckboxFilterSlice.reducer;
