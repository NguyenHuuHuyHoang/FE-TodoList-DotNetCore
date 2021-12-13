import axiosClient from "./axiosClient";

const groupAPI = {
  getGroupsByAccountId: (accountId) => {
    return axiosClient.get(
      `/QuanLyNhom/LayDanhSachNhomTheoNguoiDung?accountId=${accountId}`
    );
  },

  createGroup: (values) => {
    return axiosClient.post("/QuanLyNhom/ThemNhomMoi", values);
  },
};

export default groupAPI;
