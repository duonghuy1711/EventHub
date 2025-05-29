import {createSlice} from '@reduxjs/toolkit';

interface AuthState {
  id: string;
  email: string;
  acccestoken: string;
}

const initalState: AuthState = {
  id: '',
  email: '',
  acccestoken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {authData: initalState},
  reducers: {
    addAuth: (state, action) => {
      state.authData = action.payload;
    },
    removeAuth: (state) => {
      state.authData = initalState;
    },
  },
});

export const authReducer = authSlice.reducer;
export const {addAuth, removeAuth} = authSlice.actions;

export const authSelector = (state: any) => state.authReducer.authData;
