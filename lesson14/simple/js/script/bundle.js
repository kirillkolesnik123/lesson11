(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function ajax(){
	let messageFormInputs = new Object();

		messageFormInputs.loading = "Загрузка...";
		messageFormInputs.success = "Данные приняты. Мы свяжемся с Вами в ближайшее время";
		messageFormInputs.failure = "Что-то пошло не так...";

	let formInputs = document.getElementById('form'),
		inputForm = formInputs.getElementsByTagName('input'),
		statusMessageForm = document.createElement('div');
		statusMessageForm.classList.add('status');

		formInputs.addEventListener('submit', function (event) {
		event.preventDefault();
		formInputs.appendChild(statusMessageForm);

		
		//AJAX
		let requestInp = new XMLHttpRequest();
		requestInp.open("POST", 'server.php');

		requestInp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formDataInp = new FormData (formInputs);

		console.log(formDataInp);

		requestInp.send(formDataInp);

		requestInp.onreadystatechange = function () {
			if (requestInp.readyState<4) {
				statusMessageForm.innerHTML =  messageFormInputs.loading;
			}

			else if (requestInp.readyState === 4){
				if (requestInp.status == 200 && requestInp.status<300) {
					statusMessageForm.innerHTML =  messageFormInputs.success;			
				//контент добавляем на страницу
			}else {
					statusMessageForm.innerHTML = messageFormInputs.failure;
				}
			}
		}
		for (let i = 0; i<inputForm.length; i++){
			inputForm[i].value = '';
			// очищаем поля ввода
		}

	});
}
	
		

module.exports = ajax;
},{}],2:[function(require,module,exports){
function calc(){
	let persons = document.getElementsByClassName('counter-block-input')[0],
			restDays = document.getElementsByClassName('counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSum = 0,
			daysSum = 0,
			total = 0;

			totalValue.innerHTML = 0;

			persons.addEventListener('change', function () {
				this.value=this.value.replace(/[^0-9]/g,'');
				personsSum = +this.value;
				total = (daysSum + personsSum)*4000;
				if ((restDays.value == ''|| persons.value == '')|| (restDays.value == 0  ||persons.value == 0)) {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
			});
    

			restDays.addEventListener('change', function () {
				this.value=this.value.replace(/[^0-9]/g,'');
				daysSum = +this.value;
				total = (daysSum + personsSum)*4000;
				if ((restDays.value == ''|| persons.value == '')|| (restDays.value == 0  ||persons.value == 0)) {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
			});

			place.addEventListener('change', function () {
				if ((restDays.value == ''|| persons.value == '')|| (restDays.value == 0  ||persons.value == 0)) {
					totalValue.innerHTML = 0;
				} else {
					let a =total;
					totalValue.innerHTML = a * this.options[this.selectedIndex].value;
				}
			});
}
module.exports = calc;
},{}],3:[function(require,module,exports){
function Form(){
	let message = new Object();
message.loading = 'Загрузка...';
message.success = 'Спасибо ! Скоро мы с Вами свяжемся!';
message.failure = 'что-то пошло не так...';

let 	form = document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

		form.addEventListener('submit', function(event){
		event.preventDefault();
		form.appendChild(statusMessage);

			//AJAX
			let request = new XMLHttpRequest();
			request.open('POST','server.php')

			request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4){
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4){
					if(request.status ===200 && request.status <300){
						statusMessage.innerHTML = message.success;
					//Добавляем контент на страницу	
				} else {
					statusMessage.innerHTML = message.failure;}
				}
			}
			for(let i = 0; i < input.length; i++){
				input[i].value = '';
				//Очищаем поля ввода
			}
		});
}
module.exports = Form;
},{}],4:[function(require,module,exports){
function modal(){
	let more = document.querySelector('.more'),
overlay=document.querySelector('.overlay'),
close=document.querySelector('.popup-close');
btn=document.querySelectorAll('.description-btn');

more.addEventListener('click', function(){
	this.classList.add('more-splash');
	overlay.style.display='block';
	document.body.style.overflow ='hidden';

});
close.addEventListener('click', function (){
	overlay.style.display='none';
	more.classList.remove('more-splash');
	document.body.style.overflow ='';
});
for(i=0;i<btn.length;i++){
	btn[i].addEventListener('click', function(){
		this.classList.add('more-splash');
		overlay.style.display='block';
		document.body.style.overflow ='hidden';
	});
}
}
module.exports = modal;
},{}],5:[function(require,module,exports){
function slid(){
	let slideIndex = 1,
 		slides = document.getElementsByClassName('slider-item'),
 		prev = document.querySelector('.prev'),
 		next = document.querySelector('.next'),
 		dotsWrap = document.querySelector('.slider-dots'),
 		dots = document.getElementsByClassName('dot');

 		showSlides(slideIndex);

 		function showSlides(n) {
 			if (n > slides.length) {
 				slideIndex = 1;
 			};
 			if (n < 1) {
 				slideIndex = slides.length;
 			};

 			for( let i = 0; i < slides.length; i++) {
 				slides[i].style.display = 'none';
 			};

 			for(let i  = 0; i < dots.length; i++) {
 				dots[i].classList.remove('dot-active')
 			};

 			slides[slideIndex -1].style.display = 'block';
 			dots[slideIndex -1].classList.add('dot-active');
 		}

 		function plusSlides (n) {
 			showSlides(slideIndex += n)
 		}

 		function currentSlide(n) {
 			showSlides(slideIndex = n)	
 		}

 		next.addEventListener('click', function () {
 			plusSlides(1)
 		});

 		prev.addEventListener('click', function () {
 			plusSlides(-1)
 		
 		});

 		dotsWrap.addEventListener('click', function(event) {
 			for (let i = 0;i < dots.length + 1;i++) {
 				if(event.target.classList.contains('dot') && event.target == dots[i]) {
 					currentSlide(i);
 				}
 			}
		});
	
}
module.exports = slid;
},{}],6:[function(require,module,exports){
function tab() {
	

	let tab = document.getElementsByClassName('info-header-tab'),
	tabContent = document.getElementsByClassName('info-tabcontent'),
	info= document.getElementsByClassName('info-header')[0];
	function hideTabContent(a){
		for(let i =a;i<tabContent.length;i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1)

	function showTabContent(b){
		if(tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	info.addEventListener('click',function(event){
		let target =event.target;
		if(target.className =='info-header-tab'){
			for(let i=0;i<tab.length;i++){
				if(target==tab[i]){
					showTabContent(i);
					break;
				}
			}
		};
	});
	
}
module.exports = tab;
},{}],7:[function(require,module,exports){
function timer(){
let deadline = '2018-09-05';

function getTimeRemaining(endtime){
	let t = Date.parse(endtime) - Date.parse(new Date());
	let seconds = Math.floor( (t/1000) % 60 );
	if(seconds<=9){
		seconds='0'+seconds
	}
	let minutes = Math.floor( (t/1000/60) % 60);
	if(minutes<=9){
		minutes= '0'+ minutes
	}
	let hours = Math.floor( (t/(1000*60*60)) );
	if(hours<=9){
		hours='0'+hours
	}
	if(t<=0){
		seconds=0+'0',
		minutes =0+'0',
		hours=0+'0';

	} 		
	return {
		'total': t,
		'hours': hours,
		'minutes':minutes,
		'seconds':seconds
	};

};

function setClock(id, endtime){

	let timer = document.getElementById(id),
	hours = timer.querySelector('.hours'),
	minutes = timer.querySelector('.minutes'),	
	seconds = timer.querySelector('.seconds');



	function updateClock(){
		let t = getTimeRemaining(endtime);
		if(t.hours <=0 && t.minutes <=0 && t.seconds <=0){
			clearInterval(updateClock);
			hours.innerHTML = "00";
			minutes.innerHTML = "00";
			seconds.innerHTML = "00";
		} else {
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;
		}

	};

	updateClock();
	setInterval(updateClock, 1000);

}


setClock('timer',deadline);
}

module.exports = timer;
},{}],8:[function(require,module,exports){
window.addEventListener('DOMContentLoaded',function(){

	let tab= require('../parts/tab.js');
	let timer= require('../parts/timer.js');
	let modal= require('../parts/modal.js');
	let form= require('../parts/form.js');
	let ajax= require('../parts/ajax.js');
	let slider= require('../parts/slider.js');
	let calc= require('../parts/calc.js');
	
	

	tab();
	timer();
	ajax();
	calc();
	slider();
	modal();
	form();

});
},{"../parts/ajax.js":1,"../parts/calc.js":2,"../parts/form.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/tab.js":6,"../parts/timer.js":7}]},{},[8]);
