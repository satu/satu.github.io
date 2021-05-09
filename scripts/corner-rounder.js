function cornerRounder() {
	// 1. get all the html elements with tag <div>
	// 2. iterate over each element
	//    a. change .style.borderRadius to 50px.

	let elements = document.getElementsByTagName("*");
	let index;
	for (index = 0; index < elements.length; index++) {
		let bit = elements[index];
		bit.style.borderRadius="25px";
	}
}
