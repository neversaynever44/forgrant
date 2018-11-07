import $ from 'jquery';

import 'select2'
// import 'jquery-nice-select'

$(document).ready(function() {

$('#select').select2({
    minimumResultsForSearch: -1
});
$('#select').on("change", function() {
   selectVal();
});
});

// select value from option's
function selectVal() {
	 new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest;
		xhr.open('GET', select.value); 
		xhr.onload = function() {
			if ( this.status === 200 ) 
				resolve(this.responseText);
			else
				reject(Error(this.statusText));
		}
		xhr.send();
	}).then(function(res) {
		currencyObj = JSON.parse(res);
		for (let i = 0; i < priceChange.length; i++) {
			let price = currencyObj.ask,
				hour = currencyObj.changes.price.hour,
				day = currencyObj.changes.price.day,
				week = currencyObj.changes.price.week,
				month = currencyObj.changes.price.month;

			priceChange[i].innerHTML = "$" + price;

			hourChange[i].innerHTML	= "<span>+</span>" + hour + "$";
			hourChangeFlag = hour < 0;
			hourChange[i].classList.toggle(isRed, hourChangeFlag);

			dayChange[i].innerHTML = "<span>+</span>" + day + "$";
			dayChangeFlag = day < 0;
			dayChange[i].classList.toggle(isRed, dayChangeFlag);

			weekChange[i].innerHTML	= "<span>+</span>" + week + "$";
			weekChangeFlag = week < 0;
			weekChange[i].classList.toggle(isRed, weekChangeFlag);

			monthChange[i].innerHTML = month + "$";
			monthChangeFlag = month < 0;
			monthChange[i].classList.toggle(isRed, monthChangeFlag);

		}
	})
}

// variables
let 
	select = document.getElementById('select'),
	priceChange = document.querySelectorAll('.js-price-change'),
	hourChange = document.querySelectorAll(".js-hour-change"),
	dayChange = document.querySelectorAll(".js-day-change"),
	weekChange = document.querySelectorAll(".js-week-change"),
	monthChange = document.querySelectorAll(".js-month-change"),
	hourChangeFlag = false,
	dayChangeFlag = false,
	weekChangeFlag = false,
	monthChangeFlag = false,
	currencyObj = {},
	isRed = 'is-red';
selectVal();

