import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setdData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/swasthikg73")
  //       .then((res) => res.json())
  //       .then((data) => setdData(data));
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
      Github
      <img src={data?.avatar_url} alt="profile" width={300} />
    </div>
  );
};

export default Github;

export const loadData = async () => {
  const res = await fetch("https://api.github.com/users/swasthikg73");
  return res.json();
};
