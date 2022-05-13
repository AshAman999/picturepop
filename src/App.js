import "./App.css";
import Navbar from "./navbar";
import ImageList from "./components/imagesList";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("S.....");
  return (
    <div className="App">
      <h1>{search}</h1>
      <Navbar search={search} setSearch={setSearch} />

      <ImageList
        search={search}
        images={[
          {
            id: 1,
            urls: {
              regular:
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            },
            user: {
              name: "John Doe",
            },
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: 2,
            urls: {
              regular:
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            },
            user: {
              name: "John Doe",
            },
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: 3,
            urls: {
              regular:
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            },
            user: {
              name: "John Doe",
            },
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: 4,
            urls: {
              regular:
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            },
            user: {
              name: "John Doe",
            },
          },
        ]}
      />
    </div>
  );
}

export default App;
