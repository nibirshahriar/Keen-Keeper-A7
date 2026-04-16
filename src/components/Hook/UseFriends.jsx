import React, { useEffect, useState } from "react";

const UseFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const friends = await res.json();

      setFriends(friends);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { friends, loading };
};

export default UseFriends;
