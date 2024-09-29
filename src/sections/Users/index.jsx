import { useState, useEffect } from "react";

import UserList from "./components/UsersList"

export default function UsersSection() {
  const userName = "JHalvor";
  const url = `https://boolean-uk-api-server.fly.dev/${userName}/contact`;
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setUsersData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList userList={usersData}/>
      </div>
    </section>
  )
}