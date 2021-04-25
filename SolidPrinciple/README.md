# Solid Responsibility Principle

The **Single Responsibility Principle** says that "Every software component should have one and only one responsibility". When we say software component, refers to a class, a method, or a module.

## Cohesion and Coupling

```java
public class Square {
  int side = 5;

  public int calculateArea() {
    return side * side;
  }

  public int calculatePerimeter() {
    return side * 4;
  }

  public void draw() {
    if(highResolutionMonitor){
      // render a high resolution of a sqaure
    }
    else {
      // render a normal image of a square
    }
  }

  public void rotate(int degree) {
    // Rotate the image of the square clockwise to required degree
    // and Re-render
  }
}
```

Here, **calculateArea()** and **calculatePerimeter()** functions do exactly the are suppose to do. They calculate the area and perimeter of a square.

The **draw()** function renders the image of the square. It has multiple code flows depending on what type of display is being used.

The **rotate()** function rotates the image of the square and re-render it on the display.

In the context of the above code snippet. Let's understand **Cohesion**.

**Cohesion**: in the software world is defined as the degree to which the various parts of a software component are related.

> In the above code snippet, the calculatePerimeter() and calculateArea() function have high level of cohesion as they are closely related, in that they deal with the measurements of a square.

> Also in the draw() and rotate() method deal with rendering the image of the square in a certain way to display. So, there is high level of cohesion between this two method as well.

> But if you take all of the methods as a whole, the level of cohesion is low. For instance, the calculatePerimeter() method is not closely related to the draw() method as they deal with entire different responsibilities.

Let's take this draw() and rotate() method and move them to a different class.

```java
  public class square {
    int side = 5;

    public int calculateArea() {
    return side \* side;
    }

    public int calculatePerimeter() {
    return side \* 4;
    }
  }
```

```java
  public class squareUI {
    public void draw() {
      if(highResolutionMonitor){
        // render a high resolution of a sqaure
      }
      else {
        // render a normal image of a square
      }
    }

  public void rotate(int degree) {
    // Rotate the image of the square clockwise to required degree
    // and Re-render
  }
}
```

By doing this, here the level of cohesion in each classes is increased.

So one aspect of the Single Responsibility Principle is that we should always aim for the high cohesion within a component. If the is high cohesion between all the methods of a class, we can assign a single responsibility to all the methods as a whole.

> "Higher Cohesion helps attain better adherence to the Single."

the responsibility of Square class as a whole is to deal with measurements related to a square. Similarly, for the second class the responsibility of the SquareUI class as a whole is to deal with rendering the image of a square.

> aiming for higher cohesion can help us move towards conforming to the single responsibility principle.

**Coupling**: is defined as the level of inter dependency between various software components.

```java
public class Student {
  private string studentId;
  private Date studentDOB;
  private String address;

  public void save() {
    // Serialize object to string representation
    String objectStr = MyUtils.serializeIntoAString(this);
    Connection connection = null;
    Statement stmt = null;

    try {
      Class.forName("com.mysql.jdbc.Driver");
      connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/MyDb", "root", "password");
      stmt = connection.createStatement();
      stmt.execute("INSERT INTO student VALUES (" * objectStr * ")");
    }
    catch(Exception e){
      e.printStackTrace();
    }
  }

  public String getStudentId() {
    return studentId;
  }

  public void setStudentId(String studentId) {
    this.studentId = studentId;
  }
}
```

Here, the class Student. One of the methods inside the Student class is the save() method. The **save()** method will convert the student class into a serialized form and persist it in the database. This method deals wth a lot of low level details related to handling record insertion into a database.

Here, we are currently using MySQL database. If you decide to go with a NoSQL databases like MongoDB, most of this code will need to change.

So, the student class is tightly coupled with the database layer we use at the backend.

The student class should ideally deal with only the basic student related functionalities like getting student id, date of birth etc... The Student class should NOT be made cognizant of the low level details related to dealing with the backend database.

