import React, { useReducer } from 'react';
import AuthContext from './authContact';
import AuthReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    errror: null
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  // Load User

  //Register User

  //Login User

  //Logout

  //Clear Errors
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.token,
        token: state.error
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;