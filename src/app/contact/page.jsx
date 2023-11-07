import React from 'react';

const ComingSoonCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-gray-600 mb-6">We're working on something amazing! Stay tuned for updates.</p>
        <div className="flex justify-center">
          {/* <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 cursor-pointer">
            Subscribe
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ComingSoonCard;
