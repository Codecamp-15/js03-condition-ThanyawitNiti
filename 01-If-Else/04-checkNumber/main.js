let a = Number(prompt('put Number'));
if (a>0) {
    alert('positive number')
} else if (a===0) {
    alert('Zero')
} else if (a<0) {
    alert('negative number')
} else {
    alert('invalid Number')
}
//let a = prompt('put Number');
// แก้ปัญหา prompt ยังไง ต้อง handle
// null === null [ok]
//'' , '  ' => str.trim() ==''
//'dsfsdf'=>isNaN
// pattern -> Guard-Clause เขียนดักข้อมูลที่ไม่ถูกฉโลกก่อน
if (a=== null || a.trim() ==='' || isNaN(a)) {
    alert('invalid Number')
} //เจอ null เป็น true จะหยุดเลย
if (a.trim() ==='' || a=== null || isNaN(a)) {
}
//a.trim() เมื่อกด cancel จะได้้ค่า null 
//null ไม่สามารถเรียกใช้ .trim() เพราะ prototype 



