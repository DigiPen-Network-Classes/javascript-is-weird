let someObject = {};
someObject.foo = "bar";
someObject.magicNumber = 42;

let someList = [];
someList[0] = "hi";

someObject.list = someList;

// print out the resulting JSON
console.log(JSON.stringify(someObject));