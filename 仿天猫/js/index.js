window.onload = function() {
	init();
}

function init() {
	setInterval("changeImg()", 2000);
	setInterval("adnone()", 2000);
	setInterval("changeLiColor()", 2500);
}
var i = 1;

function changeImg() {
	i++;
	document.getElementById("adverImg").src = "images/luban" + i + ".jpg";
	if(i == 6) {
		i = 0;
	}
}

function adnone() {
	i++;
	if((i % 2) == 0) {
		document.getElementById("ad").style.display = "none";
	} else {
		document.getElementById("ad").style.display = "block";
	}
	if(i == 6) {
		i = 0;
	}
}

function changeLiColor() {
	var lbli = document.getElementById("lbli");
	var myli = lbli.getElementsByTagName("li");
	for(var j = 0; j < myli.length; j++) {
		myli[j].style.backgroundColor = "#CCCCCC";
	}
	myli[i].style.backgroundColor = "#F5F2F0";
}