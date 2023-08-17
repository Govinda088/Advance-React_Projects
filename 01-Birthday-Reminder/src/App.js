import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [user, setValue] = useState(data);

  return (
    <main>
      <section className="container">
        <List></List>
      </section>
    </main>
  );
}

export default App;
