import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {}, []);

  // async function getUserInfo(){
  //   const data = await();
  // }

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name : {name}</h2>
      <h3>Location : Greater Noida</h3>
      <h4>Contact : @r4hul._.1</h4>
    </div>
  );
};

export default User;
