var num = 33721;
var numString = num.toString();
var multiplication = 1;

for (var i = 0; i < numString.length; i++) {
	multiplication *= numString[i];
}

console.log(multiplication);
alert(multiplication**3);
