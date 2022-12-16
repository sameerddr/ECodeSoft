import axios from "axios";
import React, { useState, useEffect } from "react";

import "./Content.css";

const Content = () => {
  const url = "https://reqres.in/api/users?page=2";

  const [data, setdata] = useState([]);

  const getApi = async () => {
    const response = await axios.get(url);
    console.log(response.data.data);
    setdata(response.data.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      {data?.map((item) => (
        <div className="data">
          <h3>Name -{item.first_name}</h3>
          <h4>Email - {item.email}</h4>
          <img src={item.avatar} alt="error" />
        </div>
      ))}
    </>
  );
};

export default Content;
