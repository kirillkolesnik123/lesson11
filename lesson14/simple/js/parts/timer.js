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