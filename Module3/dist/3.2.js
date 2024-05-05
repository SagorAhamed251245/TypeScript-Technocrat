"use strict";
{
    class Student {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getFree(numberOfHours) {
            console.log(`${this.name} will weckup at ${numberOfHours}`);
        }
    }
    const student = new Student("Sagor", 12, "narayanganj");
    //   console.log(student);
    class Teacher {
        constructor(name, age, address, desiccation) {
            this.name = name;
            this.age = age;
            this.address = address;
            this.desiccation = desiccation;
        }
        getFree(numberOfHours) {
            console.log(`${this.name} will walkup at ${numberOfHours}`);
        }
        teacherClass(numOfClass) {
            console.log(`${this.name} will take  ${numOfClass}`);
        }
    }
    const teacher = new Teacher("Mir x", 122, "Dhaka", "Narayanganj");
    //   console.log(teacher);
    /////////////////////////////////////////////////////////////////////////////////////////////
    class Parent {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getFree(numberOfHours) {
            console.log(`${this.name} will weckup at ${numberOfHours}`);
        }
    }
    class Student1 extends Parent {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student1("Sagor1", 212, "narayanganj");
    console.log(student1);
    student.getFree(100);
    class Teacher1 extends Parent {
        constructor(name, age, address, desiccation) {
            super(name, age, address);
            this.desiccation = desiccation;
        }
        getFree(numberOfHours) {
            console.log(`${this.name} will walkup at ${numberOfHours}`);
        }
        teacherClass(numOfClass) {
            console.log(`${this.name} will take  ${numOfClass}`);
        }
    }
    const teacher1 = new Teacher1("Mir x", 122, "Dhaka", "Narayanganj");
    console.log(teacher1);
}
