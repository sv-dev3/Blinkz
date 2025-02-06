import React, { useState } from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Modal = ({ isOpen, setIsOpen, url = 'test' }) => {
  const [copied, setCopied] = useState(false); // State to manage the copied status

  const closeModal = (e) => {
    if (e.target.id === 'overlay' || e.target.id === 'closeButton') {
      setIsOpen(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true); // Update the state when URL is copied
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
        <div className="relative bg-white p-6 sm:p-10 rounded-3xl  w-[350px] sm:w-[500px] min-h-[100px]">
          <button
            id="closeButton"
            className="absolute top-0 right-0 mt-2 mr-4 text-3xl font-bold text-gray-600"
            onClick={closeModal}
          >
            &times;
          </button>
          <h2 className="text-lg md:text-xl font-outfitSemiBold mb-4 sm:mb-7">Share this Product</h2>
          <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 justify-between items-center relative">
            <div className="w-full text-base text-ellipsis overflow-hidden p-3 sm:p-4 rounded-lg font-outfitRegular text-gray-800 border border-gray-200 cursor-pointer" onClick={copyToClipboard}>
              {url}
            </div>
            <button
              onClick={copyToClipboard}
              className="ml-4 bg-black text-white font-outfitRegular p-2 sm:p-4 rounded-lg text-base absolute right-0 bottom-0 top-0"
            >
              {copied ? 'COPIED' : 'Copy'} {/* Toggle button text based on copied state */}
            </button>
          </div>
          <div className="flex gap-x-4 mt-4">
            <Facebook className='text-gray-800' />
            <Instagram className='text-gray-800'/>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
