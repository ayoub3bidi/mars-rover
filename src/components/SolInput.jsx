import { Col, Form, Row } from "react-bootstrap";

const SolInput = ({ sol, onChange }) => {
  return (
    <Form>
        <Row className="mt-4 mb-4">
          <Col>
            <Form.Group controlId="title">
              <Form.Label> <h6>Choose your sol (Martian rotation or day)</h6> </Form.Label>
              <Form.Control
                type="number"
                value={sol}
                onChange={onChange}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
  )
}

export default SolInput