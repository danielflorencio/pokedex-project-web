import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {  fetchUserLoginStatus } from '../helpers/loginHelpers'
import { UserData } from '../types/user';
import { RootState } from '../store';
export interface SessionState {
  userData: Partial<UserData>
  userIsLogged: boolean,
  token: string | null,
  connectionError: boolean, 
  isLoading: boolean
}

let initialState: SessionState = {
  userData: {email: '', password: '', firstName: '', lastName: ''},
  userIsLogged: false,
  token: null,
  connectionError: false,
  isLoading: true
};

(async () => {
  initialState = await fetchUserLoginStatus();
})

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    registerLoggedUserState: (state, action: PayloadAction<string | null>) => {
      const newState = {
        ...state, 
        userIsLogged: true,
        userData: {
          email: action.payload,
        }
      }
      state = newState;
      return state
    },
    logout: (state) => {
      localStorage.clear()
      state.userIsLogged = false;
      state.connectionError = false;
      state.isLoading = false;
      state.userData = {email: '', firstName: '', lastName: '', password: ''}
      window.location.href = '/'
    },
    setIsLogged: (state) => {
      state.userIsLogged = true;
    }
  },
})

export const selectUserIsLogged = (state: RootState) =>{return state.session.userIsLogged};
export const selectUserEmail = (state: RootState) =>{return state.session.userData.email};
export const { logout, registerLoggedUserState, setIsLogged } = sessionSlice.actions;
export const sessionActions = {
  ...sessionSlice.actions,
}
export default sessionSlice.reducer