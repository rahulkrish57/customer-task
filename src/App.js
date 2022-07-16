// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import AllCustomer from "./pages/AllCustomer";
import AddCustomer from "./pages/AddCustomer";
import SingleCustomer from "./pages/SingleCustomer";
import EditCustomer from "./pages/EditCustomer";
import ErrorPage from "./pages/ErrorPage";
import SearchCustomer from "./pages/SearchCustomer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path ="/all-customers" element={<AllCustomer />} />
        <Route path ="/add-customers" element={<AddCustomer />} />
        <Route path ="details/:id" element={<SingleCustomer />} />
        <Route path ="edit/:id" element={<EditCustomer />} />
        <Route path = "/search-customers" element={<SearchCustomer />}/>
        <Route path ="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
