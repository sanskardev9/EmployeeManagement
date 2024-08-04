import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEmployees, deleteEmployee, updateEmployee } from '../data/mockEmployees';
import './HomePage.css';
import EmployeePage from './EmployeePage';

const HomePage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(getEmployees());
  }, []);

  const handleDelete = (empId) => {
    deleteEmployee(empId);
    setEmployees(getEmployees());
  };
  const handleUpdate = (emp) => {
    updateEmployee(emp);
  };

  const handleDetail = (empId) => {
    console.log(empId)
  }

  return (
    <div className="home-page" style={{ display: "flex", flexDirection: "column" }}>
      <h1>Employees List</h1>
      <Link style={{ color: "white", width: "140px", textDecoration:"none" }} to="/add-employee" className="btn btn-primary mb-3">
        Add Employee
      </Link>
      {employees.length > 0 ? (
        <EmployeePage employees={employees} handleDelete={handleDelete} handleUpdate={handleUpdate} handleDetail={handleDetail} />
      ) : (
        <p style={{ color: "red" }}>No employees in the system.</p>
      )}
    </div>
  );
};

export default HomePage;
