"use strict";
{
    // spread operator
    //   rest operator
    // destructuring
    /* <===============================> */
    //spread operator====>
    const bros1 = ["sagor", "al amin", "rajib", "haif"];
    const bros2 = ["Ajajul", "arafat", "rajon"];
    /* if i want to push bros1 into bros2
      bros2.push(bros1); its an error if i do this its
    look like ["sagor", "al amin", "rajib", "haif", ["Ajajul", "arafat", "rajon"]]; but i define that its only allow arrary of string ont */
    bros2.push(...bros1);
    const mentors = {
        typescript: "Mezba",
        redux: "Mir vai",
        dbms: "Mijan",
    };
    const mentors2 = {
        prisma: "Firose",
        next: "Tonmoy",
        clod: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors), mentors2);
    //   rest operator
    //    normal function parameter
    const greetFriends = (friend1, friend2, friend3) => {
        console.log(`hi ${friend1}${friend2} ${friend3}`);
        return `hi ${friend1}${friend2} ${friend3}`;
    };
    greetFriends("SAgor", "Anik", "digonto"); // this is a normal function parameter
    const greetFriends2 = (...friends) => {
        console.log(friends); // output [SAgor", "Anik", "digonto"]
        friends.forEach((friend) => {
            console.log(`hi ${friend}`);
        });
    };
    greetFriends2("SAgor", "Anik", "digonto"); // this is a rest operator function because i can now give any amount o parameter and the rest parameter give a array of all the parameter i give when i call
}
