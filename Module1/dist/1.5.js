"use strict";
{
    // Reference type === object;
    const user = {
        firstName: "Sagor",
        middleName: "Ahamed",
        lastName: "Developer",
        isMarried: true,
    };
    //all Property must be used
    const user2 = {
        firstName: "Sagor",
        //   middleName: "Ahamed",
        lastName: "Developer",
    };
    const user3 = {
        firstName: "Sagor",
        //   middleName: "Ahamed",
        lastName: "Developer",
    };
    const user4 = {
        firstName: "Sagors",
        middleName: "Ahamed",
        lastName: "Developer",
    };
    //  user4.firstName = "Anik"; its give an error because its a read only property
    const user5 = {
        firstName: "Sagor",
        middleName: "Ahamed",
        lastName: "Developer",
    };
}
