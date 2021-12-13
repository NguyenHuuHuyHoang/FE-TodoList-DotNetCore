import { createActionTypes } from "src/ultils/createAsyncAction";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGIN = createActionTypes("LOGIN");
export const REGISTER = createActionTypes("REGISTER");
