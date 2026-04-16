import React from "react";

const Banner = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="mt-6 bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
          + Add a Friend
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-800">10</h2>
            <p className="text-gray-500 text-sm mt-1">Total Friends</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-800">3</h2>
            <p className="text-gray-500 text-sm mt-1">On Track</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-800">6</h2>
            <p className="text-gray-500 text-sm mt-1">Need Attention</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-800">12</h2>
            <p className="text-gray-500 text-sm mt-1">
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
