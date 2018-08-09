var monthlycost = prompt("Ваш бюджет на месяц?");
var shopsname = prompt("Название вашего магазина");
/* здесь 3 начинается*/
var mainList = {
	cost: monthlycost,
	nameofshop: shopsname,
	shopGoods: [],
	employers: {},
	Open: true
		}
		/*создал массив shopGoods , чтобы в консоле не выбивало undefined*/
var shopGoods =['milk', 'juice','apple','pineapple'];
	
		/*здесь начинается 4*/
mainList.shopGoods[0] = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[1] = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[2] = prompt('Какой тип товаров будем продавать?');
console.log(shopGoods);
		/*здесь начинается 5*/
alert(mainList.cost/ 30);
console.log(mainList.shopsname);
		





