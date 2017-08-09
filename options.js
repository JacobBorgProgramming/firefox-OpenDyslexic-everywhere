function addsavelistener(){

	document.getElementById("webpage_checkbox").addEventListener("change", save);
	//TODO: also for ui_checkbox

	checkboxset();
}

function save(){
	// also for ui
	browser.storage.local.set({
		webpage: document.getElementById("webpage_checkbox").checked
	});
}

function checkboxset(){

	function setcheckbox(result){
		document.getElementById("webpage_checkbox").checked = result.webpage;
		// also for ui_checkbox
	}

	function error(error){
		console.log(error);
	}

	thing = browser.storage.local.get();
	thing.then(setcheckbox, error);
}

document.addEventListener("DOMContentLoaded", addsavelistener);