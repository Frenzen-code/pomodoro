import React from 'react'
import Timer from './Timer'


function Modal({setOpenModal, openModal}) {

  function quitModal() {
    setOpenModal(false)
  }

  return (
    <div className="modal-background">
        <div className="modal-container">
           
            <h2>Break Time</h2>
           <Timer setOpenModal={setOpenModal} openModal={openModal}/>
            <div className="modal-row">
          
                <button onClick={quitModal}>Back to work !</button>
                
            </div>
        </div>
    </div>
  )
}

export default Modal