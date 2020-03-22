// var clasees = ['A組','B組','C組','D組'];
// for (var grade = 1; grade < 4; grade++) {
//     for (var i = 0; i < clasees.length; ++i) {
//         document.write('<p>' + grade + '年' + clasees[i] + '</p>');
//     }
// }

// ペットの名前
var name = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];
for (var i = 0; i < name.length; i++) {
    for (var j = 0; j < name.length; ++j) {
        document.write('<p>' + name[i] + name[j] + '</p>')
    }
}

var chars = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];
for (var i = 0; i < chars.length ; i++) {
  for (var j = 0; j < chars.length ; j++) {
    document.write('<p>' + chars[i] + chars[j] + '</p>');
  }
}