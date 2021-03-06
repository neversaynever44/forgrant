import $ from 'jquery';

import 'select2'
import Promise from 'promise-polyfill';
import Classlist from 'classlist-polyfill';

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
			// priceChange
			priceChange[i].innerHTML = "$" + price;
			// hourChange
			hourChange[i].innerHTML	= "<span>+</span>" + hour + "$";
			hourChangeBool = hour < 0;
			hourChange[i].classList.toggle(isRed, hourChangeBool);
			// dayChange
			dayChange[i].innerHTML = "<span>+</span>" + day + "$";
			dayChangeBool = day < 0;
			dayChange[i].classList.toggle(isRed, dayChangeBool);
			// weekChange
			weekChange[i].innerHTML	= "<span>+</span>" + week + "$";
			weekChangeBool = week < 0;
			weekChange[i].classList.toggle(isRed, weekChangeBool);
			// monthChange
			monthChange[i].innerHTML = month + "$";
			monthChangeBool = month < 0;
			monthChange[i].classList.toggle(isRed, monthChangeBool);

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
	hourChangeBool = false,
	dayChangeBool = false,
	weekChangeBool = false,
	monthChangeBool = false,
	currencyObj = {},
	isRed = 'is-red';

// selectVal
selectVal();

