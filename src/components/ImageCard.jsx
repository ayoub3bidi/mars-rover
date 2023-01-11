import React from 'react'
import {
    Card,
    Button
} from "react-bootstrap"

const ImageCard = ({img_src, earth_date, handleShow}) => {
    return (
        <Card border="dark" style={{ width: '18rem' }}>
          <Card.Img className="pt-2" variant="top" src={img_src} />
          <Card.Body>
            <Card.Text className="text-center display-6">
              <span className="text-primary">{ earth_date }</span>
              <Button variant="outline-dark" onClick={handleShow}>
                Click to get more data
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      )
}

export default ImageCard