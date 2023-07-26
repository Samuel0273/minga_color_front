import React from "react";

const ModalOverlay = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-30 z-50">
      {/* modal content*/}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {/*existing modal content*/}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default ModalOverlay;
