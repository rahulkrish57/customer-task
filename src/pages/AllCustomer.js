import React, { useState, useContext, useEffect } from "react";
import { useGlobalContext } from "../context/appContext";
import { Link } from "react-router-dom";
import axios from "axios";

const AllCustomer = () => {
  let { customer, loading } = useGlobalContext();
  const deleteFunc = async (e, id) => {
    e.preventDefault();
    try {
      await axios.delete(`https://customer-api-task.herokuapp.com/customer/${id}`);
    } catch (error) {
      console.log(error.message);
    }
    // console.log(id)
    window.location.reload();
  };
  
  return (
    <>
      <table className=" table table-customer ">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Number</th>
            <th>Customer City</th>
            <th colSpan="3">Functions</th>
          </tr>
        </thead>

        <tbody>
          {customer.map((customerData) => {
            return (
              <tr key={customerData._id}>
                <td>{customerData.customerName}</td>
                <td>{customerData.customerNumber}</td>
                <td>{customerData.customerCity}</td>
                <td>
                  <button type="button">
                    <Link to={`/details/${customerData._id}`}>Details</Link>
                  </button>
                </td>
                <td>
                  <button type="button">
                    <Link to={`/edit/${customerData._id}`}>Edit</Link>
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="del-btn"
                    onClick={(e) => deleteFunc(e, customerData._id)}
                  >
                    Delete
                  </button>
                </td>

                {/* <td >{`http://127.0.0.1:5000/${customerData.file}`}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AllCustomer;
