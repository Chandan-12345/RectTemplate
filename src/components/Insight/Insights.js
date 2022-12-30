import React from "react";
import "./insight.css";

const Insights = () => {
  return (
    <>
      <div className="workhr">
        <hr />
      </div>
      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="container-xs">
                <h2 className="mt-0 mb-16 insightHeading">
                  Workflow that just works
                </h2>
                <p className=" insDesc">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum — semper quis
                  lectus nulla at volutpat diam ut venenatis.
                </p>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
          className
          <div className="row splitItems" >
            <div className="col-md-6 all_text" data-aos="fade-right" 
     data-aos-duration="500">
              <div className="split-item" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8 lightwork">
                  Lightning fast workflow
                </div>
                <h3 className="mt-0 mb-12 subHeading">Data-driven insights</h3>
                <p className=" insightDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="500">
              <div
                className="split-item-image center-content-mobile reveal-from-bottom split-item-image-fill is-revealed"
                data-reveal-container=".split-item"
              >
                <img
                  src="images/insigh1.png"
                  alt="insightImage"
                  className="insightImage"
                />
              </div>
            </div>
          </div>
          <div className="row splitItems" >
          
            <div className="col-md-6" data-aos="fade-up" 
     data-aos-duration="500">
              <div
                className="split-item-image center-content-mobile reveal-from-bottom split-item-image-fill is-revealed"
                data-reveal-container=".split-item"
              >
                <img
                  src="images/insigh1.png"
                  alt="insightImage"
                  className="insightImage"
                />
              </div>
            </div>

            <div className="col-md-6 all_text" data-aos="fade-left" 
     data-aos-duration="500">
              <div className="split-item" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8 lightwork">
                  Lightning fast workflow
                </div>
                <h3 className="mt-0 mb-12 subHeading">Data-driven insights</h3>
                <p className="insightDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className="row splitItems" >
            <div className="col-md-6 all_text" data-aos="fade-right"
     data-aos-duration="500">
              <div className="split-item" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8 lightwork">
                  Lightning fast workflow
                </div>
                <h3 className="mt-0 mb-12 subHeading">Data-driven insights</h3>
                <p className="insightDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up"
     data-aos-duration="500">
              <div
                className="split-item-image center-content-mobile reveal-from-bottom split-item-image-fill is-revealed"
                data-reveal-container=".split-item"
              >
                <img
                  src="images/insigh1.png"
                  alt="insightImage"
                  className="insightImage"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  );
};

export default Insights;
