import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import pexels from "../api/pexels";

function NavButton(props) {
  return (
    <button
      className="btn btn-primary"
      style={{ marginRight: "30px", marginLeft: "30px" }}
      onClick={() => {
        if (props.pageNo === 1 && props.left === true) return;
        else {
          props.left === true
            ? props.setPageNo(props.pageNo - 1)
            : props.setPageNo(props.pageNo + 1);
          props.setLoading(true);
          let searche = props.search;
          try {
            console.log(props.pageNo);
            pexels
              .get("/search", {
                params: { query: { searche }, per_page: 9, page: props.pageNo },
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
      }}
    >
      {props.left === true ? <FiChevronsLeft /> : <FiChevronsRight />}
    </button>
  );
}

export default NavButton;
