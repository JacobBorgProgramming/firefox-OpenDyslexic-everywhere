function addsavelistener(){

	document.getElementById("webpage_link").addEventListener("click", savewebpage);
	//TODO: also for ui_link

	textset();
}

// also for ui
function savewebpage(){
	webpage = ~webpage;
	browser.storage.local.set({
		webpage: webpage
	});
	browser.tabs.reload();
	window.location.reload();
}

function textset(){

	function settext(result){
		webpage = result.webpage;
		document.getElementById("webpage_link").innerHTML = webpage ? "Disable in webpages" : "Enable in webpages";
		// also for ui_checkbox
	}

	function error(error){
		console.log(error);
	}

	thing = browser.storage.local.get();
	thing.then(settext, error);
}

document.addEventListener("DOMContentLoaded", addsavelistener);
webpage = true;
ui = true;