import React from 'react';

const ProgressBar = ({progress}) => {
    return (
        <div className="flex items-center justify-center mb-10">
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-black h-2 text-xs text-white text-center leading-4 rounded-full" style={{ width: `${progress}%` }}>
                    </div>
                </div>
        </div>
    );
};
export default ProgressBar;