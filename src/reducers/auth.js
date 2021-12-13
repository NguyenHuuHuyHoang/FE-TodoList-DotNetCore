import { LOGIN, LOGOUT, REGISTER } from "../constants/auth";

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo,
  isLoading: false,
  error: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN.REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case LOGIN.SUCCESS: {
      return { ...state, isLoading: false, userInfo: action.payload.data[0] };
    }
    case LOGIN.FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    case REGISTER.REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case REGISTER.SUCCESS: {
      return { ...state, isLoading: false, userInfo: action.payload.data };
    }
    case REGISTER.FAIL: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    case LOGOUT.SUCCESS: {
      localStorage.removeItem("userInfo");
      return { ...state, userInfo: null };
    }
    default:
      return state;
  }
}

export default authReducer;
