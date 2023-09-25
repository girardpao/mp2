import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
 
    <footer class="footer-distributed">

        <div class="footer-left">
            <h3>Contact<span> Me</span></h3>

            <p class="footer-links">
                <a href="#">Email</a>
                <a href="#">Account</a>
                <a href="#">Subcribe</a>
                <a href="#">Blog</a>
            </p>

            <p class="footer-company-name">Copyright © 2023 All rights reserved</p>
        </div>

        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p><span>Tuguegarao City</span>
                   Cagayan </p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <p>096763179108</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="#">awesomeakatsuki@gmail.com</a></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>Social Media</span>
                <strong>Contact me at my Social Media Accounts</strong>
                
            </p>
            <div class="footer-icons">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-youtube"></i></a>
            </div>
        </div>
    
</footer> 
  )
}

export default Footer;