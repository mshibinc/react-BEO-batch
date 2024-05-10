const data = [
        { name: "Shibin", age: 25, place: "Palakkad" }, { name: "Yseen", age: 26, place: "Wandoor" },
        { name: "Vishnu", age: 25, place: "Pattambi" }, { name: "Muneeb", age: 25, place: "Calicut" }
    ]
    //map
data.map((item) => {
        console.log(item)
    })
    //filter
const aboveAge = data.filter((item) => item.age >= 25)
    //reduce
const sumAge = data.reduce(function(prev, current) {
    // let tt = current.age * current.age;
    return prev + +current.age;
}, 0);
// data.reduce((total, user) => user.age + total, 0);
const findName = data.find((item) => item.name == "Shibin")
    // some return boolen
const somefn = data.some(function(arrVal) {
    return "shibin" === arrVal.name;
});
//start with b
startsWithB = (string) => string.toLowerCase().startsWith('b');
namesStartingWithB = data.filter((user) => startsWithB(user.name));

const filteredProduct = allProducts.filter(item => {
    return item.label.toLowerCase().includes(value.toLowerCase());
});

setPageState(value => ({...value, filterProducts: customers }));
setPageState({...value, filterProducts: customers });

console.log(namesStartingWithB);

let index = datas.map(function(e) {
    return e.id
}).indexOf(id);

datas.splice(index, 1);


const FRUITS = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = FRUITS.slice(1, 3);


let arr = ['foo', 'bar', 10, 'qux'];

// arr.splice(<index>, <steps>, [elements ...]);

arr.splice(1, 1); // Removes 1 item at index 1
// => ['foo', 10, 'qux']

arr.splice(2, 1, 'tmp'); // Replaces 1 item at index 2 with 'tmp'
// => ['foo', 10, 'tmp']

arr.splice(0, 1, 'x', 'y'); // Inserts 'x' and 'y' replacing 1 item at index 0
// => ['x', 'y', 10, 'tmp']