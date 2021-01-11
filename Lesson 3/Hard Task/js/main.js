let str = 'урок-3-был слишком легким';
let strUp = '';

for (var i = 0; i < str.length; i++) {
// if (i === 0) {
// 	strUp += str[i].toUpperCase();
// } else  if (str[i] === '-') {
// 		strUp += ' '
// 	} else {
// 			strUp += str[i];
// 		}

	(i === 0)? strUp += str[i].toUpperCase() : (str[i] === '-')? strUp += ' ' : strUp += str[i];

}
console.log(str)
console.log(strUp) 

let arr = [20, 33, 1, 'Человек', 2, 3];

console.log(arr[0] + Math.pow(arr[24], 3))
