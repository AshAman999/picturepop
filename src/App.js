import "./App.css";
import Navbar from "./navbar";
import { useState } from "react";
import pexels from "./api/pexels";
import ImageBox from "./components/imagebox";
import { Card } from "react-bootstrap";

function App() {
  const [search, setSearch] = useState("Search for images...");
  const [images, setImages] = useState([]);
  function handleSubmit() {
    // console.log(search);
    // search.preventDefault();
    try {
      pexels
        .get("/search", {
          params: { query: search, per_page: 5 },
        })
        .then((response) => {
          // console.log(response);
          setImages(response.data.photos);
          // console.log(response.data.photos);
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <Navbar
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
      />

      {images.map((result) => (
        <div className="col-sm-4">
          <Card style={{ "margin-top": "10px" }}>
            <Card.Img
              variant="top"
              src={result.src.small}
              alt={result.photographer}
            />
            <Card.Body>
              <h5 className="card-title">
                Author : <small>{result.photographer}</small>
              </h5>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default App;
