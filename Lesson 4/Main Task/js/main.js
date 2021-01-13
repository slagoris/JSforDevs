let money,
		shop,
		time,
		price

function start () {
	money = +prompt('Ваш бюджет на месяц? руб.', '');

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц? руб.');
	}

	shop = prompt('Название Вашего магазина?', '').toUpperCase();
	time = 19;
}
// start();

let mainList = {
	budget: money,
	shopName: shop,
 	shopGoods: [],
 	employers: {},
 	open: false,
 	discount: false,
 	shopItems: [],
 	chooseGoods: function chooseGoods () {
	 for (let i = 0; i <= 2; i++) {
		let a = prompt('Какой тип товаров будем продавать?', '');
			
			if ((typeof(a)) === 'string' && (typeof(a)) != null  && a !='' && a.length < 50 ) {
				mainList.shopGoods[i] = a;
				console.log('Все верно!');
			} else {
				i -= 1;
			}
		}
	},
	workTime: function workTime (time) {
		if (time < 0) {
			console.log('Такого просто не может быть');
		} else if (time > 8 && time < 20){
			console.log('Время работать!');
			mainList.open = true;
			} else if (time < 24) {
				console.log('Уже слишком поздно!');
				} else {
					console.log('В сутках только 24 часа!');
					}	
	},
	dayBudget: function dayBudget () {
		alert('Ежедневный бюджет ' + mainList.budget / 30);
	},
	makeDiscount: function makeDiscount () {
		if (mainList.discount == true) {
			price = (price / 100) * 80;
		}
	},
	hireEmployers: function hireEmployers () {
		for (var i = 1; i <= 4; i++) {
			let name = prompt('Укажите имя сотрудника');

			if ((typeof(name)) === 'string' && (typeof(name)) != null && name != '' && name.length < 20 && isNaN(name)) {
				mainList.employers[i] = name;
			} else {
				i -= 1
			}
		}
	},
	chooseShopItems: function chooseShopItems () {
		let items = prompt('Перечислите через запятую товары', '');
			while ((typeof(items)) != 'string' || (typeof(items)) == null || items === '') {
				items = prompt('Перечислите через запятую товары', '');
			}
		mainList.shopItems = items.split(',');
		mainList.shopItems.push(prompt('Продолжайте еще', ''));
		mainList.shopItems.sort();
		mainList.shopItems.forEach(function(item,i,arr) {
			alert('У нас вы можете купить: ' + (i+1) + '. ' + item)
		})
	}
};

for (let key in mainList) {
	console.log('Наш магазин включает в себя: ' + key);
};
console.log(mainList);