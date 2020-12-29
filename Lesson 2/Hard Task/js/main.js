let week = [ 'Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let weekHTML = '';
let date = new Date();
let currentDay = date.getDay();

for (var i = 0; i < week.length; i++) {
	let day = week[i];
	if (i > 0 && i < 6 && i != currentDay) {
		weekHTML += '<div>'  +  day  + '</div>';
	} else if (i > 0 && i < 6 && i === currentDay) {
		weekHTML += '<div>' + '<i>' +  day + '</i>' + '</div>';
		} else {
			weekHTML += '<div>' + '<b>' +  day + '</b>' + '</div>';
			}
}

document.body.innerHTML = weekHTML;

let arr = ['526874', '7896464', '365984', '32', '71','548654', '2211478', '6465465', '56456465'];

for (var i = 0; i < arr.length; i++) {
	if (arr[i][0] === '3' || arr[i][0] === '7') {
		console.log(arr[i]);
	}

}