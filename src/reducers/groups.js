import { GET_GROUPS, SELECT_GROUP } from "src/constants/group";

const initialState = {
  groups: [],
  isLoading: false,
  error: null,
  currentGroup: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GROUPS.REQUEST:
      return { ...state, isLoading: true };
    case GET_GROUPS.SUCCESS:
      return { ...state, isLoading: false, groups: payload.data };
    case GET_GROUPS.FAIL:
      return { ...state, isLoading: false, error: payload.error };
    case SELECT_GROUP:
      return {
        ...state,
        currentGroup: payload.data,
      };
    default:
      return state;
  }
};
