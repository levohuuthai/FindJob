import InputField from "components/form-control/InputField";
import PasswordField from "components/form-control/PasswordField";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import style from "../Auth.module.scss";

SignIn.propTypes = {};

function SignIn(props) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Vui lòng nhập Email!")
      .email("Email không chính xác!"),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(6, "Mật khẩu ít nhất 6 kí tự!"),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value) => {};
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <h1>
        <b>Đăng nhập</b>
      </h1>
      <div className={`${style.social_container}`}>
        <Link to="" className={`${style.social_fb}`}>
          <i className="fab fa-facebook-f">
            <div className="social-fb-login"></div>
          </i>
        </Link>
        <Link to="" className={`${style.social_gg}`}>
          <i className="fab fa-google-plus-g">
            <div className={`${style.social_gg_login}`}></div>
          </i>
        </Link>
      </div>
      <span className={`${style.span_signin}`}>
        Hoặc sử dụng tài khoản của bạn
      </span>
      <InputField name="email" label="Email" form={form} />
      <PasswordField name="password" label="Mật khẩu" form={form} />
      {/* <span className={`${style.error}`}>{error}</span> */}
      <Link className={`${style.signin_forgot_password}`} to="/forgotPassword">
        Quên mật khẩu?
      </Link>
      <button className={`${style.btn_signin}`} type="submit">
        Đăng Nhập
      </button>
    </form>
  );
}

export default SignIn;
