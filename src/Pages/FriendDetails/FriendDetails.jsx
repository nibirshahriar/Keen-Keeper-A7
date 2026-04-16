import React from "react";
import { useParams } from "react-router";
import UseFriends from "../../components/Hook/UseFriends";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineTextsms, MdWifiCalling3 } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = UseFriends();

  const friend = friends.find((f) => String(f.id) === id);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!friend) {
    return <div className="text-center mt-10">Friend not found</div>;
  }

  const statusStyles = {
    overdue: "bg-red-500 text-white",
    "on-track": "bg-green-700 text-white",
    "almost-due": "bg-yellow-500 text-white",
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 rounded-full mx-auto object-cover"
            />

            <h2 className="text-lg font-semibold mt-3 text-gray-800">
              {friend.name}
            </h2>

            <span
              className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${statusStyles[friend.status]}`}
            >
              {friend.status === "overdue"
                ? "Overdue"
                : friend.status === "on-track"
                  ? "On Track"
                  : "Almost Due"}
            </span>

            <div className="mt-2 flex justify-center gap-2 flex-wrap">
              {friend.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-500 mt-4 italic text-sm">"{friend.bio}"</p>

            <p className="text-gray-400 text-xs mt-1">Preferred: email</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-3 flex items-center justify-center gap-2 hover:bg-gray-50 cursor-pointer">
            <HiOutlineBellSnooze className="text-lg" />
            <span>Snooze 2 Weeks</span>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-3 flex items-center justify-center gap-2 hover:bg-gray-50 cursor-pointer">
            <FiArchive className="text-lg" />
            <span>Archive</span>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-3 flex items-center justify-center gap-2 text-red-500 hover:bg-red-50 cursor-pointer">
            <RiDeleteBin5Line className="text-lg" />
            <span>Delete</span>
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <h2 className="text-2xl font-bold text-[#244D3F]">
                {friend.days_since_contact}
              </h2>
              <p className="text-gray-400 text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <h2 className="text-2xl font-bold text-[#244D3F]">
                {friend.goal}
              </h2>
              <p className="text-gray-400 text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <h2 className="text-lg font-bold text-[#244D3F]">
                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </h2>
              <p className="text-gray-400 text-sm">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-[#244D3F]">
                Relationship Goal
              </h3>
              <button className="text-sm px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">
                Edit
              </button>
            </div>

            <p className="text-gray-500 mt-2 text-sm">
              Connect every{" "}
              <span className="font-bold text-gray-800">
                {friend.goal} days
              </span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-[#244D3F] mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">
              <button className="rounded-xl py-6 bg-gray-50 hover:bg-gray-100 text-sm flex flex-col items-center">
                <MdWifiCalling3 className="text-xl" />
                <p className="mt-2">Call</p>
              </button>

              <button className="rounded-xl py-6 bg-gray-50 hover:bg-gray-100 text-sm flex flex-col items-center">
                <MdOutlineTextsms className="text-xl" />
                <p className="mt-2">Text</p>
              </button>

              <button className="rounded-xl py-6 bg-gray-50 hover:bg-gray-100 text-sm flex flex-col items-center">
                <IoMdVideocam className="text-xl" />
                <p className="mt-2">Video</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
