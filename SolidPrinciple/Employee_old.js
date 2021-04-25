class Employee {
  constructor(empId, name, age, salary, empType) {
    this.empId = empId;
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.empType = empType;
  }

  save() {
    // connect to the databases
    const connection = 'dbConnectionString';
    const sql = 'insertIntoEmployeeQuery';
    try {
      // execute the query 
    }
    catch (err) {
      console.log('Unable to save data ', err);
    }
  }

  calculateTax() {
    if(this.empType == 'fullTime') {
      // Tax Calculation for Full time employee
    }
    else if (this.empType == 'partTime') {
      // Tax Calculation for part time employee
    }
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