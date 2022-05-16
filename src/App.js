import "./App.css";
import { useEffect, useState } from "react";
import LoadingIndicator from "./components/loading";
import InputContainer from "./components/inputcontainer";
import ImageGallery from "./components/imageGallerys";
import handleSubmit from "./functions/handlesubmit";
import BottomNav from "./components/bottomnav";

function App() {
  const [search, setSearch] = useState("Random");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [errorMsg, setError] = useState("");

  useEffect(() => {
    handleSubmit(search, setImages, setLoading, setError, setPageNo, setSearch);
  }, [search]);

  return (
    <div>
      <InputContainer
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
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
