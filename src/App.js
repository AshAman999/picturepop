import "./App.css";
import Navbar from "./navbar";
import ImageList from "./components/imagesList";
import { useState } from "react";
import pexels from "./api/pexels";

function App() {
  const [search, setSearch] = useState("Search for images...");
  const [images, setImages] = useState([]);
  function handleSubmit(e) {
    console.log(search);
    // search.preventDefault();
    // try {
    //   pexels
    //     .get("/search", {
    //       params: { query: search, per_page: 5 },
    //     })
    //     .then((response) => {
    //       console.log(response);
    //       setImages(response.data.photos);
    //       console.log(response.data.photos);
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
  }
  return (
    <div className="App">
      <h1>{search}</h1>
      <Navbar
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
      />

      <ImageList search={search} images={[images]} />
    </div>
  );
}

export default App;
