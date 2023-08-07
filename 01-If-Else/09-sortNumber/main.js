// let a = prompt("number1"); //200
// let b =prompt("number2"); //30
// let c =prompt("number3"); //1
// if (a>b && a>c && b>c ) {
//     alert(a + ' ' + b + ' ' + c ) 
// } else if (a>b && a>c && c>b) {
//     alert(a + ' ' + c + ' ' + b ) 
// }
//  else if ((a<b && b>c  && a>c)) {
//     alert(b + ' ' + a + ' ' + c ) 
// }
// else if ((b>a && b>c  && c>a)) {
//      alert(b + ' ' + c + ' ' + a ) 
// } 
// else if ( c >a && c > b && b > a) {
//     alert(c + ' ' + b + ' ' + a ) 
// }else if ( c >a && c > b && a > b) {
//     alert(c + ' ' + a + ' ' + b ) 
// }
// // a= 200 b =30 c = 1

let a =prompt("number1"); //200
let b =prompt("number2"); //30
let c =prompt("number3"); //1

let d = [a,b,c];
d.sort();
alert(d)