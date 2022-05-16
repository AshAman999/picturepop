import pexels from "../api/pexels";
function handleSubmit(
  search,
  setImages,
  setLoading,
  setError,
  setPageNo,
  setSearch,
  event
) {
  console.log(search);
  setPageNo(1);
  // event.preventDefault();
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

export default handleSubmit;
