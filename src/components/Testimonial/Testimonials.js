import React from "react";
import "./Testimonials.css";

const Testimonial = () => {
  return (
    <>

    <div className="testhr"><hr /></div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="row">
                <div className="testCont">
                  <div class="container-xs">
                    <h2 class="mt-0 mb-16 Testheading">
                      Customer testimonials
                    </h2>
                    <p class=" testDesc">
                      Vitae aliquet nec ullamcorper sit amet risus nullam eget
                      felis semper quis lectus nulla at volutpat diam ut
                      venenatis tellus—in ornare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>

          <div className="row">
            <div className="col-md-4 " data-aos="fade-left"
     data-aos-duration="1000">
            <div className="bkcolor">
              <div
                class="tiles-item reveal-from-right is-revealed "
                data-reveal-delay="200" 
              >
                <div class="tiles-item-inner">
                  <div class="testimonial-item-content">
                    <div className="testImage">
                      <img src="images/download.svg" />
                    </div>
                    <p class="text-sm mb-0 testDescription">
                      — Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                      cillum dolore eu fugiat.
                    </p>
                  </div>
                  <div className="apphr"><hr /></div>
                  <div class="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span class="testimonial-item-name text-color-high">
                      Roman Level
                    </span>
                    <span class="text-color-low"> / </span>
                    <span class="testimonial-item-link">
                   
                      <a className="appname" href="#0">AppName</a>
                    </span>
                  </div>
                </div>
              </div>
              </div>
            </div>

            <div className="col-md-4 "  data-aos="fade-up"
   >
            <div className="bkcolor">
              <div
                class="tiles-item reveal-from-right is-revealed"
                data-reveal-delay="200"
              >
                <div class="tiles-item-inner">
                  <div class="testimonial-item-content">
                    <div className="testImage">
                      <img src="images/download.svg" />
                    </div>
                    <p class="text-sm mb-0 testDescription">
                      — Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                      cillum dolore eu fugiat.
                    </p>
                  </div>
                  <div className="apphr"><hr /></div>
                  <div class="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span class="testimonial-item-name text-color-high">
                      Roman Level
                    </span>
                    <span class="text-color-low"> / </span>
                    <span class="testimonial-item-link">
                   
                      <a className="appname" href="#0">AppName</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
</div>
            <div className="col-md-4 " data-aos="fade-right"
     data-aos-duration="1000">
            <div className="bkcolor">
              <div
                class="tiles-item reveal-from-right is-revealed"
                data-reveal-delay="200" 
              >
                <div class="tiles-item-inner">
                  <div class="testimonial-item-content">
                    <div className="testImage">
                      <img src="images/download.svg" />
                    </div>
                    <p class="text-sm mb-0 testDescription">
                      — Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                      cillum dolore eu fugiat.
                    </p>
                  </div>
                  <div className="apphr"><hr /></div>
                  <div class="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                    <span class="testimonial-item-name text-color-high">
                      Roman Level
                    </span>
                    <span class="text-color-low"> / </span>
                    <span class="testimonial-item-link">
                   
                      <a className="appname" href="#0">AppName</a>
                    </span>
                  </div>
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

export default Testimonial;
