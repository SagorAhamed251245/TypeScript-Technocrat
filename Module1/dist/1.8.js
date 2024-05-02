"use strict";
{
    const user = {
        id: 123,
        name: { firstName: "Sagor", midName: "All", lastName: "Hassan" },
        contactNo: "01861",
        address: "uganda",
    };
    const { address, name: { firstName }, } = user;
    const myFriends = [
        "Anik",
        "sagor",
        "digonto",
        "arif",
        "sifat",
        "mubassir",
        "arafat",
    ];
    const [a, b, bestFriends, ...restsss] = myFriends;
    console.log(restsss);
}
