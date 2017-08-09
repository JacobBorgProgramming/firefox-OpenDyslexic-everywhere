function addsavelistener(){

	document.getElementById("webpage_checkbox").addEventListener("change", save);
	//TODO: also for ui_checkbox

	checkboxset();
}

function save(){
	webpage = document.getElementById("webpage_checkbox").value;
	// also for ui

}

function checkboxset(){

	function setcheckbox(result){
		console.log(result);
		document.getElementById("webpage_checkbox").value = result;
		// also for ui_checkbox
	}

	function error(error){
		console.log(error);
	}

	thing = browser.storage.local.get("pages");
	thing.then(setcheckbox, error);
}

document.addEventListener("DOMContentLoaded", addsavelistener);