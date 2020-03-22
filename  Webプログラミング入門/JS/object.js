// var game = {
//     startTime : null,
//     displayArea : document.getElementById('display-area')
// };

// function start() {
//     startTime = Date.now();
//     document.body.onkeypress = stop;
// }

// function stop() {
//     var currentTime = Date.now();
//     var seconds = (currentTime - startTime) / 1000;
//     if (9.5 <= seconds && seconds <= 10.5) {
//         displayArea.innerText = seconds + '秒でしたね。すごい。';
//     } else {
//         displayArea.innerText = seconds + '行でしたね。残念';
//     }
//     console.log('ストップしました');
// }

// if (confirm('OKを押して10秒だと思ったら何かキーを押してください')) {
//     start();
// }

// var game = {
//   startTime: null,
//   displayArea: document.getElementById('display-area')
// };
// function start() {
//   game.startTime = Date.now();
//   document.body.onkeypress = stop;
// }
// function stop() {
//   var currentTime = Date.now();
//   var seconds = (currentTime - game.startTime) / 1000;
//   if (9.5 <= seconds && seconds <= 10.5) {
//     game.displayArea.innerText = seconds + '秒でした。すごい。';
//   } else {
//     game.displayArea.innerText = seconds + '秒でした。残念。';
//   }
// }
// if (confirm('OKを押して10秒だと思ったら何かキーを押して下さい')) {
//   start();
// }

// var game = {
//     startTime: null,
//     displayArea: document.getElementById('display-area')
//     print : function start() {
//         game.startTime = Date.now();
//         document.body.onkeypress = stop;
//       }
//     print : function stop() {
//         var currentTime = Date.now();
//         var seconds = (currentTime - game.startTime) / 1000;
//         if (9.5 <= seconds && seconds <= 10.5) {
//           game.displayArea.innerText = seconds + '秒でした。すごい。';
//         } else {
//           game.displayArea.innerText = seconds + '秒でした。残念。';
//         }
//       }
//   };

  if (confirm('OKを押して10秒だと思ったら何かキーを押して下さい')) {
    start();
  }

  var game = {
    startTime: null,
    displayArea: document.getElementById('display-area'),
    start: function () {
      game.startTime = Date.now();
      document.body.onkeypress = game.stop;
    },
    stop: function () {
      var currentTime = Date.now();
      var seconds = (currentTime - game.startTime) / 1000;
      if (9.5 <= seconds && seconds <= 10.5) {
        game.displayArea.innerText = seconds + '秒でした。すごい。';
      } else {
        game.displayArea.innerText = seconds + '秒でした。残念。';
      }
    }
  };
  if (confirm('OKを押して10秒だと思ったら何かキーを押して下さい')) {
    game.start();
  }