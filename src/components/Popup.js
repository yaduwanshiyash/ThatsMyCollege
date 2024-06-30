import React from 'react';

const Popup = ({ onClose, children }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{marginTop:'0px'}}>
            <div className={`bg-white md:rounded md:shadow-xl shadow-blue-400 w-full md:w-[60%] relative h-screen md:h-[85vh] overflow-y-auto pt-5`}>
                <button className="absolute md:top-2 top-6 md:right-0 right-0 mt-2 mr-2 text-gray-500" onClick={onClose}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Popup;
