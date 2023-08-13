// - เขียนโปรแกรมสำหรับรับตัวเลขจากผู้ใช้งาน 3 ตัวเลข
// - แสดงผลลัพธ์เป็นตัวเลขที่เรียงกันจากมากไปน้อย  
//   เช่นรับค่าเป็น -1 ,4, 0 ให้แสดงผลเป็น 4, 0, -1

 let x = +prompt("number1"); 
 let y = Number(prompt("number2"));
 let z = prompt("number3")*1;
 let max;
 let mid;
 let min;
 if(x >= y && x >= z) {
    max =x;
    if ( y>= z) {
        mid =y;
        mid =z;
    } else {
        mid = z ;
        min = y;
    }
 } else if (y >= x && y >= z) {
    max=y;
    if (x >= z){
        mid = x;
        min = z;
    } else {
        mid = z;
        min = x
    }
 } else if (z >= x && z >= y) {
    max=z;
    if (x >= y ){
        mid = x;
        min = y;
    } else {
        mid = y;
        min = x;
    }
 }
 
 console.log(`${max} : ${mid} : ${min}`);

 