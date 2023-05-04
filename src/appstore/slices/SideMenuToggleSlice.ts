import { createSlice } from "@reduxjs/toolkit";

interface MenuToggleState {
  NavMenutoggled: { toggled: boolean };
  FilteringMenuToggled: { toggled: boolean; overlayToggled: boolean };
  SeachBarMenuToggled: { toggled: boolean; overlayToggled: boolean };
}

const initialState: MenuToggleState = {
  NavMenutoggled: { toggled: false },
  FilteringMenuToggled: { toggled: false, overlayToggled: false },
  SeachBarMenuToggled: { toggled: false, overlayToggled: false },
};

type ToggleAction = {
  payload: {
    toggle: boolean;
  };
};

const sideMenuToggleSice = createSlice({
  name: "sideMenuState",
  initialState,
  reducers: {
    toggleSideMenu(state) {
      state.NavMenutoggled.toggled = !state.NavMenutoggled.toggled;
    },
    toggleFilterSideMenu(state, action: ToggleAction) {
      const { toggle } = action.payload;
      state.FilteringMenuToggled.toggled =
        toggle ?? !state.FilteringMenuToggled.toggled;
    },
    toggleFilterSideMenuOverlay(state, action: ToggleAction) {
      // console.log("Toggled overlay");
      const { toggle } = action.payload;
      state.FilteringMenuToggled.overlayToggled = toggle;
    },
    toggleSearchBarMenu(state, action: ToggleAction) {
      const { toggle } = action.payload;
      // console.log(toggle, "search bar toggled");
      state.SeachBarMenuToggled.toggled = toggle;
      // toggle ?? !state.SeachBarMenuToggled.toggled;
    },
    toggleSearchBarMenuOverlay(state, action: ToggleAction) {
      // console.log("Toggled overlay");
      const { toggle } = action.payload;
      // console.log(toggle, "search bar toggled");
      state.SeachBarMenuToggled.overlayToggled = toggle;
    },
  },
});

export const {
  toggleSideMenu,
  toggleFilterSideMenu,
  toggleFilterSideMenuOverlay,
  toggleSearchBarMenu,
  toggleSearchBarMenuOverlay,
} = sideMenuToggleSice.actions;

export default sideMenuToggleSice.reducer;
