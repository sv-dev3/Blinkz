import React from 'react';

const Modal = ({ isOpen, setIsOpen, url='test' }) => {
  const closeModal = (e) => {
    if (e.target.id === 'overlay' || e.target.id === 'closeButton') {
      setIsOpen(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert('URL copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    isOpen && (
      <div
        id="overlay"
        className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center"
        onClick={closeModal}
      >
        <div className="relative bg-white p-4 rounded-lg w-[350px] sm:w-[400px] min-h-[150px]">
          <button
            id="closeButton"
            className="absolute top-0 right-0 mt-3 mr-4 text-xl font-bold text-gray-600"
            onClick={closeModal}
          >
            &times;
          </button>
          <h2 className="text-lg md:text-xl font-outfitSemiBold mb-4 sm:mb-7">Share this Product</h2>
          <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 justify-between items-center">
            <div className="flex-grow text-sm p-4 flex-1 rounded-lg font-outfitRegular text-black break-words overflow-hidden border border-gray-200 cursor-pointer" style={{ wordWrap: 'break-word' }}  onClick={copyToClipboard}>
              {url}
            </div>
            <button
              onClick={copyToClipboard}
              className="ml-4 bg-black text-white p-2 sm:p-4  rounded-lg text-sm"
            >
              Copy URL
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal