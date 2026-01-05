let f = function(name) { 
    console.log(`Hello, ${name}!`)
};

f("Bob");

function f_getter() {
    return f;
}
console.log(f_getter());

// arrow syntax
let p = (a, b) => { console.log(`a is ${a}, b is ${b}`)};

p();
p(1, 2);
p(1, "hi", 3);


// capturing args
let b = (x) => { p(x, 123); };
b(5);