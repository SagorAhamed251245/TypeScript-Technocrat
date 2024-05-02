"use strict";
{
    // Basic Data type
    // string
    let firstName = "Sagor ";
    // এখানে বলে দেওয়া হয়নি এটি কোন টাইপের ডাটা । কিন্তু টাইপ স্ক্রিট  যেহেতু অনেক স্মার্ট তাই সে নিজে নিজে ইনফার করে নিবে এটা কোন ধরনের ডাটা টাইপ।  তাই একে বলা হয় implicit data type।
    let lastName = "Ahamed";
    // এখানে বলে দেওয়া হয়েছে এটি কোন টাইপের ডাটা । তাই একে বলা হয় explicit data type।
    //  data types
    // number
    let roll = 10;
    // boolean
    let isAdmin = true;
    // undefined
    let x = undefined;
    // null
    let y = null;
    // any type
    let d;
    // but its not recommended
    d = "string";
    d = 1;
    d = true;
    d = undefined;
    d = null;
    let f;
    f = 1;
    // non primitive data type
    // Array
    let friends = ["Anik", "Digonto"];
    let eligibleRollList = [1, 2, 3, 4];
    // eligibleRollList.push('sagor') ===> its gives error
    // eligibleRollList.push(1); right code
    // tuple ===> spacial Array . its maintain order type of value
    let coordinates = [1, 2];
    let ageName = [10, "sagor"];
    // let ageName: [number, string] = ["sagor", 10];  its gives an error
}
