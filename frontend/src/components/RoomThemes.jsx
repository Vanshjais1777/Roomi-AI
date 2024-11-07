import React from 'react';

const RoomThemes = ({ src, text }) => {
    return (
        <div className="flex flex-col items-center p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="w-40 h-28 md:w-24 md:h-24 lg:w-28 lg:h-28 overflow-hidden mb-2">
                <img src={src} alt={text} className="w-full h-full object-cover" />
            </div>
            <div className="text-sm md:text-base font-medium text-gray-700 text-center">
                {text}
            </div>
        </div>
    );
}

export default RoomThemes;
