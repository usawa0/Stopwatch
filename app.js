const output = document.getElementById('output');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let tick = 0;
let timeout = 10;
let mode = 'start';

startBtn.onclick = bindMode('start');
pauseBtn.onclick = bindMode('pause');
resetBtn.onclick = bindMode('reset');

function bindMode(command) {
	return () => mode = command;
}

let timerId = setTimeout(function update() {
	output.textContent = format();
	checkMode();
	timerId = setTimeout(update, timeout);
}, timeout);

function checkMode() {
	if (mode === 'start') {
		tick += timeout;
		return;
	}
	if (mode === 'pause') {
		clearTimeout(timerId);
		return;
	}
	if (mode === 'reset') {
		tick = 0;
		return;
	}
}

function format() {
	const ms = parseInt(tick / 10);
	const sec = parseInt(ms / 100);
	const min = parseInt(sec / 60);
	const hrs = parseInt(min / 60);

	const H = addLeadZero(hrs % 24);
	const M = addLeadZero(min % 60);
	const S = addLeadZero(sec % 60);
	const Ms = addLeadZero(ms % 60);

	console.log(`hrs: ${H}\n min: ${M}\n sec: ${S}\nms: ${Ms}`);
	return `${H}:${M}:${S}.${Ms}`;
}

function addLeadZero(num) {
	return (num < 10) ? '0' + num : num;
}
