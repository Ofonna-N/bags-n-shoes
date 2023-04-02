import { createSlice } from "@reduxjs/toolkit";

interface MenuToggleState {
  toggled: boolean;
}

const initialState: MenuToggleState = { toggled: false };

const sideMenuToggleSice = createSlice({
  name: "sideMenuState",
  initialState,
  reducers: {
    toggleSideMenu(state) {
      state.toggled = !state.toggled;
    },
  },
});

export const { toggleSideMenu } = sideMenuToggleSice.actions;

export default sideMenuToggleSice.reducer;
