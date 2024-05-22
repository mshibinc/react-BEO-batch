import React,{useEffect} from "react";
import axios from "axios";

const Users = () => {
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div></div>;
};

export default Users;
