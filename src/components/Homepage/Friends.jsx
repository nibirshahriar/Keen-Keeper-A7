import React from "react";
import UseFriends from "../Hook/UseFriends";
import FriendsCard from "../UI/FriendsCard";
import { HashLoader } from "react-spinners";

const Friends = () => {
  const { friends, loading } = UseFriends();

  return (
    <div className="bg-gray-50">
      <div className="bg-gray-50 max-w-6xl mx-auto min-h-screen px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Your Friends</h2>

        {loading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <HashLoader color="#ad46ff" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <FriendsCard friends={friends} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Friends;
