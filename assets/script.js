//click class info to view pop up
var classInfo = document.querySelector(".classInfoBtn");
var classDescription = document.querySelector(".classDescription");
var closeDescription = document.querySelector(".close");

classInfo.addEventListener("click", function() {
	if (classDescription.style.display === "none") {
		classDescription.style.display = "block";
		
	} else {
		classDescription.style.display = "none";
	}
});

closeDescription.addEventListener("click", function() {
	classDescription.style.display = "none";
});

