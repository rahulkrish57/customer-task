import React, { useState, useEffect } from "react";
import axios from "axios";
let url = "https://customer-api-task.herokuapp.com/customer/search";

const SearchCustomer = () => {
  const [name, setName] = useState("");
  const [customer, setCustomer] = useState({});
  const resName = name.toLowerCase();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${url}/${resName}`);
      setCustomer(res.data);
      // setCustomer(res.data)
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 400) {
        setCustomer(0);
      }
    }
  };
  console.log(customer);
  const {
    customerName,
    customerNumber,
    customerCity,
    customerState,
    customerCountry,
    customerDescription,
    areaOfIntrest,
    file,
  } = customer;
  const trim_id = customer._id ? customer._id.substring(1, 6) : " ";
  return (
    <>
      <div className="container">
      <label htmlFor="searchName" className="search-label">Search Customer</label><br/>
      <input type="text" onChange={(e) => setName(e.target.value)} className="search-input" placeholder="Type Customer Name"></input>
      <button onClick={(e) => handleClick(e)} className="search-btn">submit</button>
      </div>
      {(customer === 0) ? (
        <div className="search-area">
            Oops! No Such Customer!
        </div>
      ) : (
        <table className=" table table-customer ">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bold-area">Customer ID</td>
              <td>{`ID-${trim_id}`}</td>
            </tr>
            <tr>
              <td className="bold-area">Customer Name</td>
              <td>{customerName}</td>
            </tr>
            <tr>
              <td className="bold-area">Customer Number</td>
              <td>{customerNumber}</td>
            </tr>
            <tr>
              <td className="bold-area">Customer City</td>
              <td>{customerCity}</td>
            </tr>
            <tr>
              <td className="bold-area">Customer State</td>
              <td>{customerState}</td>
            </tr>
            <tr>
              <td className="bold-area">Customer Country</td>
              <td>{customerCountry}</td>
            </tr>
            <tr>
              <td className="bold-area">Customer Description</td>
              <td>{customerDescription}</td>
            </tr>
            <tr>
              <td className="bold-area">Area of Interest</td>
              <td>{areaOfIntrest}</td>
            </tr>
            <tr>
              <td className="bold-area">Document</td>
              <td>
                <button type="button" className="customer-page-btn">
                  <a href={`http://127.0.0.1:5000/${file}`} target="_blank" rel="noreferrer">
                    Document
                  </a>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default SearchCustomer;
