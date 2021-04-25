class Employee {
  constructor(empId, name, age, salary, empType) {
    this.empId = empId;
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.empType = empType;
  }

  save() {
    // Invoke the save method from Database Class
  }

  calculateTax() {
    // Invoke tax calculation method from TaxCalculator Class
  }

  getEmployInfo() {
    return {
      id: this.empId,
      name: this.name,
      age: this.age,
      employeeType: this.empType
    }
  }

  getSalary() {
    return this.salary;
  }
}