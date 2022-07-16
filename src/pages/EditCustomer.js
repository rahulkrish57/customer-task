import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios"
let url="https://customer-api-task.herokuapp.com/customer"

const EditCustomer = () => {
    const {id} = useParams()
    // const [customer, setCustomer] = useState({})
    
    
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [areaOfIntrest, setAreaOfintrest] = useState("");
  const [file, setFile] = useState("");
  const resultName = name.toLowerCase();
  const intrestOptions = ["Job", "Candidates", "Others"];
  const  handleSubmit = async(e) => {
    e.preventDefault();
    if(number.length !== 12){
      alert("Telephone number must be valid with area code")
    } else {
      const formData = new FormData();
      formData.append("file", file)
      formData.append("customerName", resultName)
      formData.append("customerNumber", number)
      formData.append("customerCity", city)
      formData.append("customerState", state)
      formData.append("customerCountry", country)
      formData.append("customerDescription", description)
      formData.append("areaOfIntrest", areaOfIntrest)
  
      console.log(formData);
  
      try {
        const res = await axios.patch(`${url}/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        alert("Data Updated")
      //   clearValues()
      } catch (error) {
        alert("Input Error! Give All Credentials! Telephone Must be unique!")
      //   clearValues()
      }
    }
    
  }
  const singleCustomer = async () => {
    try {
      const res = await axios.get(`${url}/${id}`);
    //   setCustomer(res.data);
      setName(res.data.customerName)
      setNumber(res.data.customerNumber)
      setCity(res.data.customerCity)
      setState(res.data.customerState)
      setCountry(res.data.customerCountry)
      setDescription(res.data.customerDescription)
      setAreaOfintrest(res.data.areaOfIntrest)
      setFile(res.data.file)

    //   setFile(res.data.file)
      // setCustomer(res.data)
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    singleCustomer();
  }, []);
  
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
              
              value={name || ''}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="customerNumber" className="form-label">
              Customer Number
            </label>
            <input
              type="text"
              name="customerNumber"
              className="form-input"
              value={number || ''}
              onChange={(e) => setNumber(e.target.value)}
            />
            <label htmlFor="customerCity" className="form-label">
              Customer City
            </label>
            <input
              type="text"
              name="customerCity"
              value={city || ''}
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
              value={state || ''}
              onChange={(e) => setState(e.target.value)}
            />
            <label htmlFor="customerCountry" className="form-label">
              Customer Country
            </label>
            <input
              type="text"
              name="customerCountry"
              className="form-input"
              value={country || ''}
              onChange={(e) => setCountry(e.target.value)}
            />
            <label htmlFor="customerDescription" className="form-label">
              Customer Description
            </label>
            <input
              type="text"
              className="form-input"
              value={description || ''}
              onChange={(e) => setDescription(e.target.value)}
            />
            {/* Area of Intrest */}
            <label htmlFor="areaOfIntrest" className="form-label">
              Area Of Interest
            </label>
            <select
              name="areaOfIntrest"
              value={areaOfIntrest || ''}
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
            //   value={customer.file}
              className="form-input"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <br />
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-block submit-btn"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default EditCustomer;
