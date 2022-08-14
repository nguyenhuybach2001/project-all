import React from "react";

export default function Header() {
  return (
    <div className="l-nav">
      <div className="c-header">
        <div className="container">
          <div className="c-header-inner">
            <div className="c-logo">
              <a href="/">
                <img src="./static/images/logo.png" alt="logo" />
              </a>
            </div>
            <button className="c-menu-expand js-menu-expand" type="button">
              <span />
            </button>
            <div className="c-header-right">
              <div className="c-header-admin">
                <div className="c-admin-nologin">
                  <ul>
                    <li className="li-button">
                      <a href="#">Bắt đầu ngay</a>
                    </li>
                    <li>
                      <div className="c-user-guest">
                        <ul>
                          <li>
                            <a href="register-step1.html">Đăng ký</a>
                          </li>
                          <li>
                            <a href="login.html">Đăng nhập</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="c-menu">
                <ul>
                  <li>
                    <a href="/">Trang chủ</a>
                  </li>
                  <li>
                    <a href="#">Thử thách</a>
                  </li>
                  <li className="active">
                    <a href="project-featured.html">Dự án</a>
                  </li>
                  <li>
                    <a href="knowledge.html">Kiến thức</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
