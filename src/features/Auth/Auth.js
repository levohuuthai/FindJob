import React, { useState } from "react";
import style from "./Auth.module.scss";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

Auth.propTypes = {};

function Auth(props) {
  const [open, setOpen] = useState(false);

  const openSignInHandler = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={`${style.background_signin_signup}`}>
        <div className={`${style.container_signin_signup}`}>
          <a href="/" className={`${style.signin_signup_logo}`}>
            RUBIX
          </a>
          <div
            className={`${style.frame_signin_signup} ${
              open ? style.right_panel_active : ""
            }`}
            id="container"
          >
            <div
              className={`${style.form_container} ${style.sign_up_container}`}
            >
              <SignUp />
            </div>
            <div
              className={`${style.form_container} ${style.sign_in_container}`}
            >
              <SignIn />
            </div>
            <div className={`${style.overlay_container}`}>
              <div className={`${style.overlay}`}>
                <div className={`${style.overlay_panel} ${style.overlay_left}`}>
                  <h1 className={`${style.signup_title}`}>Chào mừng bạn!</h1>
                  <p className={`${style.signup_content}`}>
                    Để tiếp tục mua sắm cùng chúng tôi, vui lòng đăng nhập tài
                    khoản cá nhân!
                  </p>
                  <button
                    className={`${style.btn_signin} ${style.ghost}`}
                    id="signIn"
                    onClick={openSignInHandler}
                  >
                    Đăng nhập
                  </button>
                </div>
                <div
                  className={`${style.overlay_panel} ${style.overlay_right}`}
                >
                  <h1 className={`${style.signin_title}`}>Xin chào!</h1>
                  <p className={`${style.signin_content}`}>
                    Đăng kí tài khoản cá nhân để bắt đầu mua sắm cùng chúng tôi
                    nhé!
                  </p>
                  <button
                    className={`${style.btn_signin} ${style.ghost}`}
                    id="signUp"
                    onClick={openSignInHandler}
                  >
                    Đăng kí
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={`${style.blur}`}></div> */}
    </>
  );
}

export default Auth;
