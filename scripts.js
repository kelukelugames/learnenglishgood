var goodWords = ["tyrant", "tyranny", "tyrannical"];
var badWords = ["yogurt", "moat", "gopher", "moped", "twelve", "fish"];

$(document).ready(function() {
	var table = document.getElementById("wordsTable");
	var maxArrayLength = Math.max(goodWords.length, badWords.length)


	var row = table.insertRow(0);

	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);

	cell1.innerHTML = "Finished";
	cell2.innerHTML = "In Progress";

	for (var i = 0; i < maxArrayLength; i++) {
		var row = table.insertRow(i + 1);

		var cell1 = row.insertCell(0);
		cell1.classList.add("good");
		var cell2 = row.insertCell(1);
		cell2.classList.add("bad");

		cell1.innerHTML = (i < goodWords.length) ? createHTML(goodWords[i]) : "";
		cell2.innerHTML = (i < badWords.length) ? createHTML(badWords[i]) : "";
	}
});

function createHTML(word) {
	return "<div>" + word +
				" <img src='soundicon.png'" +
					"onClick='playSound(\"" + word + "\")'>" +
			"</div>";
}

function playSound(word) {
	var audio = new Audio("https://ssl.gstatic.com/dictionary/static/sounds/de/0/" + word + ".mp3");
audio.play();
}
//

/*
div on click 
get ids of div
calls a funcion

*/