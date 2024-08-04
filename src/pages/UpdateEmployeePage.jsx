import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployeeById, updateEmployee } from '../data/mockEmployees'; 
import './UpdateEmployeePage.css';

const UpdateEmployeePage = () => {
  const { empId } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState({
    line1: '',
    city: '',
    country: '',
    zip: '',
  });
  const [contactMethods, setContactMethods] = useState([]);

  useEffect(() => {
    const fetchedEmployee = getEmployeeById(parseInt(empId));
    if (fetchedEmployee) {
      setEmployee(fetchedEmployee);
      setName(fetchedEmployee.name);
      setAddress(fetchedEmployee.address);
      setContactMethods(Array.isArray(fetchedEmployee.contactMethods) ? fetchedEmployee.contactMethods : []);
    } else {
      navigate('/');
    }
  }, [empId, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = {
      emp_id: parseInt(empId),
      name,
      address,
      contactMethods,
    };
    updateEmployee(updatedEmployee);
    navigate('/');
  };

  const handleContactMethodChange = (index, field, value) => {
    const newContactMethods = [...contactMethods];
    newContactMethods[index][field] = value;
    setContactMethods(newContactMethods);
  };

  const addContactMethod = () => {
    const availableMethods = getAvailableMethods();
    const newMethod = availableMethods.length > 0 ? availableMethods[0] : '';
    setContactMethods([...contactMethods, { method: newMethod, value: '' }]);
  };

  const getAvailableMethods = () => {
    const selectedMethods = contactMethods.map(contact => contact.method);
    const allMethods = ['EMAIL', 'PHONE'];
    return allMethods.filter(method => !selectedMethods.includes(method));
  };

  return (
    <div className="update-employee-page">
      <h1>Update Employee</h1>
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Address Line 1:</label>
          <input
            type="text"
            value={address.line1}
            onChange={(e) => setAddress({ ...address, line1: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            value={address.country}
            onChange={(e) => setAddress({ ...address, country: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Zip Code:</label>
          <input
            type="number"
            value={address.zip}
            onChange={(e) => setAddress({ ...address, zip: e.target.value })}
            required
          />
        </div>
        <div className="contact-methods-section">
          <h3>Contact Methods</h3>
          {contactMethods.map((contact, index) => (
            <div key={index} className="form-group contact-method">
              <label>Method:</label>
              <select
                value={contact.method}
                onChange={(e) => handleContactMethodChange(index, 'method', e.target.value)}
              >
                <option value="">{contact.method}</option>
                {getAvailableMethods().map(method => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
              <label>Value:</label>
              <input
                type="text"
                value={contact.value}
                onChange={(e) => handleContactMethodChange(index, 'value', e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addContactMethod} disabled={contactMethods.length >= 2} className="add-contact-btn">
            Add Contact Method
          </button>
        </div>
        <button type="submit" className="submit-btn">Update Employee</button>
      </form>
    </div>
  );
};

export default UpdateEmployeePage;
