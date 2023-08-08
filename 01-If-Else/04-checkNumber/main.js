// - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลข
// - ถ้า input มากกว่า 0 ให้โชว์ข้อความ “Positive number”
// - ถ้า input เท่ากับ 0 ให้โชว์ข้อความ “Zero”
// - ถ้า input น้อยกว่า 0 ให้โชว์ข้อความ “Negative number”
// - ถ้า input ที่รับเข้ามาไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”


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
// if (a=== null || a.trim() ==='' || isNaN(a)) {
//     alert('invalid Number')
// } //เจอ null เป็น true จะหยุดเลย
// if (a.trim() ==='' || a=== null || isNaN(a)) {
// }
//a.trim() เมื่อกด cancel จะได้้ค่า null 
//null ไม่สามารถเรียกใช้ .trim() เพราะ prototype 



