import React from "react";
import { useEffect, useState } from "react";
import "./hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const HeroSection = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>



      <div className="row hero-section">
        <div className="col-md-1"></div>
        <div className="hero-inner section-inner col-md-10">
          <div className="row">
            <div class="hero-content">
              <h1
                class="mt-0 mb-16 hero_heading "
                data-aos="fade-down"
                data-aos-duration="800"
              >
                Landing template for{" "}
                <span class="text-color-primary">startups</span>
              </h1>
              <div>
                <p
                  data-aos="fade-down"
                  data-aos-duration="1400"
                  class="m-0 mb-32 reveal-from-bottom is-revealed"
                  data-reveal-delay="400"
                >
                  Our landing page template works on all devices, so you only
                  have
                  <br />
                  to set it up once, and get beautiful results forever.
                </p>
                <div
                  class="reveal-from-bottom is-revealed"
                  data-reveal-delay="600"
                >
                  <div
                    class="button-group"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <a
                      href="https://cruip.com/"
                      class="button button-primary button-wide-mobile gtstart"
                    >
                      Get started
                    </a>

                    <a
                      href="https://github.com/cruip/open-react-template/"
                      class="button button-dark button-wide-mobile gthub"
                    >
                      View on Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row vid_sec"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="col-md-1"></div>
            <div
              className="hero-figure reveal-from-bottom illustration-element-01 is-revealed video_section col-md-10"
              data-reveal-value="20px"
              data-reveal-delay="1500"
            >
          


<div variant="primary" onClick={handleShow}>
<img
                  src="images/video-placeholder.a622fc5d.jpg"
                  alt="video"
                  className="herovideo"
                />
      </div>



      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body className="modalvideo"><iframe
                  width="880"
                  height="530"
                  className="videoreact"
                  
                  src="https://player.vimeo.com/video/174002812"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe></Modal.Body>
        </Modal>


              
            </div>

            <div className="col-md-1"></div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
      
    </>
  );
};

export default HeroSection;
