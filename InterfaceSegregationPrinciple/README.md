# Interface Segregation Principle

We are going to look at the **'I'** in SOLID, which is the 4th design principle. 'I' stands for Interface Segregation Principle. This is often abbreviated as ISP.

It states, _"No client should be force to depend on methods it does not use"_.

First, you design an interface named IMultiFunction.

```java
public interface IMultiFunction {
  public void print();
  public void getPrintSpoolDetails();
  public void scan();
  public void scanPhoto();
  public void fax();
  public void internetFax();
}

public class MultiDevice implements IMultiFunction {

  @override
  public void print() {
    // assume real printing code
  }

  @override
  public void getPrintSpoolDetails() {
    // assume real code that gets spool details
  }

  @override
  public void scan() {
    // assume real code for scanning
  }

  @override
  public void scanPhoto() {
    // assume real code for phots scan
  }

  @override
  public void fax() {
    // assume real code fax
  }

  @override
  public void internetFax() {
    // Assume real code for internet fax
  }
}

public class PrinterAndScanner implements IMultiFunction {

  @override
  public void print() {
    // assume real printing code
  }

  @override
  public void getPrintSpoolDetails() {
    // assume real code that gets spool details
  }

  @override
  public void scan() {
    // assume real code for scanning
  }

  @override
  public void scanPhoto() {
    // assume real code for phots scan
  }

  @override
  public void fax() {

  }

  @override
  public void internetFax() {

  }
}

public class Printer implements IMultiFunction {

  @override
  public void print() {
    // assume real printing code
  }

  @override
  public void getPrintSpoolDetails() {
    // assume real code that gets spool details
  }

  @override
  public void scan() {

  }

  @override
  public void scanPhoto() {

  }

  @override
  public void fax() {

  }

  @override
  public void internetFax() {

  }
}

```

In the above example, we saw blank implementation of unused function for various type of device. This unimplemented method is not good design practice. Also, the printer class depends on methods that it does not use.

## Restructuring the code to follow ISP

We have one generic interface, and 3 classes that implement it. Not all methods make sense to all classes, so some have blank method implementations.

So the easiest way to fix this is to split the Big Interface into smaller interfaces. So lets take the generic interface IMultiFunction and split it into 3 interfaces. IPrint, IScan and IFax interfaces.

```java
public interface IPrint {
  public void print();
  public void getPrintSpoolDetails();
}

public interface IScan {
  public void scan();
  public void scanPhoto();
}

public interface IFax {
  public void fax();
  public void internetFax();
}
```

So the MultiDevice will implement all 3 interfaces. The PrinterAndScanner will implement IPrint and IScan and the printer device will only implement IPrint interface. 

```java
public class MultiDevice implements IPrint, IScan, IFax {

  @override
  public void print() {
    // assume real printing code
  }

  @override
  public void getPrintSpoolDetails() {
    // assume real code that gets spool details
  }

  @override
  public void scan() {
    // assume real code for scanning
  }

  @override
  public void scanPhoto() {
    // assume real code for phots scan
  }

  @override
  public void fax() {
    // assume real code fax
  }

  @override
  public void internetFax() {
    // Assume real code for internet fax
  }
}

public class PrinterAndScanner implements IPrint, IScan {

  @override
  public void print() {
    // assume real printing code
  }

  @override
  public void getPrintSpoolDetails() {
    // assume real code that gets spool details
  }

  @override
  public void scan() {
    // assume real code for scanning
  }

  @override
  public void scanPhoto() {
    // assume real code for phots scan
  }
}

public class Printer implements IPrint {

  @override
  public void print() {
    // assume real printing code
  }

  @override
  public void getPrintSpoolDetails() {
    // assume real code that gets spool details
  }
}
```

So, now the classes have become much cleaner now. No more blank implementations of methods. There is no ambiguity. 

This is one way of following Interface Segregation Principle. 

If there is common method among print. scan and fax interfaces. We can add a interface and make those interface extends the common interface. 

## Technique to identity violations

- Fat Interfaces
> Fat interfaces mean interfaces with high number of methods. 

- Interface with Low Cohesion
> there is low cohesion between methods in the interface.

- Empty method implementation 
