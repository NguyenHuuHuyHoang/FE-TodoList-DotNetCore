import { CREATE_TODO, FETCH_STATUS, GET_TODOS } from "src/constants/todo";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
  currentTodo: null,
  listStatus: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOS.REQUEST:
      return { ...state, isLoading: true };
    case GET_TODOS.SUCCESS:
      return { ...state, isLoading: false, todos: payload.data };
    case GET_TODOS.FAIL:
      return { ...state, isLoading: false, error: payload.error };
    case FETCH_STATUS.REQUEST:
      return { ...state, isLoading: true };
    case FETCH_STATUS.SUCCESS:
      return { ...state, isLoading: false, listStatus: payload.data };
    case FETCH_STATUS.FAIL:
      return { ...state, isLoading: false, error: payload.error };
    case CREATE_TODO.REQUEST:
      return { ...state, isLoading: true };
    case CREATE_TODO.SUCCESS:
      return { ...state, isLoading: false };
    case CREATE_TODO.FAIL:
      return { ...state, isLoading: false, error: payload.error };
    // case SELECT_GROUP:
    //   return {
    //     ...state,
    //     currentGroup: payload.data,
    //   };
    default:
      return state;
  }
};
