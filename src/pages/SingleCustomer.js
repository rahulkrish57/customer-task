import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
let url = "https://customer-api-task.herokuapp.com/customer";

const SingleCustomer = () => {
  let { id } = useParams();
  const [customer, setCustomer] = useState({});
  const singleCustomer = async () => {
    try {
      const res = await axios.get(`${url}/${id}`);
      setCustomer(res.data);
      // setCustomer(res.data)
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    singleCustomer();
  }, []);
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
  const trim_id =   (customer._id) ? customer._id.substring(1,6) : " "
  
  return (
    <>
      <div className="container">
        <table className=" table table-customer ">
          <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Customer ID</td>
            <td>{`ID-${trim_id}`}</td>
          </tr>
          <tr>
            <td>Customer Name</td>
            <td>{customerName}</td>
          </tr>
          <tr>
            <td>Customer Number</td>
            <td>{customerNumber}</td>
          </tr>
          <tr>
            <td>Customer City</td>
            <td>{customerCity}</td>
          </tr>
          <tr>
            <td>Customer State</td>
            <td>{customerState}</td>
          </tr>
          <tr>
            <td>Customer Country</td>
            <td>{customerCountry}</td>
          </tr>
          <tr>
            <td>Customer Description</td>
            <td>{customerDescription}</td>
          </tr>
          <tr>
            <td>Area of Interest</td>
            <td>{areaOfIntrest}</td>
          </tr>
          <tr>
            <td>Document</td>
            <td>
            <button type="button" className="customer-page-btn">
                <a href={`https://customer-api-task.herokuapp.com/${file}`} target="_blank" rel="noreferrer">Document</a>
            </button>
            </td>
          </tr>
          </tbody>
        </table>
        <button type="button" className="customer-page-btn">
          <Link to="/all-customers">Customer Page</Link>
        </button>
      </div>
    </>
    // <div>{`SingleCustomer - ${customerName}`}</div>
  );
};

export default SingleCustomer;
