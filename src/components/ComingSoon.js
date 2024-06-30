import Link from 'next/link';
import React from 'react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400">
      <div className="max-w-md w-full px-8 py-12 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Coming Soon!</h2>
        <p className="text-gray-600 mb-8">We&apos;re working on something incredible.</p>

        <p className="mt-4 text-sm text-gray-500">Want to see best college? 
          <Link className='text-blue-500' href={{ pathname: '/colleges', query: { name: 'Engineering' } }}> click here</Link>
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
