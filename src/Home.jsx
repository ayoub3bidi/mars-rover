import useAxios from "axios-hooks";
import { useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import DataModal from "./components/DataModal";
import ImageCard from "./components/ImageCard";

export function Home({}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [sol, setSol] = useState(100);
  const [page, setPage] = useState(1);
  const URI = "https://api.nasa.gov/mars-photos/api/v1/rovers"
  const API_KEY = "haqV5FjexA2U1yByd7begfVd4s8vvmhZywGmQ7W1"

  const [{ data, loading, error}, refetch] = useAxios(`${URI}/curiosity/photos?sol=${sol}&page=${page}&api_key=${API_KEY}`)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
    <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="../public/mars.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Mars logo"
            />{' '}
            Mars Rover
          </Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
    <Container>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3 mt-2">
      {data.photos.map((photo, index) => (
            <Col key={index}>
            <ImageCard 
              handleShow={handleShow}
              earth_date={photo.earth_date}
              img_src={photo.img_src}
            />
            </Col>
        ))}
      </Row>
      <DataModal
        show={show}
        handleClose={handleClose}
        photoId="21"
        img_src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00100/opgs/edr/fcam/FRA_406374643EDR_F0050178FHAZ00301M_.JPG"
        cameraName="qdsfqsdf"
        landing_date="2022-11-11"
        launch_date="2022-11-11"
        status="active"
      />
    </Container>
    </>
  )
}