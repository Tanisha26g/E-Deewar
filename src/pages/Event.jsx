import { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Event = () => {
  const [sections] = useState([
    { id: 1, name: "Books", path: "/my-events" },
    { id: 2, name: "Stationary", path: "/explore"},
    { id: 3, name: "Used Bags", path: "/recommended" },
    { id: 4, name: "Notes", path: "/calendar" },
  ]);

  return (
    <Container
  className="vh-100 d-flex flex-column align-items-center justify-content-center text-white text-center"
  style={{
    backgroundImage: "url('https://img.freepik.com/free-vector/realistic-navy-blue-glitter-background_23-2150041333.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

      {/* Welcome Section */}
      <h1 className="display-3 fw-bold mb-4">Explore Various Categories</h1>

      {/* Section Cards */}
      <Row className="g-3 w-75">
        {sections.map((section) => (
          <Col key={section.id} xs={12} md={6} lg={3} className="d-flex">
            <Card className="text-center border-light flex-grow-1">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{section.name}</Card.Title>
                <Link to={section.path}>
  <Button
  style={{ backgroundColor: "#007bff", borderColor: "#007bff", height: "70px", }}
  className="w-100 p-2 mt-2"
>
  Go to {section.name}
</Button>
</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Event;