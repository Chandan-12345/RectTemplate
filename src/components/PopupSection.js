import React from "react";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";


const PopupSection = () =>{
    const [modal, setModal] = useState(false);
  

  const openModal = () => {
    setModal(!modal);
  };

  

  return (
    <div className="App">
      <button onClick={openModal} className="">
      <img
                  src="images/video-placeholder.a622fc5d.jpg"
                  alt="video"
                  className="herovideo"
                />
        {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                />
                <div className="modal__video-align">
                 
                  <iframe
                  width="560"
                  height="315"
                  src="https://player.vimeo.com/video/174002812"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </button>
    </div>
  );
}


export default PopupSection