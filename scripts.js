var words = ["abc", "xyz", "123"];

$(document).ready(function() {

	var table = document.getElementById("wordsTable");

	for (var i = 0; i < words.length; i++) {
		var row = table.insertRow(0);

		var cell1 = row.insertCell(0);

		cell1.innerHTML = words[i];
	}
});
