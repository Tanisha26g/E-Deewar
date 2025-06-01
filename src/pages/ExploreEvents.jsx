import React, { useState, useEffect } from "react";
import { Modal, Card, Button, Form, Row, Col } from "react-bootstrap";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/stationary.css";

const ExploreStationary = () => {
  // Stationary Listings
  const [items] = useState([
    {
      id: 1,
      title: "Engineering Drawing Kit",
      price: "₹350",
      seller: "Rahul Sharma",
      category: "Drawing Tools",
      description: "Complete set with compass, divider, scale, and protractor.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8YbAp_Bkw1TW6pK0sQHvd_QNarbgBA5F3Q&s",
    },
    {
      id: 2,
      title: "Classmate Notebook Set (6 pcs)",
      price: "₹240",
      seller: "Sneha Mehta",
      category: "Notebooks",
      description: "A4 size ruled notebooks, 160 pages each.",
      imageUrl: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      title: "Scientific Calculator (Casio FX-991EX)",
      price: "₹750",
      seller: "Aditya Raj",
      category: "Calculators",
      description: "Best for engineering students, lightly used.",
      imageUrl: "data:image/jpeg;base64,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",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favoriteItems");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (itemId) => {
    setFavorites((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.seller.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="explore-container">
      <div className="container-fluid mt-4">
        <h2 className="mb-4 text-center text-success">🛍️ Explore Stationary</h2>

        {/* Filters */}
        <Form className="mb-4">
          <Row className="g-3">
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Col>

            <Col md={4}>
              <Form.Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="All">All Categories</option>
                <option value="Notebooks">Notebooks</option>
                <option value="Drawing Tools">Drawing Tools</option>
                <option value="Calculators">Calculators</option>
              </Form.Select>
            </Col>
          </Row>
        </Form>

        {/* Item Cards */}
        <div className="row g-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4">
                <Card className="stationary-card h-100">
                  <Card.Img
                    variant="top"
                    src={item.imageUrl}
                    alt={item.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="text-success">{item.title}</Card.Title>
                    <Card.Text>
                      <strong>Seller:</strong> {item.seller} <br />
                      <strong>Price:</strong> {item.price} <br />
                      <strong>Category:</strong> {item.category}
                    </Card.Text>
                    <Button
                      variant="success"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItem(item);
                      }}
                      className="me-2 glow-button"
                    >
                      View Details
                    </Button>
                    <Button
                      variant="link"
                      className="heart-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(item.id);
                      }}
                    >
                      {favorites.includes(item.id) ? (
                        <BsHeartFill color="red" size={24} />
                      ) : (
                        <BsHeart size={24} />
                      )}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <p className="text-center w-100">No items found.</p>
          )}
        </div>
      </div>

      {/* Item Details Modal */}
      {selectedItem && (
        <Modal show onHide={() => setSelectedItem(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedItem.imageUrl}
              alt={selectedItem.title}
              className="img-fluid mb-3"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
            <p><strong>Seller:</strong> {selectedItem.seller}</p>
            <p><strong>Price:</strong> {selectedItem.price}</p>
            <p><strong>Category:</strong> {selectedItem.category}</p>
            <p><strong>Description:</strong> {selectedItem.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setSelectedItem(null)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ExploreStationary;
