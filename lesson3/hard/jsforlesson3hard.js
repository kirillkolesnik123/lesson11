//первое здаание
/*let str ='Урок-3-был слишком лёгким'.toUpperCase();
function replacer(str, offset, s) {
      
      return '  ';
    }
    
    let result = str.replace(/-/gi, replacer);
    console.log( result );
    
    let str2= str.slice(19,25); 
    alert(str2);
    let result2 = str2.replace(/им/gi, 'о');
    console.log(result2.toUpperCase());
*///второе задание
/*let arr =[20,33,1,'Человек',2,3];
let str=0;

for( let i=0;i<arr.length;i++){
	if(isFinite(arr[i])){
		str=str+Math.pow(arr[i],3);
	}
}

console.log(str);*/
//третье задание
function text(qwerty){
	if(!isNaN(qwerty)){
		console.log('Введите буквы!');
	} else{
	 qwerty = qwerty.trim();
	 if(qwerty.length>=50){
	 	qwerty=qwerty.substr(0,50)+'...';

	 }

	} console.log(qwerty);

}text('             sdfsdfsdfs');