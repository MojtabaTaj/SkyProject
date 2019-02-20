function importFile() {
	var files = document.getElementById('selectFiles').files;
	console.log(files);
	if (files.length <= 0) {
		return false;
	}
	var fr = new FileReader();
	fr.onload = function(e) {
		console.log(e);
		var jsonFile = JSON.parse(e.target.result);
		firebaseUpload(jsonFile);
	}
	fr.readAsText(files.item(0));
}
function firebaseUpload(jsonData){
	this.jsonData = jsonData;
	var firebaseRef = defaultApp.database().ref();
	firebaseRef.set(jsonData);
}