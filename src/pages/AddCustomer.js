import React, { useState } from "react";
import axios from "axios";

const AddCustomer = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [areaOfIntrest, setAreaOfintrest] = useState("Job");
  const [file, setFile] = useState("");
  const resultName = name.toLowerCase();

  const intrestOptions = ["Job", "Candidates", "Others"];

  const clearValues = () => {
    setName("");
    setNumber("");
    setCity("");
    setState("");
    setCountry("");
    setDescription("");
    setAreaOfintrest("Job");
    setFile("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (number.length !== 12) {
      alert("Number should be valid with area code");
    } else {
      const formData = new FormData();
    formData.append("file", file);
    formData.append("customerName", resultName);
    formData.append("customerNumber", number);
    formData.append("customerCity", city);
    formData.append("customerState", state);
    formData.append("customerCountry", country);
    formData.append("customerDescription", description);
    formData.append("areaOfIntrest", areaOfIntrest);
    console.log(formData);
    try {
      const res = await axios.post("https://customer-api-task.herokuapp.com/customer", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Data Registered");
      clearValues();
    } catch (error) {
      alert("Input Error! Give All Credentials! Telephone Must be unique!");
      clearValues();
    }
    }
    
  };
  return (
    <>
      <div className="container">
        <form encType="multipart/form-data" className="form">
          <div className="form-center">
            <label htmlFor="customerName" className="form-label">
              Customer Name
            </label>
            <input
              type="text"
              name="customerName"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="customerNumber" className="form-label">
              Customer Number
            </label>
            <input
              type="text"
              name="customerNumber"
              className="form-input"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <label htmlFor="customerCity" className="form-label">
              Customer City
            </label>
            <input
              type="text"
              name="customerCity"
              value={city}
              className="form-input"
              onChange={(e) => setCity(e.target.value)}
            />
            <label htmlFor="customerState" className="form-label">
              Customer State
            </label>
            <input
              type="text"
              name="customerState"
              className="form-input"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <label htmlFor="customerCountry" className="form-label">
              Customer Country
            </label>
            <input
              type="text"
              name="customerCountry"
              className="form-input"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <label htmlFor="customerDescription" className="form-label">
              Customer Description
            </label>
            <input
              type="text"
              className="form-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {/* Area of Intrest */}
            <label htmlFor="areaOfIntrest" className="form-label">
              Area Of Interest
            </label>
            <select
              name="areaOfIntrest"
              value={areaOfIntrest}
              className="form-select"
              onChange={(e) => setAreaOfintrest(e.target.value)}
            >
              {intrestOptions.map((itemValue, index) => {
                return (
                  <option key={index} value={itemValue}>
                    {itemValue}
                  </option>
                );
              })}
            </select>
            <label htmlFor="file" className="form-label">
              File Upload
            </label>
            <input
              type="file"
              name="file"
              className="form-input"
              // value={file}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <br />
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-block submit-btn"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCustomer;
