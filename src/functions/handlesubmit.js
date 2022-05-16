import pexels from "../api/pexels";
function handleSubmit(props) {
  console.log(props.search);
  props.setPageNo(1);
  props.setLoading(true);
  try {
    pexels
      .get("/search", {
        params: { query: props.search, per_page: 9 },
      })
      .then((response) => {
        props.setImages(response.data.photos);
        props.setLoading(false);
      });
  } catch (error) {
    console.log(error);
    props.setError(error);
    props.setLoading(false);
  }
}

export default handleSubmit;
