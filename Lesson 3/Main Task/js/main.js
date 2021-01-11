let budget,
		shop,
		time,
		price

function start () {
	budget = +prompt('Ваш бюджет на месяц? руб.');

	while (isNaN(budget) || budget == '' || budget == null) {
		budget = +prompt('Ваш бюджет на месяц? руб.');
	}

	shop = prompt('Название Вашего магазина?').toUpperCase();
	time = 19;
}
start();

let mainList = {
	shopBudgetMonth: budget,
	shopName: shop,
 	shopGoods: [],
 	employers: {},
 	open: false,
 	discount: false
};

function chooseGoods () {
	for (let i = 0; i <= 2; i++) {
		let a = prompt('Какой тип товаров будем продавать?');
		
		if ((typeof(a)) === 'string' && (typeof(a)) != null  && a !='' && a.length < 50 ) {
			mainList.shopGoods[i] = a;
			console.log('Все верно!');
		} else {
			i -= 1;
		}
	}
}
chooseGoods();

function workTime (time) {
	if (time < 0) {
		console.log('Такого просто не может быть');
	} else if (time > 8 && time < 20){
		console.log('Время работать!');
		} else if (time < 24) {
			console.log('Уже слишком поздно!');
			} else {
				console.log('В сутках только 24 часа!');
				}	
}
workTime(time);

function getEmployers () {
	for (var i = 1; i <= 4; i++) {
		let name = prompt('Укажите имя сотрудника');

		if ((typeof(name)) === 'string' && (typeof(name)) != null && name != '' && name.length < 20 && isNaN(name)) {
			mainList.employers[i] = name;
		} else {
			i -= 1
		}
	}
}
getEmployers();

function makeDiscount () {
	if (mainList.discount == true) {
		price = (price/100)*80;
	}
}

alert('Ваш бюджет на 1 день составит ' + Math.round(budget/30) + ' рублей');
console.log(mainList);