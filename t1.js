function mysum2({ x, y }) {
    return x * 10 + y;

}

mysum2({  x:1 , y:2 });
mysum2({ y: 2, x: 1 });


const i = 1;
switch(i) {
    case 1: console.log('1입니다. ');
        break;
    case 2: console.log('2입니다. ');
        break;
    case 3: console.log('3입니다. ');
        break;
}

console.log('-------')

const a = 1;
switch(a) {
    case 1: console.log('1입니다. ');
    case 2: console.log('2입니다. ');
    case 3: console.log('3입니다. ');
}