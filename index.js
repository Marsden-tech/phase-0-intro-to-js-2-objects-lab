// Write your solution in this file!
const employee = {
    "name": "Mark Owiti",
    "streetAddress": "Moi avenue, Nairobi"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedEmployee, ...newEmployee } = employee
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}