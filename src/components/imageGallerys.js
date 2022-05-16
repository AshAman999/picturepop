import { Card } from "react-bootstrap";

const ImageGallery = ({ images }) => {
  return images.map((result) => (
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
  ));
};
export default ImageGallery;