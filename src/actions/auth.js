import { LOGIN, REGISTER, LOGOUT } from "../constants/auth";
import authAPI from "../services/authAPI";

export function login(values) {
  return async (dispatch) => {
    dispatch({ type: LOGIN.REQUEST });
    try {
      const { data } = await authAPI.login(values);
      // Lưu thông tin user xuống localStorage để giữ trạng thai đăng nhập khi user tắt trang web

      localStorage.setItem("userInfo", JSON.stringify(data));

      dispatch({ type: LOGIN.SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: LOGIN.FAIL,
        payload: { error: error.response.data },
      });
    }
  };
}

export function signup(values) {
  return async (dispatch) => {
    dispatch({ type: REGISTER.REQUEST });
    try {
      const { status, data } = await authAPI.register(values);
      if (status === 201) {
        const newData = { ...values, id: data.newId };
        localStorage.setItem("userInfo", JSON.stringify(newData));
        dispatch({
          type: REGISTER.SUCCESS,
          payload: { data: newData },
        });
      }
    } catch (error) {
      dispatch({
        type: REGISTER.FAIL,
        payload: { error: error.response.data },
      });
    }
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({ type: LOGOUT.SUCCESS });
  };
}
