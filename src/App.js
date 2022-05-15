import "./App.css";
import { useEffect, useState } from "react";
import pexels from "./api/pexels";
import { Card } from "react-bootstrap";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

function App() {
  const [search, setSearch] = useState("Random");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  const [errorMsg, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    try {
      pexels
        .get("/search", {
          params: { query: "Random", per_page: 9 },
        })
        .then((response) => {
          // console.log(response);
          setImages(response.data.photos);
          setLoading(false);
          // console.log(response.data.photos);
        });
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }, []);
  function handleSubmit(event) {
    console.log(search);
    setPageNo(1);
    event.preventDefault();
    setLoading(true);

    try {
      pexels
        .get("/search", {
          params: { query: search, per_page: 9 },
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
  }
  function handleCategoryClick() {
    setPageNo(1);
    setLoading(true);
    try {
      pexels
        .get("/search", {
          params: { query: search, per_page: 9 },
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
  }

  return (
    <div>
      <div className="search-box">
        <form onSubmit={handleSubmit}>
          <div className="card-header main-search">
            <div className="ml-auto">
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="AutoFocus form-control"
                placeholder="Search for images..."
                type="text"
              />
            </div>
            <div className="ml-auto submit-btn">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary search-btn"
              />
            </div>
            {/* <div className="col-12 col-md-3 col-xl-3">  
              <input onChange={noOfPics} name="eryNumber" className="AutoFocus form-control" placeholder="No of Images"  
                  type="text" />  
          </div>   */}
          </div>
        </form>
      </div>
      <div className="categories">
        <div
          className="btn btn-primary ctgbutton"
          onClick={async () => {
            setSearch("Cat");
            handleCategoryClick();
          }}
        >
          Cat
        </div>

        <div
          className="btn btn-primary ctgbutton"
          onClick={() => {
            setSearch("Bike");
            handleCategoryClick();
          }}
        >
          Bike
        </div>

        <div
          className="btn btn-primary ctgbutton"
          onClick={() => {
            setSearch("Art");
            handleCategoryClick();
          }}
        >
          Art
        </div>

        <div
          className="btn btn-primary ctgbutton"
          onClick={() => {
            setSearch("Food");
            handleCategoryClick();
          }}
        >
          Food
        </div>
        <div
          className="btn btn-primary ctgbutton"
          onClick={() => {
            setSearch("Sea");
            handleCategoryClick();
          }}
        >
          Sea
        </div>
      </div>
      <div className="container">
        <div className="row">
          {loading ? (
            // Loading Indicator
            <div className="col-12 col-md-12 col-xl-12 loading">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          ) : (
            images.map((result) => (
              <div className="col-sm-4" key={result.id}>
                <Card
                  style={{
                    marginTop: "10px",
                    backgroundColor: "aliceblue",
                  }}
                  onClick={() => {
                    window.open(result.src.original, "_blank");
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={result.src.landscape}
                    alt={result.photographer}
                  />
                  <Card.Body>
                    <h5 className="card-desciption">
                      Author : <small>{result.photographer}</small>
                    </h5>
                  </Card.Body>
                </Card>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="bottom-btn">
        <button
          className="btn btn-primary previous-page-btn"
          style={{ marginRight: "30px" }}
          onClick={() => {
            if (pageNo === 1) return;
            else {
              let pg = pageNo - 1;
              setPageNo(pg);
              setLoading(true);

              try {
                console.log(pageNo);
                pexels
                  .get("/search", {
                    params: { query: { search }, per_page: 9, page: pageNo },
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
            }
          }}
        >
          <FiChevronsLeft />
        </button>
        <div>Page {pageNo}</div>
        <button
          className="btn btn-primary next-page-btn"
          style={{ marginLeft: "30px" }}
          onClick={() => {
            let pg = pageNo + 1;
            setPageNo(pg);
            try {
              console.log(pageNo);
              setLoading(true);

              pexels
                .get("/search", {
                  params: { query: { search }, per_page: 9, page: pageNo },
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
          }}
        >
          <FiChevronsRight />
        </button>
      </div>
    </div>
  );
}

export default App;
