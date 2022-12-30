import React from "react";
import "./icons.css";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
const IconSection = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row">
            <div className="inner_footer">
              <div className="img_foot">
                <img
                  src="images/logo.2810a88b.svg"
                  alt="footImg"
                  className="footImg"
                />
              </div>

              <div className="Icons">
               <ul className="socialIcons">
                <li> <GrFacebookOption /></li>
                <li>  <BsTwitter /></li>
                <li> <FiInstagram /></li>
               </ul>
               
                
              </div>
            </div>

            <div class="footer-bottom">
            <div class="footer-copyright">
                Made by <a href="https://cruip.com">Cruip</a>. All right
                reserved
              </div>

              <nav class="footer-nav">
                <ul class="list-reset">
                  <li>
                    <a className="Iconscolor"  href="/#0">Contact</a>
                  </li>
                  <li>
                    <a className="Iconscolor" href="/#0">About us</a>
                  </li>
                  <li>
                    <a className="Iconscolor" href="/#0">FAQ's</a>
                  </li>
                  <li>
                    <a className="Iconscolor" href="/#0">Support</a>
                  </li>
                </ul>
              </nav>
            
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  );
};

export default IconSection;
