import { createSlice } from "@reduxjs/toolkit";

interface MenuToggleState {
  NavMenutoggled: { toggled: boolean };
  FilteringMenuToggled: { toggled: boolean; overlayToggled: boolean };
}

const initialState: MenuToggleState = {
  NavMenutoggled: { toggled: false },
  FilteringMenuToggled: { toggled: false, overlayToggled: false },
};

const sideMenuToggleSice = createSlice({
  name: "sideMenuState",
  initialState,
  reducers: {
    toggleSideMenu(state) {
      state.NavMenutoggled.toggled = !state.NavMenutoggled.toggled;
    },
    toggleFilterSideMenu(state, action) {
      const { toggle } = action.payload;
      state.FilteringMenuToggled.toggled =
        toggle ?? !state.FilteringMenuToggled.toggled;
    },
    toggleFilterSideMenuOverlay(state, action) {
      // console.log("Toggled overlay");
      const { toggle } = action.payload;
      state.FilteringMenuToggled.overlayToggled = toggle;
    },
  },
});

export const {
  toggleSideMenu,
  toggleFilterSideMenu,
  toggleFilterSideMenuOverlay,
} = sideMenuToggleSice.actions;

export default sideMenuToggleSice.reducer;
