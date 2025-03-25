import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Julia", "Matheus", "Pablo", "Julia"]);

  const [user, setUsers] = useState([
    { id: 1, name: "Julia", age: 25 },
    { id: 2, name: "Matheus", age: 23 },
    { id: 3, name: "Pablo", age: 27 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) =>
        prevUsers.filter((user) => randomNumber !== user.id)
    );
  };

  return (
    <div>
      {/* 4 - render sem key */}
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      {/* 5 - render com key */}
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      {/* 6 - previous state */}
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
