import InputField from "components/form-control/InputField";
import PasswordField from "components/form-control/PasswordField";
import React from "react";
import { useForm } from "react-hook-form";
import style from "../Auth.module.scss";

SignUp.propTypes = {};

function SignUp(props) {
  const form = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      retypePassword: "",
    },
  });

  const handleSubmit = (value) => {};

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <h1>Tạo tài khoản</h1>
      <InputField name="fullname" label="Tên hiển thị" form={form} />
      <InputField name="email" label="Email" form={form} />
      <PasswordField name="password" label="Mật khẩu" form={form} />
      <PasswordField
        name="retypePassword"
        label="Nhập lại mật khẩu"
        form={form}
      />
      {/* <span className="error">{error}</span> */}
      <button className={`${style.btn_signin}`} type="submit">
        Đăng kí
      </button>
    </form>
  );
}

export default SignUp;
