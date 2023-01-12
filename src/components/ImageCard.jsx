import React from 'react'
import {
    Card,
    Button,
    Stack
} from "react-bootstrap"

const ImageCard = ({img_src, earth_date, handleShow}) => {
    return (
        <Card  className={"h-100"} border="dark">
          <Card.Body>
            <Stack
              gap={1}
              className="align-items-center justify-content-center h-100"
            > 
              <Card.Img className="pt-2" variant="top" src={img_src} />            
              <Card.Text className="text-center display-6">
              <span className="text-primary">{ earth_date }</span>
              <Button variant="outline-dark" onClick={handleShow}>
                Click to get more data
              </Button>
            </Card.Text>
            </Stack>
          </Card.Body>
        </Card>
      )
}

export default ImageCard