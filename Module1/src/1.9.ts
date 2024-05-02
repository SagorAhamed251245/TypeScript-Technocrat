{
  //
  // Type Alias

  type Students = {
    name: string;
    age: number;
    gender: string;
    contactNumber?: string;
    address: string;
  }; // its a type alias . its reusable . convention is First letter must be Capital letter

  const student1: Students = {
    name: "Sagor",
    age: 24,
    gender: "male",
    contactNumber: "01700000",
    address: "gulshan",
  };
  const student2: Students = {
    name: "Sagor2",
    age: 24,
    gender: "male",
    contactNumber: "01700000",
    address: "gulshan",
  };
  const student3: Students = {
    name: "Sagor2",
    age: 24,
    gender: "male",
    address: "gulshan",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Sagor";
  const isAdmin: IsAdmin = true;

  // for  function

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  //
}
