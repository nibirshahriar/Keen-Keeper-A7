import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendsContext } from "../../context/FriendsContext";

const Stats = () => {
  const { extFriends } = useContext(FriendsContext);

  const callCount = extFriends.filter((item) => item.action === "Call").length;
  const textCount = extFriends.filter((item) => item.action === "Text").length;
  const videoCount = extFriends.filter(
    (item) => item.action === "Video",
  ).length;

  const data = [
    { name: "Text", value: textCount, fill: "#7c3aed" },
    { name: "Call", value: callCount, fill: "#1f4d3b" },
    { name: "Video", value: videoCount, fill: "#22c55e" },
  ];

  return (
    <div className="px-4 bg-gray-50 py-10 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bold text-3xl mb-8 text-gray-800">
          Friendship Analytics
        </h2>

        <div className="p-8 rounded-xl border border-gray-200 bg-white shadow-sm">
          <h3 className="text-sm text-gray-500 mb-6">By Interaction Type</h3>

          {extFriends.length === 0 ? (
            <p className="text-center text-gray-500">No data yet</p>
          ) : (
            <PieChart width={300} height={300} style={{ margin: "auto" }}>
              <Pie
                data={data}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={6}
                cornerRadius={10}
                dataKey="value"
              />
              <Tooltip />
              <Legend />
            </PieChart>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
