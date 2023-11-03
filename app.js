const output = document.getElementById('output');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

const start = 1698872400000
let counter = start;
let mode = 'pause';

startBtn.onclick = () => mode = 'start';
pauseBtn.onclick = () => mode = 'pause';
resetBtn.onclick = () => mode = 'reset';

update();

setInterval(update, 10);

function update() {
	output.textContent = format();
}

function chronometer() {
	if (mode === 'start') counter += 10;
	if (mode === 'pause') counter;
	if (mode === 'reset') counter = start;
	
	return counter;
}

function format() {
	const date = new Date(chronometer())
	const hrs = addLeadZero(date.getHours());
	const min = addLeadZero(date.getMinutes());
	const sec = addLeadZero(date.getSeconds());
	const msec = addLeadZero(parseInt(date.getMilliseconds() / 10));

	console.log(`${hrs}:${min}:${sec}.${msec}`);
	return `${hrs}:${min}:${sec}.${msec}`;
}

function addLeadZero(val) {
	return val < 10 ? '0' + val : val;
}
