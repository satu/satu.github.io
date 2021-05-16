function cornerRounder() {
	// 1. get all the html elements with tag <div>
	// 2. iterate over each element
	//    a. change .style.borderRadius to 50px.

	let elements = document.getElementsByTagName("*");
	let index;
	for (index = 0; index < elements.length; index++) {
		elements[index].style.borderRadius="25px";
	}
}
let isFontElegant = false; 
function comicSanser() { 
	let fontToApply;
	if (isFontElegant) {
		fontToApply = "helvetica";
	} else {  
		fontToApply = "comic sans ms";
	}
	isFontElegant = !isFontElegant;
	document.getElementsByTagName("body")[0].style.fontFamily = fontToApply;
}

let isDarioABaby = false;
function babyDario() {
	let photoToUpdate;
	let titleToUpdate;
	let altTextToUpdate;
	if (isDarioABaby) {
		photoToUpdate = "https://i.imgur.com/hcO730D.png";
		titleToUpdate = "sexy male drummer";
		altTextToUpdate = "Dario playing drums, sexy";
	} else {
		photoToUpdate = "https://cdn.discordapp.com/attachments/805015098208026634/841044107081940992/IMG-20190228-WA00022.jpg";
		titleToUpdate = "a child in a silly hat";
		altTextToUpdate = "Dario in a silly carnival outfit";
    }
    isDarioABaby = !isDarioABaby;
    let darioPhoto = document.getElementById("jsmagic");
    darioPhoto.src = photoToUpdate;
    darioPhoto.title = titleToUpdate;
	darioPhoto.alt = altTextToUpdate;
}

document.addEventListener("DOMContentLoaded", function() {
	let funnyface = document.getElementById("funnyface");

	funnyface.addEventListener("mouseover", function(){
		funnyface.src = "images/jjholy.png";
	});

	funnyface.addEventListener("mouseout", function(){
		funnyface.src = "images/dariowhat.png";
	});
});

document.addEventListener("DOMContentLoaded", function() {
	let catOfTheDay = document.getElementById("catOfTheDay");
	let catBackground = document.getElementById("catBackground");
	catOfTheDay.addEventListener("mouseover", function(){
		catBackground.style.backgroundColor="red";
	});
	catOfTheDay.addEventListener("mouseout", function(){
		catBackground.style.backgroundColor="";
	})
});



