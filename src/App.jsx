import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      // .then((json) => console.log(json));
      .then((data) => setRecords(data))
      .catch((error) => console.error(error));
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        "loading ..."
      ) : (
        <div className="App">
          {loading ? (
            "Loading..."
          ) : (
            <div className="grid">
              {records &&
                records.map((item) => (
                  <div className="item" key={item.id}>
                    <p>UserID : {item.id}</p>
                    <p>Title : {item.title}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
