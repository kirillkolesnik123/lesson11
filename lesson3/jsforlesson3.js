let cost ,
	shopsname,
	time,
	price

function start(){
	 cost = prompt("Ваш бюджет на месяц?");
	 while(isNaN(cost) || cost == "" || cost ==null) {
	 cost = prompt("Ваш бюджет на месяц?");
			
	}
     shopsname = prompt("Название вашего магазина").toUpperCase();
     time= 21;
}
start() ;
 let mainList = {
	cost,
	shopsname,
	shopGoods: [],
	employers: {},
	Open: true,
	discount: false
		}

function ShowDiscount(discount) {

if (discount) {
 price= cost*0.8;
 alert("Цена со скидкой" +price);
} else  {
	price = cost;
	alert("У вас нет скидки. С вас" +price);
}
}	
ShowDiscount();

function employers(){
	for(let i =0; i<4;i++){
		let z= prompt("Имя сотрудника","");
		mainList.employers[i]=z;

	}
}
employers();

function chooseGoods(){
	

for (let i = 0; i < 5; i++) {

let cc = prompt('Какой тип товаров будем продавать?');

if((typeof(cc)) === "string"  && (typeof(cc)) != null && cc != '' && cc.length <50) {
	console.log("vse верно!");
    mainList.shopGoods[i] = cc; 	
} else  {
	i= i - 1;
}
}
}
chooseGoods();


 

function workTime(time){
	if(time <0){
	console.log('Такого быть не может!');
	
}	else if (time> 8 && time <20){
	console.log('время работать!')
}	else if (time <24){
	ocnsole.log('уже слишком поздно!');
} else{
console.log('В сутках только 24 часа!');	
}
}
workTime(18);
function costfor1day(daycost) {

var daycost = (cost / 30); 

alert("Ваш дневной бюджет равен" + daycost)

}
costfor1day();
console.log(mainList);
		




