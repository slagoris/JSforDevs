let arr = [];
let randomNumber;

let getArrCount = function () {
	let count = +prompt('Cколько массивов включить внутрь arr?' , '');
	while (isNaN(count) || count == '' || count == null) {
		count = +prompt('Cколько массивов включить внутрь arr?' , '');
	}
	console.log('Количество массивов в ARR равно ' + count);

	for (let i = 0; i < count; i++) {
		let arrSumm = 0;
		arr.push([]);
		for (let j = 0; j < 5; j++) {
					randomNumber = Math.floor(Math.random() * 100);
					arr[i].push(randomNumber);
				}
		for (let j = 0; j < arr[i].length; j++) {
					arrSumm += arr[i][j];

				}
		console.log('Сумма элементов ' + i + ' массива равна ' + arrSumm);		
	}
};
getArrCount();
console.log(arr);

