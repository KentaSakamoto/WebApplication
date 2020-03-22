// var myBirthTime= new Date(1982, 11, 17, 12, 30);
// function updateParagrah () {
//     var now = new Date();
//     var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
//     document.getElementById('birth-time').innerText = '生まれてから'　+ seconds + '秒経過';
// }
// setInterval(updateParagrah,50);

// function area(n) {
//     var area = n * n * 3.14;
//     return area;
// }

// console.log(area(5));
// console.log(area(10));
// console.log(area(15));


function areaOfCircle(r) {
    var area = r * r * 3.14;
    return area;
  }
  document.write('<p>半径 5cm の円の面積は ' + areaOfCircle(5) + 'です。</p>');
  document.write('<p>半径 10cm の円の面積は ' + areaOfCircle(10) + 'です。</p>');
  document.write('<p>半径 15cm の円の面積は ' + areaOfCircle(15) + 'です。</p>');