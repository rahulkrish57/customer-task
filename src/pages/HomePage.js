import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>

      <div className="home-container">
      <h1 className="homepage-title">Welcome to Homepage!</h1>
        <button type="button" className="btn btn-primary show-btn">
          <Link to="/all-customers" className="show-link-btn">
            Show Customers
          </Link>
        </button>
        <button type="button" className="btn btn-primary add-btn">
          <Link to="/add-customers" className="add-link-btn">
            Add Customers
          </Link>
        </button>
        <button type="button" className="btn btn-primary add-btn">
          <Link to="/search-customers" className="add-link-btn">
            Search Customers
          </Link>
        </button>
      </div>
    </>
  );
};

export default HomePage;
