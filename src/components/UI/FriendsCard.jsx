import React from "react";

const FriendsCard = ({ friends }) => {
  return (
    <>
      {friends.map((friend) => (
        <div
          key={friend.id}
          className="bg-white rounded-xl shadow-md p-6 text-center"
        >
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-20 h-20 rounded-full mx-auto object-cover"
          />

          <h2 className="text-lg font-semibold text-gray-800 mt-4">
            {friend.name}
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            {friend.days_since_contact}d ago
          </p>

          <div className="mt-3 flex justify-center gap-2 flex-wrap">
            {friend.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-3">
            <span
              className={`text-xs  px-3 py-1 rounded-full ${
                friend.status === "overdue"
                  ? "bg-red-500 text-white"
                  : friend.status === "on-track"
                    ? "bg-green-700 text-white"
                    : friend.status === "almost-due"
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-100 text-white"
              }`}
            >
              {friend.status === "overdue"
                ? "Overdue"
                : friend.status === "on-track"
                  ? "On Track"
                  : friend.status === "almost-due"
                    ? "Almost Due"
                    : friend.status}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default FriendsCard;
