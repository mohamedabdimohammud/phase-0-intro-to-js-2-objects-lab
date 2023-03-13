// Define a sample employee object
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main Street'
  };
  
  // Define the updateEmployeeWithKeyAndValue function
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
  }
  
  // Define the destructivelyUpdateEmployeeWithKeyAndValue function
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Define the deleteFromEmployeeByKey function
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Define the destructivelyDeleteFromEmployeeByKey function
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Test the functions
  console.log(updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe')); // { name: 'Jane Doe', streetAddress: '123 Main Street' }
  console.log(employee); // { name: 'John Doe', streetAddress: '123 Main Street' }
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe')); // { name: 'Jane Doe', streetAddress: '123 Main Street' }
  console.log(employee); // { name: 'Jane Doe', streetAddress: '123 Main Street' }
  console.log(deleteFromEmployeeByKey(employee, 'name')); // { streetAddress: '123 Main Street' }
  console.log(employee); // { name: 'Jane Doe', streetAddress: '123 Main Street' }
  console.log(destructivelyDeleteFromEmployeeByKey(employee, 'name')); // { streetAddress: '123 Main Street' }
  console.log(employee); // { streetAddress: '123 Main Street' }
  