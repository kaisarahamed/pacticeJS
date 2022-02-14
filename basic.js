var kaisar = 25;
var kamrul = 15;
var total = kaisar + kamrul;
console.log(total);
let mama = "anuar hossain";
console.log(mama);
const mami = "kobit khatun";
console.log(mami);

var marks = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    if(element % 2 == 0){
        console.log(element, "this is jod number");
    }
    else{
        console.log(element *2, "this is bejod number");
    }
    
}

var student ={id: 12, phone: 1745, name: 'abir'}
var phoneNo = student.name;
console.log(phoneNo);
var phoneNo2 = student["phone"];
console.log(phoneNo2);
student.address = "bangladesh";
console.log(student);