

$(document).ready(function() {
	var goodWords = readWordsFromFilepath ("https://raw.githubusercontent.com/kelukelugames/pronounceenglishwords/master/goodwords.txt");
	var badWords = readWordsFromFilepath("https://raw.githubusercontent.com/kelukelugames/pronounceenglishwords/master/badwords.txt");

	var table = document.getElementById("wordsTable");
    var header = table.createTHead();
	var firstRow = header.insertRow(0);

	var firstRowCell1 = firstRow.insertCell(0);
	var firstRowCell2 = firstRow.insertCell(1);

	firstRowCell1.innerHTML = "Finished";
	firstRowCell2.innerHTML = "In Progress";

	var maxArrayLength = Math.max(goodWords.length, badWords.length)

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
function readWordsFromFilepath(filepath) {
    var request = new XMLHttpRequest();
    request.open("GET", filepath, false);
    request.send(null);
    var returnValue = request.responseText.trim().split("\n");

    return returnValue;
}

