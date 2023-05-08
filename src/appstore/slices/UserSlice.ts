import { createSlice } from "@reduxjs/toolkit";

type UserSliceState = {
  email: string | null;
  userExist: boolean;
};

const initialState: UserSliceState = {
  email: "",
  userExist: false,
};

type UserAction = {
  payload: {
    email: string | null;
    exists: boolean;
  };
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserState(state, action: UserAction) {
      state.email = action.payload.email;
      state.userExist = action.payload.exists;
    },
  },
});

export const { setUserState } = userSlice.actions;

export default userSlice.reducer;
