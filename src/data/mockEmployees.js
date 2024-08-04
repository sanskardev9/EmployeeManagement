let employees = [
  {
    'name': 'Sanskar',
    'address': {
      'line1': '3380 Sgm Nagar',
      'city': 'Faridabad',
      'country': 'INDIA',
      'zip': '121001',
    },
    'contactMethods': [
      {
        'method': 'EMAIL',
        'value': 'sanskar.dev09@gmail.com'
      },
      {
        'method': 'PHONE',
        'value': '8237478673'
      }
    ],
    'emp_id': 60001
  },
  {
    'name': 'Nitish',
    'address': {
      'line1': '2763 Sgm Nagar',
      'city': 'Faridabad',
      'country': 'INDIA',
      'zip': '121001',
    },
    'contactMethods': [
      {
        'method': 'EMAIL',
        'value': 'nitish.@gmail.com'
      },
      {
        'method': 'PHONE',
        'value': '8263761789'
      }
    ],
    'emp_id': 60002
  },{
    'name': 'Aadarsh',
    'address': {
      'line1': '3752 Sgm Nagar',
      'city': 'Faridabad',
      'country': 'INDIA',
      'zip': '121001',
    },
    'contactMethods': [
      {
        'method': 'EMAIL',
        'value': 'aadarsh@gmail.com'
      },
      {
        'method': 'PHONE',
        'value': '9726372829'
      }
    ],
    'emp_id': 60003
  },{
    'name': 'Happy',
    'address': {
      'line1': '8754 Sgm Nagar',
      'city': 'Faridabad',
      'country': 'INDIA',
      'zip': '121001',
    },
    'contactMethods': [
      {
        'method': 'EMAIL',
        'value': 'happy@gmail.com'
      },
      {
        'method': 'PHONE',
        'value': '9786554467'
      }
    ],
    'emp_id': 60004
  },{
    'name': 'Sahil',
    'address': {
      'line1': '6525 Sgm Nagar',
      'city': 'Faridabad',
      'country': 'INDIA',
      'zip': '121001',
    },
    'contactMethods': [
      {
        'method': 'EMAIL',
        'value': 'sahil@gmail.com'
      },
      {
        'method': 'PHONE',
        'value': '9875556788'
      }
    ],
    'emp_id': 60005
  },{
    'name': 'Dev',
    'address': {
      'line1': '2386 Sec-50',
      'city': 'Faridabad',
      'country': 'INDIA',
      'zip': '121001',
    },
    'contactMethods': [
      {
        'method': 'EMAIL',
        'value': 'dev@gmail.com'
      },
      {
        'method': 'PHONE',
        'value': '9884445678'
      }
    ],
    'emp_id': 60006
  },
];

export function getEmployees() {
  return employees;
}

export function addEmployee(employee) {
  employees.push(employee);
}

export function getEmployeeById(empId) {
  console.log("Fetching Employee ID:", empId);
  return employees.find(employee => employee.emp_id === empId);
}

export function updateEmployee(updatedEmployee) {
  console.log(updatedEmployee);
  employees = employees.map(employee =>
    employee.emp_id === updatedEmployee.emp_id ? updatedEmployee : employee
  );
}

export function deleteEmployee(empId) {
  employees = employees.filter(employee => employee.emp_id !== empId);
  console.log(employees);
}
