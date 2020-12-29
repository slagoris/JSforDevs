let budget = +prompt('Ваш бюджет на месяц? руб.');
let shop = prompt('Название Вашего магазина?');

let mainList = {
	shopBudgetMonth: budget,
	shopName: shop,
 	shopGoods: [],
 	employers: {},
 	open: true
};

for (let i = 0; i <= 2; i++) {
	mainList.shopGoods[i] = prompt('Введите тип продаваемых товаров', 'Например введите "Электроника"');
}

alert('Ваш бюджет на 1 день составит ' + Math.round(budget/30) + ' рублей');
console.log(mainList)