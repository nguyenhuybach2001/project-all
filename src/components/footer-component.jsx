import React from "react";

export default function Footer() {
  return (
    <div className="l-footer">
      <div className="container">
        <div className="c-footer-main">
          <div className="row">
            <div className="col-lg-5 mb-3 mb-lg-0">
              <div className="c-footer-logo">
                <a href="#">
                  <img src="./static/images/logo.png" alt="logo" />
                </a>
              </div>
              <div className="c-footer-desc">
                <p>
                  The best medicines &amp; biggest brands within 30 minutes at
                  your home. Experience the power of MedCartel today.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-4">
                  <div className="c-footer-label">Company</div>
                  <div className="c-footer-content">
                    <div className="c-footer-list">
                      <ul>
                        <li>
                          <a href="#">About us</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Terms &amp; Conditions</a>
                        </li>
                        <li>
                          <a href="#">Rider</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="c-footer-label">More Links</div>
                  <div className="c-footer-content">
                    <div className="c-footer-list">
                      <ul>
                        <li>
                          <a href="#">About us</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Terms &amp; Conditions</a>
                        </li>
                        <li>
                          <a href="#">Rider</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="c-footer-label">Contact Details</div>
                  <div className="c-footer-content">
                    <p className="p-icon">
                      <i className="icon20-phone-white" />
                      +31 62 19 22 705
                      <br />7 Days - 8am - 10pm
                    </p>
                    <p className="p-icon">
                      <i className="icon20-email-white" />
                      info@medcartel.com
                    </p>
                    <br />
                    <div
                      className="g-ytsubscribe"
                      data-channel="GoogleDevelopers"
                      data-layout="full"
                      data-count="default"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-footer-bottom">
          <div className="c-copyright">
            © 2021 Codekitten, All Rights Reserved
          </div>
          <div className="c-footer-social">
            <a href="#">
              <i className="icon16-facebook-white" />
            </a>
          </div>
        </div>
      </div>
      {/*end container*/}
    </div>
  );
}