> Tight Coupling is bad in Software Development

So, we can fix this by moving the database related code, and move it into a new Repository class. Then we'll refer to this Repository method from inside the student class as shown below: 

```java
public class Student {
  private string studentId;
  private Date studentDOB;
  private String address;

  public void save() {
    new StudentRepository().save(this);
  }

  public String getStudentId() {
    return studentId;
  }

  public void setStudentId(String studentId) {
    this.studentId = studentId;
  }
  ... 
  // has only responsibility of handling core student profile data
}
```

```java
public class StudentRepository {
  public void save() {
    // Serialize object to string representation
    String objectStr = MyUtils.serializeIntoAString(this);
    Connection connection = null;
    Statement stmt = null;

    try {
      Class.forName("com.mysql.jdbc.Driver");connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/MyDb", "root", "password");
      stmt = connection.createStatement();
      stmt.execute("INSERT INTO student VALUES (" * objectStr * ")");
    }
    catch(Exception e){
      e.printStackTrace();
    }
  }
  // has a single responsibility to handle database operations. 
}
```

By only referring the StudentRepository class from Student class, we have removed the tight coupling and made it loose. So now if we change the underlying database, the Student class does NOT need to get changed and recompiled. You only need to change the Repository class. 

So by removing tight coupling, and making the coupling loose, we are again abiding by the Single Responsibility Principle.

> Loose Coupling helps attain better adherence to the Single Responsibility Principle

## Reason for Change
Robert "Uncle Bob" Martin defines the Single Responsibility Principle as "Every software component should have one and only ~~responsibility~~ **reason to change**".

If the software component has multiple reasons to change, then the frequency of changes to it will increase. Every change to a component opens up the possibility of introducing bugs into the software. So, if there are frequent changes to a component, the probability of introducing a bug goes up. This would require more time and effort to be spent on re-testing the software after the changes are made, because we need to make sure we catch all the bugs before we release the modified version of the software. 

> More time and efforts, means more Money. 

So the difference between following and not following the Single Responsibility Principle could be a considerable financial impact!. This are important design principle which can translate to considerable software maintenance costs in the long run. 

> If the reasons to change are closely related to one another, we can combine them. 

> ... ~~responsibility~~ -> reason to change, is just a new perspective. At the end of the day, the action which we take ti fix the problem is more or less same. 

___

## Example files

[Without following Single Principle](./Employee_old.js)  

In the above class we have couple of reason for change and they are: 
- Changes in employee attribute
- Changes in database
- Changes in Tax Calculation 

So, the new files will split up the reason for the change as Single Responsibility Principle recommends only one reason for change.

Changes in file: 
We ended up splitting it into 3different class as:
- [Employee.js](./Employee.js)
- [TaxCalc.js](./TaxCalc.js)
- [Database.js](./Database.js)

So, we have applied the Single responsibility principle here.

> But a word of caution is that, do not keep creating a huge number of classes just like that. For instance, it is a bad idea to create separate classes to handle employeeId, separate class to handle employee name etc. If you can group the responsibility together in sensible way, then do it. Else you will end up having a huge no. of classes thereby adding unnecessary complexity to your code. 

## Summing Up
We'll quickly wrap up the Single Responsibility Principle. So this is the **'S'** in SOLID. 

The principle states that *'Every software component should have one and only responsibility/reason to change'*.

We looked at two concepts - Cohesion and Coupling. 
> Low cohesion is **bad**. Single responsibility principle always advocates higher cohesion.  

> Tight coupling is bad. Single responsibility principle always recommends loose coupling. 

We saw how aiming for High Cohesion and Loose Coupling can help achieve compliance to the single responsibility principle. Also, the following single responsibility principle can lead to considerable savings in software maintenance costs. 
## Tips
- Aim for High Cohesion
- Aim for Loose Coupling
- Aim to have a single reason to change 
