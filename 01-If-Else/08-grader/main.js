// - จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรด
// - ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
// - ถ้าคะแนน น้อยกว่า 50 ได้ F

let point= prompt('grade')
if (point >=80 && point <=100) {
    console.log('A') }
 else if (point >= 70 && point <=79) {
    console.log('B')
} else if (point >= 60 && point <=69) {
    console.log('C')
}else if (point >= 50 && point <=59) {
    console.log('D')
} else if(point >= 0 && point <=49){
    console.log('F')
} else if(point < 0 && point >100) {
    console.log('Error')
} else {
    console.log('Error')
}
