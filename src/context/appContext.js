import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
const AppContext = React.createContext();

const url = "https://customer-api-task.herokuapp.com/customer";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState([]);

const getCustomer = async () => {
    try {
        const res = await axios.get(url)
        setCustomer(res.data)
    } catch (error) {
        console.log(error.message)
    }
}

useEffect(() => {
    getCustomer()
},[])

  return <AppContext.Provider value={{loading, customer}}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
