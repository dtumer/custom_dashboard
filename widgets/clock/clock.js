function initClock(id) {
	var clock = document.getElementById(id);
	var timeSpan = clock.querySelector('.time');

	function updateClock() {
		var currentTime = new Date();
		timeSpan.innerHTML = currentTime;
	}

	updateClock();

	var timeInterval = setInterval(updateClock, 1000);
}

initClock("clock");