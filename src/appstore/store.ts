import { configureStore } from "@reduxjs/toolkit";
import SideMenuToggleSlice from "./slices/SideMenuToggleSlice";
import CheckboxFilterSlice from "./slices/CheckboxFilterSlice";
import PriceRangeFilterSlice from "./slices/PriceRangeFilterSlice";
import SortingDropdownSlice from "./slices/SortingDropdownSlice";

const store = configureStore({
  reducer: {
    SideMenuToggleSlice,
    CheckboxFilterSlice,
    PriceRangeFilterSlice,
    SortingDropdownSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
