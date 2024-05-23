import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUserdata(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (isLoading ? <Loading /> : <div>
    {userdata.map(itm => (
      <div key={itm.id}>
        <h6>{itm.name}</h6>
      </div>
    ))}
  </div>);
};

export default Users;
