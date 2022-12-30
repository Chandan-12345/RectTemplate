import React from "react";
import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import "./build.css"
const BuildSection = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="row build_sec">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 header_content">
              <div className="container-xs">
                <h2 className="mt-0 mb-16 build_Heading">
                  Build up the whole picture
                </h2>
                <p className=" build_desc">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum — semper quis
                  lectus nulla at volutpat diam ut venenatis.
                </p>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>

          <div className="row gridColumns">
          <div className="col-md-4" data-aos="fade-right"  data-aos-duration="1000">
            <div className="tiles-item reveal-from-bottom is-revealed">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                 <img src="images/roubust1.svg" alt="robust1" />

                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Robust Workflow</h4>
                  <p className=" text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4" data-aos="fade-right"  data-aos-duration="1500">
            <div className="tiles-item reveal-from-bottom is-revealed">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <img src="images/roubust2.svg" alt="robust" />

                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Robust Workflow</h4>
                  <p className=" text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-4" data-aos="fade-right"  data-aos-duration="2000">
            <div className="tiles-item reveal-from-bottom is-revealed">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <img src="images/robust3.svg" alt="robust" />

                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Robust Workflow</h4>
                  <p className=" text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-4"data-aos="fade-right"  data-aos-duration="1000">
            <div className="tiles-item reveal-from-bottom is-revealed">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <img src="images/robust4.svg" alt="robust" />

                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Robust Workflow</h4>
                  <p className=" text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-4" data-aos="fade-right"  data-aos-duration="1500">
            <div className="tiles-item reveal-from-bottom is-revealed">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <img src="images/robust5.svg" alt="robust" />

                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Robust Workflow</h4>
                  <p className=" text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-4" data-aos="fade-right"  data-aos-duration="2000">
            <div className="tiles-item reveal-from-bottom is-revealed">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <img src="images/robust6.svg" alt="robust" />

                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Robust Workflow</h4>
                  <p className=" text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
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

export default BuildSection;
