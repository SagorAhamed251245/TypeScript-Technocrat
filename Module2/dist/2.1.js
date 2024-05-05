"use strict";
{
    //  Type assertion
    let anythings;
    anythings = "next level wev development";
    anythings.length;
    anythings = 111;
    anythings.toFixed(2);
    // console.log(anythings);
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const kgToGmConvert = parseFloat(value) * 1000;
            return `The converted value is ${kgToGmConvert}`;
        }
        else if (typeof value === "number") {
            const kgToGmConvert = value * 1000;
            return kgToGmConvert;
        }
    };
    const result = kgToGm(1000);
    const result1 = kgToGm("1000");
    console.log(result1);
    try {
    }
    catch (error) {
        console.log(error.messages);
    }
    //
}
