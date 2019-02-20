/**

 * Author: Mojtaba Tajmohammad

 * Class: Slider
*/
/*
 * moodslider,
 * onChange method calls this, passing values of range slider ID and value
 * this function calls correct child node of firebase mood brand
 */
function moodSlider(sliderId_, sliderVal_) {
	this.sliderId_ = sliderId_;
	this.sliderVal_ = sliderVal_;


	if (sliderVal_ < 2) {
		switch (sliderId_) {
		case "AC":
			uploadContent("Agitated");
			break;
		case "HS":
			uploadContent("Happy");
			break;
		case "TWA":
			uploadContent("Tired");
			break;
		case "SF":
			uploadContent("Scared");
			break;
		default:
			console.log("Choose a mood");
		break;
		}
	}
	if (sliderVal_ > 2) { 
		switch (sliderId_) {
		case "AC":
			uploadContent("Calm");
			break;
		case "HS":
			uploadContent("Sad");
			break;
		case "TWA":
			uploadContent("WideAwake");
			break;
		case "SF":
			uploadContent("Fearless");
			break;
		default:
			console.log("Choose a mood");
		break;
		}
	}
}

/*
 * uploadContent,
 * traverse firebase JSON data from where user selected moodslider
 * to collect values of image path and name keys.
 */
function uploadContent(moodName) {
	this.moodName = moodName;

	var tableListMovie = document.getElementsByTagName("img"), 
		tableListName = document.getElementById("myTable").rows[1].cells;

	const rootRef = firebase.database().ref().child("mood");
	var	moodValRef = rootRef.child(this.moodName); 

	//Begins taking snapshot iterating each json node within
	moodValRef.once("value", function(snapshot) { 
		var tableCell = 0; 
		snapshot.forEach(function(childSnapshot) {  
			//Unchangeable values
			const movie = childSnapshot.val().image, 
				  name = childSnapshot.val().name;
				  maxTableCol = 5;

			if (tableCell < maxTableCol) {
				tableListName[tableCell].innerHTML = name;
				//Pre-increment to skip logo img and allow next cell iteration
				tableListMovie[++tableCell].src = movie; 
			} else { 
				moodValRef.off();
			}
		});
	});
}