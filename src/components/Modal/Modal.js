import React from "react";
import "./Modal.css";

function Modal({ children, showModal, setShowModal, link }) {
  return (
    <>
      {showModal && (
        <div className="overlay">
          <div className="modal">
            <button onClick={() => setShowModal(false)}>close</button>
            <div className="playTrack">
              <h2>{children}</h2>
              {link === null ? (
                <h3>Cannot play, try another track!</h3>
              ) : (
                <audio controls autoPlay>
                  <source src={link} />
                </audio>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
