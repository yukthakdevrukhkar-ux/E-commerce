import React from 'react';
import './NewCollections.css';

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>

      <div className="collections">
        <div className="collection-item">
          <img src="https://picsum.photos/250/300?random=1" alt="product" />
          <p>Stylish Casual Wear</p>
          <div className="prices">
            <span className="new-price">₹999</span>
            <span className="old-price">₹1499</span>
          </div>
        </div>

        <div className="collection-item">
          <img src="https://picsum.photos/250/300?random=2" alt="product" />
          <p>Modern Fashion Outfit</p>
          <div className="prices">
            <span className="new-price">₹1299</span>
            <span className="old-price">₹1799</span>
          </div>
        </div>

        <div className="collection-item">
          <img src="https://picsum.photos/250/300?random=3" alt="product" />
          <p>Premium Trend Collection</p>
          <div className="prices">
            <span className="new-price">₹1499</span>
            <span className="old-price">₹1999</span>
          </div>
        </div>

        <div className="collection-item">
          <img src="https://picsum.photos/250/300?random=4" alt="product" />
          <p>Latest Summer Fashion</p>
          <div className="prices">
            <span className="new-price">₹899</span>
            <span className="old-price">₹1299</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollections;