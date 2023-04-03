import { Store, configureStore } from "@reduxjs/toolkit";
import SideMenuToggleSlice from "./slices/SideMenuToggleSlice";

const store = configureStore({ reducer: { SideMenuToggleSlice } });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
