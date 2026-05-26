import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/users")
      .then((res) => res.data)
      .then((data) => setMessage(data.users));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <h1>Hello From docker</h1>
      <h2>{message.map((user) => <p key={user.id}>{user.name}</p>) }</h2>
    </div>
  );
}

export default App;