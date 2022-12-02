let add_zero = function(number){
    if(10 > number){
        number = '0'+ number; 
    }
    return number;   
};

let start;
let clear_timer;
document.getElementById('start').addEventListener('click',function() {
	start = new Date();
	
	clear_timer = setInterval(start_timer,10);
});

document.getElementById('stop').addEventListener('click',function(){
	clearInterval(clear_timer);	
});

document.getElementById('reset').onclick = function(){
	document.getElementById('timer').innerHTML = '00:00:00';	
};

let start_timer = function(){
	let now = new Date();
	
	let milli = now.getTime() - start.getTime();
	let seconds = Math.floor(milli/1000);
	let minutes = Math.floor(seconds/60);
	let hours = Math.floor(minutes/60);
	
	seconds = seconds - minutes*60;
	minutes = minutes - hours*60;
	
	seconds = add_zero(seconds);
	minutes = add_zero(minutes);
	hours = add_zero(hours);
	
	document.getElementById('timer').innerHTML= hours + ':' + minutes + ':' + seconds;
};
	
	
