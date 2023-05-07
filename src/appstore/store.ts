import { configureStore } from "@reduxjs/toolkit";
import SideMenuToggleSlice from "./slices/SideMenuToggleSlice";
import CheckboxFilterSlice from "./slices/CheckboxFilterSlice";
import PriceRangeFilterSlice from "./slices/PriceRangeFilterSlice";
import SortingDropdownSlice from "./slices/SortingDropdownSlice";
import SelectPanelSlice from "./slices/SelectPanelSlice";
import CategoryFilterSlice from "./slices/CategoryFilterSlice";
import SearchFilterSlice from "./slices/SearchFilterSlice";
import CartSlice from "./slices/CartSlice";
import UserSlice from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    SideMenuToggleSlice,
    CheckboxFilterSlice,
    PriceRangeFilterSlice,
    SortingDropdownSlice,
    SelectPanelSlice,
    CategoryFilterSlice,
    SearchFilterSlice,
    CartSlice,
    UserSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
