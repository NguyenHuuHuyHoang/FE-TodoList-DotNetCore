import React from "react";
import { useForm } from "react-hook-form";

export default function SignupPageNew() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Họ Tên"
        {...register("Họ Tên", {
          required: true,
          max: 50,
          min: 2,
          maxLength: 80,
        })}
      />
      <input
        type="password"
        placeholder="Password"
        {...register("Password", { required: true, min: 3, maxLength: 10 })}
      />
      <input
        type="text"
        placeholder="Số điện thoại"
        {...register("Số điện thoại", {
          required: true,
          max: 10,
          min: 8,
          maxLength: 10,
        })}
      />

      <input type="submit" />
    </form>
  );
}
