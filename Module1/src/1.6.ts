{
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  //  in this function i define all the parameter as a number type.. in the last of the (): number its a return type
  let result = add(2, 3);

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  function defaultValue(num1: number = 40, num2: number = 10): number {
    return num1 + num2;
    //    i can add defult value using like this
  }

  const defaultAddArrow = (num1: number = 10, num2: number = 30): number =>
    num1 + num2; //    i can add defult value using like this

  // object ==> function its call method
  //  যদি  object এর মধ্যে কোনো   function থাকে আমরা তাকে   method  বলি
  const poorUser = {
    name: "Sagor Ahamed",
    balance: 0,
    addBalance(balance: number): number {
      // it is an anonyms normal function
      console.log("this.balance :>> ", this.balance);
      console.log(balance);
      return this.balance + balance;
      //  this. method ইউস করে আমারা উপরের ভেলুকে সরাসরি অ্যাক্সেস করতে পারি ।
    },
  };
  poorUser.addBalance(19);

  const element: number[] = [1, 3, 5];
  const NewArr: number[] = element.map((ele: number): number => ele * ele);
}
