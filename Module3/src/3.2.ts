{
  class Student {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getFree(numberOfHours: number) {
      console.log(`${this.name} will weckup at ${numberOfHours}`);
    }
  }

  const student = new Student("Sagor", 12, "narayanganj");
  //   console.log(student);

  class Teacher {
    name: string;
    age: number;
    address: string;
    desiccation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      desiccation: string
    ) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.desiccation = desiccation;
    }
    getFree(numberOfHours: number) {
      console.log(`${this.name} will walkup at ${numberOfHours}`);
    }
    teacherClass(numOfClass: number) {
      console.log(`${this.name} will take  ${numOfClass}`);
    }
  }
  const teacher = new Teacher("Mir x", 122, "Dhaka", "Narayanganj");
  //   console.log(teacher);
  /////////////////////////////////////////////////////////////////////////////////////////////

  class Parent {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getFree(numberOfHours: number) {
      console.log(`${this.name} will weckup at ${numberOfHours}`);
    }
  }

  class Student1 extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const student1 = new Student1("Sagor1", 212, "narayanganj");
  console.log(student1);
  student.getFree(100);

  class Teacher1 extends Parent {
    desiccation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      desiccation: string
    ) {
      super(name, age, address);
      this.desiccation = desiccation;
    }
    getFree(numberOfHours: number) {
      console.log(`${this.name} will walkup at ${numberOfHours}`);
    }
    teacherClass(numOfClass: number) {
      console.log(`${this.name} will take  ${numOfClass}`);
    }
  }
  const teacher1 = new Teacher1("Mir x", 122, "Dhaka", "Narayanganj");
  console.log(teacher1);
}
