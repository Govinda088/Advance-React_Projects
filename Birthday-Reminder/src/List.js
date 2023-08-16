import { useState } from "react";
import data from "./data";

const List = () => {
  const [user, setUser] = useState(data);
  return (
    <>
      <h3>{user.length} Birthdays Today</h3>
      {user.map(({ name, age, image, id }) => {
        return (
          <div key={id} className="person">
            <img src={image} alt={name} />

            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </div>
        );
      })}
      <button onClick={() => setUser([])}>Clear All</button>
    </>
  );
};

export default List;
