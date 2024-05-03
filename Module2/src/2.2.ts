{
  // type elias
  type User = {
    name: string;
    age: number;
  };

  type UserWithRole = User & {
    role: string;
  }; // আমরা চাইলে টাইপ কে এইভাবে জোরা দিতে পারে  এই প্রদতিকে বলা হয় type intersection
  // note: আমি চাইলে interface keo type hisebe extent এর মধ্যে extends korte parbo. ete kore interface hoye jabe type

  const user: UserWithRole = {
    name: "Sagor",
    age: 18,
    role: "admin",
  };

  type RollNumber = string; // type use করলে এইভাবে ডিক্লার করা জায় কিন্তু interface use করলে এইভাবে ডিক্লার  করা জায় না /

  //   interface
  interface User2 {
    name: string;
    age: number;
  }
  //
  interface UserWithRole2 extends User2 {
    role: string; // note: আমি চাইলে type keo interface এর মধ্যে extends korte parbo. ete kore type hoye jabe interface
  }

  const user2: UserWithRole2 = {
    age: 18,
    role: "admin",
    name: "sagor",
  };

  // in js object ==> object , array ==> object , function ==> object
  type Roll = number[];
  const rollNumber1: Roll = [1, 2, 3];

  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber2: Roll2 = [1, 2, 3];

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => {
    return num1 + num2;
  };
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add2: Add2 = (num1, num2) => {
    return num1 + num2;
  };
}
