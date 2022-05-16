import NavButton from "./navigatebutton";
function BottomNav(props) {
  return (
    <div className="bottom-btn">
      <NavButton
        left={true}
        pageNo={props.pageNo}
        setPageNo={props.setPageNo}
        setLoading={props.setLoading}
        setImages={props.setImages}
        setError={props.setError}
        search={props.search}
      />

      <div>Page {props.pageNo}</div>
      <NavButton
        left={false}
        pageNo={props.pageNo}
        setPageNo={props.setPageNo}
        setLoading={props.setLoading}
        setImages={props.setImages}
        setError={props.setError}
        search={props.search}
      />
    </div>
  );
}

export default BottomNav;
