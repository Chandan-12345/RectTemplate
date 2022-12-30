import React from "react";
import "./footer.css"

import { BsArrowRightShort } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <div className="row" data-aos="fade-up"  data-aos-easing="linear">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="innerfooter  row">
          <div className="bkimage">
          <div className="footer_content">
            <div className="cta-slogan">
              <h3 className="m-0">For previewing layouts and visual?</h3>
            </div>
            <div className="cta-action">
              <label className="form-label screen-reader" for="newsletter">
                {/* Subscribe */}
              </label>
              <div className="has-icon-right">
             <div className="arrow"> <BsArrowRightShort /></div>
                <input
                  id="newsletter"
                  type="email"
                  className="form-input"
                  placeholder="Your best email"
                  value=""
                  
                ></input>

                
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  );
};

export default Footer;
