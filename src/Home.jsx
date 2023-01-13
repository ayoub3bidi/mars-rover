import useAxios from "axios-hooks";
import { useState } from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import DataModal from "./components/DataModal";
import Footer from "./components/Footer";
import ImageCard from "./components/ImageCard";
import NavBar from "./components/NavBar";
import SolInput from "./components/SolInput";

export function Home({}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [sol, setSol] = useState(100);
  const [page, setPage] = useState(1);
  const [photoIndex, setPhotoIndex] = useState(0);
  const numberOfpages = 8; //? did a fixed number since the API doesn't provide the number of pages

  const URI = "https://api.nasa.gov/mars-photos/api/v1/rovers"
  // const URI = process.env.URI
  const API_KEY = "haqV5FjexA2U1yByd7begfVd4s8vvmhZywGmQ7W1"
  // const MARS_API_KEY = process.env.MARS_API_KEY

  const getPhotoIndex = (event, key) => {
    setPhotoIndex(key);
  };

  const handleNext = () => { 
    if (photoIndex === 24) {
      setPage(page + 1)
      setPhotoIndex(0)
    } else {
      setPhotoIndex(photoIndex + 1)
    }
  }
  const handlePrevious = () => {
    if (photoIndex === 0) {
      if (page === 1) {
        setPage(1)
      } else {
        setPage(page - 1)
        setPhotoIndex(24)
      }
    } else { 
      setPhotoIndex(photoIndex - 1)
    }
  }

  const [{ data, loading, error}] = useAxios(`${URI}/curiosity/photos?sol=${sol}&page=${page}&api_key=${API_KEY}`)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
    <NavBar/>
    <Container>
    <SolInput
      sol={sol}
      onChange={e => {setSol(e.target.value)}}
    />
      { data ?
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3 mt-2 mb-4">
        {data.photos.map((photo, index) => (
              <Col  onClick={event => getPhotoIndex(event, index)} key={index}>
              <ImageCard 
                handleShow={handleShow}
                earth_date={photo.earth_date}
                img_src={photo.img_src}
              />
              </Col>
          ))}
      </Row>
      : <p className="display-6 text-center"> No data available, please try another sol </p>
      }
      <Row>
        <Col className="d-flex justify-content-center">
        <Pagination>
          {
              [...Array(numberOfpages)].map((pg, index) => (
              <Pagination.Item
                key={index}
                active={index+1 == page}
                onClick={() => setPage(index+1) }
              >
                  {index+1}
              </Pagination.Item>
            ))
          }
        </Pagination>
        </Col>
      </Row>
      <DataModal
        show={show}
        handleClose={handleClose}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        photoIndex={photoIndex}
        photos={data.photos}
      />
    </Container>
    <Footer/>
    </>
  )
}