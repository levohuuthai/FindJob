import React from "react";
import logoRubix from "assets/logoRubic.png";
import style from "./Header.module.scss";

function Header(props) {
  return (
      <header>
        <div className={`${style.container_header} wrap_header`}>
          <div className={`${style.img_logo}`}>
            <img src={logoRubix} alt="logo" />
          </div>
          <div className={`${style.search} d-flex`}>
            <div className={`${style.input_search}`}>
              <i class="bi bi-search"></i>
              <input
                type="text"
                placeholder="Tên công việc, vị trí bạn muốn ứng tuyển"
              />
            </div>
            <button className={`${style.button_search}`}>Tìm việc ngay</button>
          </div>
          <div className={`${style.login_register}`}>
            <a href="\" className={`${style.login}`}>
              Đăng nhập
            </a>
            <a href="/" className={`${style.register}`}>
              Đăng ký
            </a>
          </div>
        </div>
      </header>
  );
}

export default Header;
