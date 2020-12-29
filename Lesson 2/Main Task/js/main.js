let budget = +prompt('Ваш бюджет на месяц? руб.');
let shop = prompt('Название Вашего магазина?');
let time = 19;

let mainList = {
	shopBudgetMonth: budget,
	shopName: shop,
 	shopGoods: [],
 	employers: {},
 	open: true
};

for (let i = 0; i <= 2; i++) {
	let a = prompt('Какой тип товаров будем продавать?');
	
	if ((typeof(a)) === 'string' && (typeof(a)) != null  && a !='' && a.length < 50 ) {
		mainList.shopGoods[i] = a;
		console.log('Все верно!');
	} else {
		i -= 1;
		}
}

if (time < 0) {
	console.log('Такого просто не может быть');
} else if (time > 8 && time < 20){
	console.log('Время работать!');
	} else if (time < 24) {
		console.log('Уже слишком поздно!');
		} else {
			console.log('В сутках только 24 часа!');
			}

alert('Ваш бюджет на 1 день составит ' + Math.round(budget/30) + ' рублей');
console.log(mainList);