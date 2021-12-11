import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, FormGroup, Label, Alert } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "src/actions/auth";
import { Redirect, useLocation } from "react-router-dom";
import qs from "qs";

// Controlled Component: Control tất cả mọi thứ trên giao diện bằng state, props
// Uncontrolled Component: Control giao diện k thông qua state, props

// Cả useState lẫn useRef đều dùng để lưu trữ data
// Khác: khi state thay đổi component bị render lại, ref thay đổi component không bị render lại

// Tạo schame validation
const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("Tài khoản không được để trống")
    .min(5, "Tài khoản phải từ 5 đến 20 kí tự")
    .max(20, "Tài khoản phải từ 5 đến 20 kí tự"),
  matKhau: yup.string().required("Mật khẩu không được để trống"),
});

export default function LoginPage() {
  // const inpTaiKhoan = useRef();
  // const inpMatKhau = useRef();
  const dispatch = useDispatch();
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);
  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,

    // sử dụng khi UI component không hỗ register
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (values) => {
    // console.log(inpTaiKhoan.current.value);
    // console.log(inpMatKhau.current.value);
    console.log(values);
    // dispatch action Đăng nhập
    dispatch(login(values));
  };

  // userInfo có data => đã đăng nhập sẽ chuyển người dùng về trang Home
  if (userInfo) {
    const { redirectTo } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    if (redirectTo) {
      return <Redirect to={redirectTo} />;
    }

    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <h1>Login Page</h1>
      <div className="form-group">
        <label>Tài Khoản</label>
        <input
          type="text"
          className="form-control"
          {...register(
            "taiKhoan"
            // Sử dụng yup để validate nên đoạn này k cần
            // {
            //   required: {
            //     value: true,
            //     message: "Tài khoản không được để trống",
            //   },
            //   minLength: {
            //     value: 5,
            //     message: "Tài khoản phải từ 5 đến 20 kí tự",
            //   },
            //   maxLength: {
            //     value: 20,
            //     message: "Tài khoản phải từ 5 đến 20 kí tự",
            //   },
            // }
          )}
        />
        {errors.taiKhoan && (
          <div className="alert alert-danger">{errors.taiKhoan.message}</div>
        )}
      </div>
      {/* <div className="form-group">
        <label>Mật khẩu</label>
        <input
          type="text"
          className="form-control"
          {...register("matKhau", { required: true })}
        />
      </div> */}
      {/* <FormGroup>
        <Label>Mật khẩu</Label>
        <Input
          type="text"
          {...register("matKhau", {
            required: { value: true, message: "Tài khoản không được để trống" },
          })}
        />
        {errors.matKhau && (
          <Alert color="danger">{errors.matKhau.message}</Alert>
        )}
      </FormGroup> */}

      {/* Sử dụng khi UI component không hỗ trợ register */}
      <FormGroup>
        <Label>Mật Khẩu</Label>
        <Controller
          name="matKhau"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: "Mật khẩu không được để trống" },
          }}
          render={({ field }) => {
            return <Input {...field} />;
          }}
        />
        {errors.matKhau && (
          <Alert color="danger">{errors.matKhau.message}</Alert>
        )}
      </FormGroup>

      {error && <Alert color="danger">{error}</Alert>}

      <button className="btn btn-success">Đăng Nhập</button>
    </form>
  );
}
