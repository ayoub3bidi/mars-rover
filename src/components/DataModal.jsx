import React from 'react'
import { Button, Col, Modal,Row } from "react-bootstrap"

const DataModal = ({
    show,
    handleClose,
    photoId,
    img_src,
    cameraName,
    landing_date,
    launch_date,
    status
}) => {
    return (
        <Modal
            size="lg"
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Photo Number #{ photoId }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <img className="img-fluid" src={img_src} />
                </Col>
                <Col>
                  <h5>Full Camera Name: <span className="text-primary">{cameraName}</span> </h5>
                  <h5>Rover: <span className="text-primary">Curiosity</span></h5>
                  <h5>Landing Date: <span className="text-primary">{landing_date}</span></h5>
                  <h5>Launch Date: <span className="text-primary">{launch_date}</span></h5>
                  <h5>Status: { status == "active" ? <span className="text-success">{status}</span> :  <span className="text-danger">{status}</span>}</h5>
                  <div className="pt-5 text-center">
                  <Button variant="primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                  </svg>
                  </Button>{' '}
                  <Button variant="primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                  </Button>{' '}
                  </div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-primary" onClick={handleClose}>
                Understood
              </Button>
            </Modal.Footer>
          </Modal>
      )
}

export default DataModal