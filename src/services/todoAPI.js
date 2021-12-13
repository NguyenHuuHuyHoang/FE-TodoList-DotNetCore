import axiosClient from "./axiosClient";

const todoAPI = {
  getTodosByGroupId: (groupId) => {
    return axiosClient.get(
      `/QuanLyTodo/LayDanhSachTodoTheoNhom?groupId=${groupId}`
    );
  },

  createTodoByGroupId: (data) => {
    return axiosClient.post(`/QuanLyTodo/ThemTodoMoi`, data);
  },

  fetchStatus: () => {
    return axiosClient.get("/QuanLyTrangThaiTodo/LayDanhSachTrangThai");
  },
};

export default todoAPI;
