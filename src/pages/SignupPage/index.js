import React from "react";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

import { Redirect, useLocation } from "react-router-dom";
import qs from "qs";
import { signup } from "src/actions/auth";

export default function SignupPage() {
  const dispatch = useDispatch();
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);
  const location = useLocation();

  const {
    register,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const handleClickDangKy = async () => {
    await dispatch(signup(getValues()));
    reset();
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
    <div className="container">
      <h1 className="text-center">Đăng ký tài khoản mới</h1>
      <div className="w-50 m-auto">
        <form>
          <div className="form-group">
            <label>Họ tên</label>
            <input
              type="text"
              className="form-control"
              {...register("fullName")}
            />
            {errors.fullName && (
              <div className="alert alert-danger">
                {errors.fullName.message}
              </div>
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              {...register("email")}
            />
            {errors.email && (
              <div className="alert alert-danger">{errors.email.message}</div>
            )}
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              {...register("password")}
            />
            {errors.password && (
              <div className="alert alert-danger">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="form-group">
            <label>Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              {...register("phone")}
            />
            {errors.phone && (
              <div className="alert alert-danger">{errors.phone.message}</div>
            )}
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClickDangKy}
          >
            Đăng ký
          </button>
        </form>

        {/* <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            {...register("email")}
            required
          />
          {errors.email && (
            <Alert color="danger">{errors.email.message}</Alert>
            // <div className="alert alert-danger">{errors.email.message}</div>}
          )}
        </div>
        <button type="submit">Sign in</button>

        <input className="btn btn-success" type="submit" /> */}
      </div>
    </div>
  );
}
