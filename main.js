let add_zero = function(number) {
	if (10 > number) {
		number = '0' + number;
	}
	return number;
};
let button_start;
let clear_timer;
let start = document.getElementById('start_btn').onclick = function() {
	button_start = new Date();
	clear_timer = setInterval(start_timer, 10);
	start_btn.disabled = true;
	stop_btn.disabled = false;
	reset_btn.disabled = false;
};

let stop = document.getElementById('stop_btn').onclick = function() {
	clearInterval(clear_timer);
	start_btn.disabled = false;
	stop_btn.disabled = true;
	reset_btn.disabled = false;
};

let reset = document.getElementById('reset_btn').onclick = function() {
	document.getElementById('timer').innerHTML = '00:00:00';
	start_btn.disabled = false;
	stop_btn.disabled = true;
	reset_btn.disabled = true;
	
};
let start_timer = function() {
	let now = new Date();
	let milli = now.getTime() - button_start.getTime();
	let seconds = Math.floor(milli / 1000);
	let minutes = Math.floor(seconds / 60);
	let hours = Math.floor(minutes / 60);
	seconds = seconds - minutes * 60;
	minutes = minutes - hours * 60;
	seconds = add_zero(seconds);
	minutes = add_zero(minutes);
	hours = add_zero(hours);
	document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds
};