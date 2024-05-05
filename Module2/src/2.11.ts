{
  // utility type
  //   pick utility

  type Person = {
    name: string;
    age: number;
    email?: string;
    contact: string;
  };

  type NameAge = Pick<Person, "name" | "age">; // output type  {name: string; age: number;  };  যদি কোন টাইপ থেকে নিদিষ্ট কোনো টাইপকে বাছাই করতে হয় তাহলে এই মেথড ইউস করতে হবে

  //Omit
  type ContactInfo = Omit<Person, "name" | "age">; // output {email?: string; contact: string;}  যদি কোন টাইপ থেকে নিদিষ্ট কোনো টাইপকে বাদ  করতে হয় তাহলে এই মেথড ইউস করতে হবে

  //   required
  type PersonRequired = Required<Person>; /* output {
    name: string;
    age: number;
    email: string;
    contact: string;  সকল প্রপারটি কে রিকোয়ারড করে দিবে
} */

  // partial
  type PersonPartial = Partial<Person>; /* output  {
    name?: string | undefined;
    age?: number | undefined;
    email?: string;
    contact?: string | undefined; সকল প্রপারটি কে অফসোনাল  করে দিবে
} */

  //read only
  type PersonReadOnly = Readonly<Person>;
  let person1: PersonReadOnly = {
    age: 1,
    name: " mx-x",
    contact: "0000",
    email: "bdhdh",
  };

  /* type MyObj = {
    a: string;
    b: string;
  }; */

  type MyObj = Record<string, string>;

  const myObj: MyObj = {
    a: "sss",
    b: "sss",
    c: "www",
  };

  const EmptyObj: Record<string, unknown> = {};
  //
}
