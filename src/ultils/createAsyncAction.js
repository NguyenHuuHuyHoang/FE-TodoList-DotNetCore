const suffixAsyncAction = {
  REQUEST: "REQUEST",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
};

// Object.values(suffixAsyncAction) => ["REQUEST", "SUCCESS", "FAIL"]
// reduce
// Lần 1: acc: {}, curr: "REQUEST"
// acc[curr] <=> acc.REQUEST = GET_COURSES_LIST_REQUEST
// Lần 2: acc: {REQUEST: "GET_COURSES_LIST_REQUEST"}, curr: "SUCCESS"
// acc[curr] <=> acc.SUCCESS = GET_COURSES_LIST_SUCCESS

export const createActionTypes = (typeString) =>
  Object.values(suffixAsyncAction).reduce((acc, curr) => {
    acc[curr] = `${typeString}_${curr}`;
    return acc;
  }, {});

// createActionTypes("GET_COURSES_LIST");
