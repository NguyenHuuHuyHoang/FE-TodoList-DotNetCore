import { CREATE_TODO, FETCH_STATUS, GET_TODOS } from "src/constants/todo";
import todoAPI from "src/services/todoAPI";

export const fetchTodos = (groupId) => {
  return async (dispatch) => {
    dispatch({ type: GET_TODOS.REQUEST });
    try {
      const { data } = await todoAPI.getTodosByGroupId(groupId);
      dispatch({
        type: GET_TODOS.SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: GET_TODOS.FAIL,
        payload: { error: error.response.data },
      });
    }
  };
};

export const createTodo = (data) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_TODO.REQUEST });
    try {
      const { status } = await todoAPI.createTodoByGroupId(data);
      console.log(status);
      if (status === 201) {
        alert("Tạo thành công");
        dispatch(fetchTodos(data.groupId));
        dispatch({ type: CREATE_TODO.SUCCESS });
      }
    } catch (error) {
      dispatch({
        type: CREATE_TODO.FAIL,
        payload: { error: error.response.data },
      });
    }
  };
};

export const fetchStatus = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_STATUS.REQUEST });
    try {
      const { data } = await todoAPI.fetchStatus();
      dispatch({
        type: FETCH_STATUS.SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: FETCH_STATUS.FAIL,
        payload: { error: error.response.data },
      });
    }
  };
};

// export const createGroup = (data) => {
//   return async (dispatch) => {
//     dispatch({ type: CREATE_GROUP.REQUEST });
//     try {
//       const { status } = await groupAPI.createGroup(data);
//       if (status === 201) {
//         alert("Thêm thành công");
//         dispatch(fetchGroups(data.accountId));
//       }
//     } catch (error) {
//       dispatch({
//         type: CREATE_GROUP.FAIL,
//         payload: { error: error.response.data },
//       });
//     }
//   };
// };

// export const selectGroup = (group) => {
//   return (dispatch) => {
//     dispatch({
//       type: SELECT_GROUP,
//       payload: { data: group },
//     });
//   };
// };
