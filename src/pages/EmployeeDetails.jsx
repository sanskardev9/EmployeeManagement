import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployeeById } from '../data/mockEmployees';
import './EmployeeDetails.css'; // Import the CSS file

const EmployeeDetails = () => {
  const { empId } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchedEmployee = getEmployeeById(parseInt(empId));
    if (fetchedEmployee) {
      setEmployee(fetchedEmployee);
    }
  }, [empId]);

  if (!employee) return <p>No employee data available.</p>;

  const contactMethods = Array.isArray(employee.contactMethods)
    ? employee.contactMethods
    : Object.entries(employee.contactMethods || {}).map(([method, value]) => ({ method, value }));

  return (
    <div className="employee-details">
      <h2>Employee Details</h2>
      <div className="employee-info">
        <p><strong>ID:</strong> {employee.emp_id}</p>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Address Line 1:</strong> {employee.address.line1}</p>
        <p><strong>City:</strong> {employee.address.city}</p>
        <p><strong>Country:</strong> {employee.address.country}</p>
        <p><strong>Zip Code:</strong> {employee.address.zip}</p>
      </div>
      <h3>Contact Info</h3>
      <div className="contact-methods">
        {contactMethods.map((contact, index) => (
          <div key={index} className="contact-method">
            <p><strong>{contact.method} - </strong> {contact.value}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDetails;
