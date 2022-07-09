import React from "react";
import style from "./HomePage.module.scss";
import Header from "components/Header/Header";
import fpt from "assets/fpt.png";
import project from "assets/project.jpg";

function HomePage(props) {
  return (
    <>
      <div className={`${style.homepage_parent}`}>
        <Header />
        <div className={`${style.homepage} wrap`}>
          <div className={`${style.company}`}>
            <h5>Các công ty tuyển dụng hàng đầu trên TopCV</h5>
            <div
              className={`${style.list_company} d-flex justify-content-between`}
            >
              <div className={`${style.item_company}`}>
                <a href="\" className="d-flex">
                  <span className={`${style.img_company}`}>
                    <img src={fpt} alt="fpt" />
                  </span>
                  <span
                    className={`${style.content_company} d-flex flex-column`}
                  >
                    <span className={`${style.position_company}`}>
                      Nhân viên kinh doanh
                    </span>
                    <span className={`${style.name_company}`}>
                      Công ty Cổ phần FPT FPT FPT
                    </span>
                  </span>
                </a>
                <p className={`${style.address_company}`}>Hồ Chí Minh</p>
              </div>
              <div className={`${style.item_company}`}>
                <a href="\" className="d-flex">
                  <span className={`${style.img_company}`}>
                    <img src={fpt} alt="fpt" />
                  </span>
                  <span
                    className={`${style.content_company} d-flex flex-column`}
                  >
                    <span className={`${style.position_company}`}>
                      Nhân viên kinh doanh
                    </span>
                    <span className={`${style.name_company}`}>
                      Công ty Cổ phần FPT FPT FPT
                    </span>
                  </span>
                </a>
                <p className={`${style.address_company}`}>Hồ Chí Minh</p>
              </div>
              <div className={`${style.item_company}`}>
                <a href="\" className="d-flex">
                  <span className={`${style.img_company}`}>
                    <img src={fpt} alt="fpt" />
                  </span>
                  <span
                    className={`${style.content_company} d-flex flex-column`}
                  >
                    <span className={`${style.position_company}`}>
                      Nhân viên kinh doanh
                    </span>
                    <span className={`${style.name_company}`}>
                      Công ty Cổ phần FPT FPT FPT
                    </span>
                  </span>
                </a>
                <p className={`${style.address_company}`}>Hồ Chí Minh</p>
              </div>
              <div className={`${style.item_company}`}>
                <a href="\" className="d-flex">
                  <span className={`${style.img_company}`}>
                    <img src={fpt} alt="fpt" />
                  </span>
                  <span
                    className={`${style.content_company} d-flex flex-column`}
                  >
                    <span className={`${style.position_company}`}>
                      Nhân viên kinh doanh
                    </span>
                    <span className={`${style.name_company}`}>
                      Công ty Cổ phần FPT FPT FPT
                    </span>
                  </span>
                </a>
                <p className={`${style.address_company}`}>Hồ Chí Minh</p>
              </div>
            </div>
          </div>
          <div className={`${style.project}`}>
            <h5>Các dự án phù hợp với bạn</h5>
            <div
              className={`${style.list_project} d-flex justify-content-between`}
            >
              <div className={`${style.item_project}`}>
                <a href="\" className="d-flex flex-column">
                  <span className={`${style.img_project}`}>
                    <img src={project} alt="project" />
                  </span>
                  <span className={`${style.language_project}`}>Java</span>
                  <span className={`${style.name_project}`}>
                    Download Source code đồ án tốt nghiệp website sử dụng .Net
                    core 5.0 có Bản đồ dịch bệnh Admin quản trị chi tiết
                  </span>
                  <span className={`${style.price_project}`}>99.000 đ</span>
                  {/* <hr></hr> */}
                  {/* <span className={`${style.person_project}`}>dO dAT Duc</span> */}
                </a>
              </div>
            </div>
          </div>
          <div className={`${style.CV}`}>
            <h5>Các CV ứng viên</h5>
            <div className={`${style.list_CV} d-flex justify-content-between`}>
              <div className={`${style.item_CV}`}>
                <a href="\" className="d-flex">
                  <span className={`${style.img_CV}`}>
                    <img src={fpt} alt="fpt" />
                  </span>
                  <span className={`${style.content_CV} d-flex flex-column`}>
                    <span className={`${style.position_cV}`}>Front-end</span>
                    <span className={`${style.name_CV}`}>Lê Võ Hửu Thái</span>
                  </span>
                </a>
                {/* <p className={`${style.address_company}`}>Hồ Chí Minh</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
