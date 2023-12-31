// import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Gymfinity</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Why Join</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              {/* <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li> */}
              <li>
                <a href="#">Payment Options</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow US</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/" target="blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/" target="blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/home" target="blank">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="nav justify-content-center border-bottom pb-3 mb-3"></div>
          <div>
            <p className="text-center copyright">
              © Gymfinity. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>

    //     <footer class="footer-distributed">

    //         <div class="footer-left">
    //             <h3>Contact<span> Us</span></h3>

    //             <p class="footer-links">
    //                 <a href="#">Email</a>
    //                 <a href="#">Account</a>
    //                 <a href="#">Subcribe</a>
    //                 <a href="#">Blog</a>
    //             </p>

    //             <p class="footer-company-name">Copyright © 2023 All rights reserved</p>
    //         </div>

    //         <div class="footer-center">
    //             <div>
    //                 <i class="fa fa-map-marker"></i>
    //                 <p><span>790 P. Ocampo Sr. St.</span>
    //                 (formerly, Ocampo St, Malate, Manila, 1004 Metro Manila)</p>
    //             </div>

    //             <div>
    //                 <i class="fa fa-phone"></i>
    //                 <p>096763179108</p>
    //             </div>
    //             <div>
    //                 <i class="fa fa-envelope"></i>
    //                 <p><a href="#">Gyminfinity@gmail.com</a></p>
    //             </div>
    //         </div>
    //         <div class="footer-right">
    //             <p class="footer-company-about">
    //                 <span>Social Media</span>
    //                 <strong>Contact me at my Social Media Accounts</strong>

    //             </p>
    //             <div class="footer-icons">
    //                 <a href="#"><i class="fa fa-facebook"></i></a>
    //                 <a href="#"><i class="fa fa-instagram"></i></a>
    //                 <a href="#"><i class="fa fa-twitter"></i></a>
    //             </div>
    //         </div>

    // </footer>
  );
};

export default Footer;
