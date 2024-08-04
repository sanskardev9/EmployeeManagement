import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddEmployeePage from './pages/AddEmployeePage';
import EmployeeDetails from './pages/EmployeeDetails';
import UpdateEmployeePage from './pages/UpdateEmployeePage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-employee" element={<AddEmployeePage />} />
        <Route path="/employee/:empId" element={<EmployeeDetails />} />
        <Route path="/update-employee/:empId" element={<UpdateEmployeePage />} />
      </Routes>
    </Router>
  );
}

export default App;

