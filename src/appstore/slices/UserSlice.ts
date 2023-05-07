import { createSlice } from "@reduxjs/toolkit";

type UserSliceState = {
  userExist: boolean;
};

const initialState: UserSliceState = {
  userExist: false,
};

type UserAction = {
  payload: {
    exists: boolean;
  };
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserState(state, action: UserAction) {
      state.userExist = action.payload.exists;
    },
  },
});

export const { setUserState } = userSlice.actions;

export default userSlice.reducer;
