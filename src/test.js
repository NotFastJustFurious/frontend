let array = new Array(4);
array.fill("YES");
array[1] = "Hi";
array[3] = "Hello";


array.map((item, index, array) => {
    console.log(item, index, array);
    return "";
});

console.log("==========");

array.map((item, index) => {
    console.log(item, index);
    return "";
});

console.log("==========");

array.map((item) => {
    console.log(item);
    return "";
});
