// 1 let and const
// use let when variable will change value, use const when value won't change'
const myName = "faraz";
console.log(myName);
// myName = "uddin";
//console.log(myName); //TypeError: Assignment to constant variable.
// arrow function syntax
function printMyName(name){
    console.log(name);
}
printMyName("Farazuddin Mohammad");
const printMyName2 = (name) => {
    console.log(name);
}
printMyName2("Faraz");

// class for human
class Human {
    constructor(gender){
        this.gender = gender;
    }
    printHuman(){
        console.log(`This is a ${this.gender} Human`);
    }
}

class Person extends Human{
    constructor(name, gender){
        super(gender);
        this. name = name;
    }
    printPerson = () => {
        this.printHuman();
        console.log(`This Person's name is ${this.name}`);
    }
}

// references 
let p1 = new Person("Faraz", "Male");

p1.printPerson();


const prsn1 = {
    name: 'faraz',
    age: 24
}

let prsn2 = {...prsn1}//prsn1;
prsn2['name'] = 'pinky';
console.log(prsn1);
console.log(prsn2);

const transformToObjects = (nums) => {
    let ans = [];
    nums.map((num) => {
        let ob = {val: ""}
        ob['val'] = num;
        ans.push(ob);
    })
    return ans;
}
console.log(transformToObjects([1,2,3]))

// array.map()

// array.find()

// array.findIndex()

// array.filter()

// array.reduce()

// array.concat()

// array.slice()

// array.splice()