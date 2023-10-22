// Get arr of random colors, which are not repeated !!!
// let arrOfColors:string[] = ['Green', 'Yellow', 'Black', 'Red', 'White'];
// function random(arrOfColors:string[]):void {
//      while(arrOfColors.length){
//         for  (let i = 0;i <= arrOfColors.length;i++){
//         const randomColor = Math.floor(Math.random()*arrOfColors.length);
//         console.log(arrOfColors[randomColor]);
//         arrOfColors.splice(randomColor,1)
//       }
//     }
//  }
// random(arrOfColors);
var arrOfColors = ['Green', 'Yellow', 'Black', 'Red', 'White'];
function random() {
    var randomColorArr = [];
    if (randomColorArr.length < arrOfColors.length) {
        for (var i = 0; i < arrOfColors.length; i++) {
            randomColorArr.push(arrOfColors[Math.floor(Math.random() * arrOfColors.length)]);
        }
        return randomColorArr.filter(function (el, index) { return randomColorArr.indexOf(el) === index; });
    }
}
random();
console.log(random());
