/*
// references cannot change:
const foo = "foo";
foo = "bar"; // TypeError!
*/

/*
// references cannot change!
const foo = { name: "foo" };
foo = { name: "bar" }; // Type Error!
*/

/*
// internals CAN change!
const malleable = { name: "foo" };
console.log(`before: ${JSON.stringify(malleable)}`);
malleable.name = "bar";
console.log(`after: ${JSON.stringify(malleable)}`);
*/