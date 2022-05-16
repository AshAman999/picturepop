import "./App.css";
import { useEffect, useState } from "react";
import LoadingIndicator from "./components/loading";
import InputContainer from "./components/inputcontainer";
import ImageGallery from "./components/imageGallerys";
import handleSubmit from "./functions/handlesubmit";
import BottomNav from "./components/bottomnav";
import pexels from "./api/pexels";

function App() {
  const [search, setSearch] = useState("Random");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [errorMsg, setError] = useState("");

  useEffect(() => {
    setPageNo(1);
    setLoading(true);
    try {
      pexels
        .get("/search", {
          params: { query: "Random", per_page: 9 },
        })
        .then((response) => {
          setImages(response.data.photos);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <InputContainer
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
        setImages={setImages}
        setLoading={setLoading}
        setError={setError}
        setPageNo={setPageNo}
      />
      <div className="container">
        <div className="row">
          {loading ? <LoadingIndicator /> : <ImageGallery images={images} />}
        </div>
      </div>
      <BottomNav
        pageNo={pageNo}
        setPageNo={setPageNo}
        setLoading={setLoading}
        setImages={setImages}
        setError={setError}
        search={search}
      />
      <div className="footer">Made by Aman 2022</div>
    </div>
  );
}

export default App;
