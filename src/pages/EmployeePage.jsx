import React from 'react';
import { Link } from 'react-router-dom';

const EmployeePage = ({ employees, handleDelete, handleUpdate}) => {

  if (!employees || employees.length === 0) {
    return <p style={{ color: 'red' }}>No employees in the system.</p>;
  }

  const handleDeleteClick = (empId) => {
    handleDelete(empId);
  };

  const handleUpdateClick = (emp) => {
    handleUpdate(emp)
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Employee ID</th>
          <th scope="col">Name</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.emp_id}>
            <td>
              <span >
                {employee.emp_id}
              </span>
            </td>
            <td>{employee.name}</td>
            <td>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Link style={{ color: 'white', textDecoration: 'none' }} to={`/update-employee/${employee.emp_id}`} onClick={() => handleUpdateClick(employee)} className="btn btn-sm btn-warning">
                  Edit
                </Link>
                <Link
                  to={{
                    pathname: `/employee/${employee.emp_id}`,
                    state: { employee }
                  }}
                  style={{ color: 'white', textDecoration: 'none' }}
                  className="btn btn-sm btn-primary"
                >
                  Details
                </Link>
                <Link 
                  style={{ color: 'white', backgroundColor: 'red', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration:"none" }}
                  onClick={() => handleDeleteClick(employee.emp_id)}
                >
                  Delete
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeePage;
