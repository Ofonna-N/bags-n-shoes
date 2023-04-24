import { createSlice } from "@reduxjs/toolkit";

interface Badge {
  key: string;
  value: string;
  type: string;
  categoryKey: string;
}

type SelectPanelState = Badge[];

const initialState: SelectPanelState = [];

const SelectPanelSlice = createSlice({
  name: "SelectPanelSlice",
  initialState,
  reducers: {
    addCheckboxBadge(state, { payload }: { payload: Badge }) {
      //   const { key, value, clickHandler } = payload;
      //   console.log("add badge", payload);
      state.push(payload);
    },
    removeCheckboxBadge(state, { payload }: { payload: { key: string } }) {
      //   console.log("remove badge", payload);
      return state.filter((badge) => badge.key !== payload.key);
    },
    addPriceRangeBadge(state, { payload }: { payload: Badge }) {
      // console.log("adding price badge...", payload);
      let index = 0;
      const hasBadge = state.some((badge, i) => {
        index = i;
        return badge.key === payload.key;
      });
      if (hasBadge) {
        state[index].value = payload.value;
        // console.log("override price badge value");
      } else {
        state.push(payload);
      }
      // state.push(payload);
    },
    removePriceRangeBadge(state, { payload }: { payload: { key: string } }) {
      return state.filter((badge) => badge.key !== payload.key);
      // console.log("remove price badge", payload);
    },
  },
});

export const {
  addCheckboxBadge,
  removeCheckboxBadge,
  addPriceRangeBadge,
  removePriceRangeBadge,
} = SelectPanelSlice.actions;

export default SelectPanelSlice.reducer;
