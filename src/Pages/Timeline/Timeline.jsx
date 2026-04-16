import React, { useContext, useState } from "react";
import { FriendsContext } from "../../context/FriendsContext";
import { MdWifiCalling3, MdOutlineTextsms } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";

const Timeline = () => {
  const { extFriends } = useContext(FriendsContext);
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? extFriends
      : extFriends.filter((item) => item.action === filter);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Timeline</h2>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-6 px-3 py-2 rounded-lg bg-gray-100 text-sm"
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>

        {!extFriends || extFriends.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No activity yet</div>
        ) : filteredData.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No {filter} activity
          </div>
        ) : (
          <div className="space-y-3">
            {[...filteredData].reverse().map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg px-4 py-3 flex items-center gap-4 shadow-sm"
              >
                <div className="text-xl text-gray-600">
                  {item.action === "Call" && <MdWifiCalling3 />}
                  {item.action === "Text" && <MdOutlineTextsms />}
                  {item.action === "Video" && <IoMdVideocam />}
                </div>

                <div>
                  <p className="text-sm text-gray-800">
                    <span className="font-semibold">{item.action}</span> with{" "}
                    <span className="font-medium">{item.friend.name}</span>
                  </p>

                  <p className="text-xs text-gray-400">
                    {new Date(item.time).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
