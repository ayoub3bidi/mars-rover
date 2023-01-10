import axios from "axios";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react"
import {
  Card,
  Col,
  Container,
  Modal,
  Row,
  Stack,
} from "react-bootstrap"

export function Home({}) {
  const [modal, setModal] = useState(false)

  // ? axios hooks method
  const [{ data, loading, error}, refetch] = useAxios("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key=haqV5FjexA2U1yByd7begfVd4s8vvmhZywGmQ7W1")
  
  //? classic method
  // const [photos, setPhotos] = useState([]);
  // const getPhotos = async () => {
  //   const { photos } =  await axios.get("https://api.nasa.gov/planetary/apod?api_key=haqV5FjexA2U1yByd7begfVd4s8vvmhZywGmQ7W1")
  //   setPhotos(photos)
  // }

  // useEffect(() => {
  //   getPhotos();
  // }, [])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <Container>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>Mars Rover</h1>
        </Col>
      </Row>
      <div>{JSON.stringify(data)}</div>
      {/* <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
        {JSON.stringify(data).map(photo => (
          <Col key={photo.id}>
            <ImageCard date={photo.earth_date} image={photo.img_src} onClick={() => setModal(true)} />
          </Col>
        ))}
      </Row> */}
    </Container>
  )
}

function ImageCard({ date, image }) {
  return (
    <Card
      className={`h-100 text-reset text-decoration-none`}
    >
      <Card.Body>
        <Stack
          gap={2}
          className="align-items-center justify-content-center h-100"
        >
          <span className="fs-5">{date}</span>
          <img src={image} alt="" />
        </Stack>
      </Card.Body>
    </Card>
  )
}