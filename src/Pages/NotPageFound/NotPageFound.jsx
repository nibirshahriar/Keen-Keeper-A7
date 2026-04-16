import React from "react";

const NotPageFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">
          404
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Oops! Page not found
        </h2>
        <p className="mt-3 text-gray-400 max-w-md mx-auto">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition duration-300"></span>
            <span className="relative">Go Home</span>
          </a>
        </div>
        <div className="mt-10 flex justify-center gap-2">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-150"></span>
          <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-300"></span>
        </div>
      </div>
    </div>
  );
};

export default NotPageFound;
