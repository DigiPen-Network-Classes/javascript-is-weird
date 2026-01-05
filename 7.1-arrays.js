let arr = [];
arr[52] = "foo";
console.log("arrays are sparse, this array is mostly empty:")
console.log(arr);

arr[51] = 1234;
console.log("now there's two entries");
console.log(arr);

arr[52] = 555;
console.log("now you're a number");
console.log(arr);