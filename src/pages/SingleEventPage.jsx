import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SellItemPage = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    price: '',
    category: '',
    saleType: 'Sell',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Item listed successfully!');
    // Add backend API call here
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-4 text-center">🛒 Sell or Rent an Item</h2>

      <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Item Name</label>
          <input
            type="text"
            className="form-control"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            placeholder="e.g. Engineering Mathematics Book"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            placeholder="Mention quality, condition, edition, etc."
            required
          />
        </div>

        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label">Price (INR)</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g. 150"
              required
            />
          </div>

          <div className="mb-3 col-md-6">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option>Books</option>
              <option>Electronics</option>
              <option>Stationery</option>
              <option>Furniture</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Sale Type</label>
          <select
            className="form-select"
            name="saleType"
            value={formData.saleType}
            onChange={handleChange}
          >
            <option>Sell</option>
            <option>Rent</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          List Item
        </button>
      </form>
    </div>
  );
};

export default SellItemPage;
