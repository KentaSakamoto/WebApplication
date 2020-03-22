// var age = 16;
// var result = null;
// if (age >= 20) {
//     result = '成年';
// } else {
//     result = '未成年';
// }
// document.write(result);

// var age = 65;
// var isMenber = true;
// var result = null;
// if (age >= 65 && isMenber) {
//     result = 'シニア会員割引の対象です';
// } else {
//     result = 'シニア会員割引の対象ではありません';
// }
// document.write(result);

var age = 16;
var Point = true;
var price = 1800;
if (age <= 15 && Point) {
    price = 800;
} else if (age >= 15 && Point) {
    price = 1000;
} else {

}
document.write(price)