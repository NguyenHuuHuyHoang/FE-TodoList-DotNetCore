import groupAPI from "src/services/groupAPI";
import { CREATE_GROUP, GET_GROUPS, SELECT_GROUP } from "src/constants/group";

export const fetchGroups = (accountId) => {
  return async (dispatch) => {
    dispatch({ type: GET_GROUPS.REQUEST });
    try {
      const { data } = await groupAPI.getGroupsByAccountId(accountId);
      console.log(data);
      dispatch({
        type: GET_GROUPS.SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: GET_GROUPS.FAIL,
        payload: { error: error.response.data },
      });
    }
  };
};

export const createGroup = (data) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_GROUP.REQUEST });
    try {
      const { status } = await groupAPI.createGroup(data);
      if (status === 201) {
        alert("Thêm thành công");
        dispatch(fetchGroups(data.accountId));
      }
    } catch (error) {
      dispatch({
        type: CREATE_GROUP.FAIL,
        payload: { error: error.response.data },
      });
    }
  };
};

export const selectGroup = (group) => {
  return (dispatch) => {
    dispatch({
      type: SELECT_GROUP,
      payload: { data: group },
    });
  };
};
