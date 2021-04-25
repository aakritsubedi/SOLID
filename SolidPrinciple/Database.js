class Database {
  save() {
    // connect to the databases
    const connection = "dbConnectionString";
    const sql = "insertIntoEmployeeQuery";
    try {
      // execute query
    } catch (err) {
      console.log("Unable to save data ", err);
    }
  }
}
