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

// Tạo schema validation
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email phải đúng định dạng")
    .required("Email không được để trống"),
  matKhau: yup.string().required("Mật khẩu không được để trống"),
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);
  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (values) => {
    // console.log(inpTaiKhoan.current.value);
    // console.log(inpMatKhau.current.value);
    console.log(values);

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
    <form onSubmit={handleSubmit(handleLogin)} className="container">
      <div className="w-50 m-auto">
        <h1>Đăng nhập</h1>
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" {...register("email")} />
          {errors.email && (
            <div className="alert alert-danger">{errors.email.message}</div>
          )}
        </div>
        <FormGroup>
          <Label>Mật Khẩu</Label>
          <Controller
            name="matKhau"
            control={control}
            defaultValue=""
            // rules={{
            //   required: {
            //     value: true,
            //     message: "Mật khẩu không được để trống",
            //   },
            // }}
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
      </div>
    </form>
  );
}
