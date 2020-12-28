var budget = +prompt('Ваш бюджет на месяц? руб.', "90000");
var shop = prompt('Название Вашего магазина?', 'Название магазина');
var goods = [];
var mainList = {
	shopBudgetMonth: budget,
	shopName: shop,
 	shopGoods: goods,
 	employers: {},
 	open: true
};

for (var i = 1; i <= 3; i++) {
	goods[i-1] = prompt('Введите ' + i + ' тип продаваемых товаров', 'Например введите "Электроника"');
}

alert('Ваш бюджет на 1 день составит ' + Math.round(budget/30) + ' рублей');
