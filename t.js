import { application } from "express";

console.log('test');

const a = 1;  // 값이 바뀌지 않을 것  
let b = 2;    //변경할 값  
// var c = 3; //변경할 값

function gretting1() {
    console.log('hello world!');
}

var gretting2 = function() {
    console.log('hello world');
}


const getting10 = function() {
    console.log('hey');
}


var getting3 =() => {
    console.log('hello world!!3');
}

var gretting4 = () => console.log("hello world");

function mysum1(x, y) { return x + y; }
function mysum2(x, y) { x + y; } //!!!
const mysum3 = (x, y) => {
    return x + y ;
}

const mysum4 = (x, y) => { return x + y ;}
const mysum5 = (x, y) => { x + y;}
const mysum6 = (x, y) => x+ y;

console.log(mysum1(1, 2));
console.log(mysum2(1, 2)); //undefined 값이 할당 되지 않았다. return 하지 않아서. 함수에는 return 값이 있어야 함.
console.log(mysum5(1, 2));

console.log(mysum6(1, 2)); // {}가 없으면 바로 return 함. 대신 단순한 표현식, 계산식만 쓸 수 있음 긴 코드는 {}를 활용해야 함.

gretting1();



app.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
})

