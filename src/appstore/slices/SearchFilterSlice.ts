import { createSlice } from "@reduxjs/toolkit";

type SearchFilterstate = {
  search: string;
  toggleSearchHeader: boolean;
};

const initialState: SearchFilterstate = {
  search: "",
  toggleSearchHeader: false,
};

type SearchFilterAction = {
  payload: {
    search: string;
  };
};
type toggleFilterAction = {
  payload: {
    toggle: boolean;
  };
};

const SearchFilterSlice = createSlice({
  name: "SearchFilterSlice",
  initialState,
  reducers: {
    setSearchFilter(state, action: SearchFilterAction) {
      const { search } = action.payload;

      state.search = search;
    },
    toggleSearchFilter(state, action: toggleFilterAction) {
      const { toggle } = action.payload;
      state.toggleSearchHeader = toggle;
    },
  },
});

export const { setSearchFilter, toggleSearchFilter } =
  SearchFilterSlice.actions;

export default SearchFilterSlice.reducer;
