function addsavelistener(){

	webpagebox = document.getElementById("webpage_checkbox");
	ui = true; //TODO: goed maken ook voor ui

	webpagebox.addEventListener("change", savewebpage);
	//TODO: also for ui_checkbox

	checkboxset();
}

function icon(web, ui){
	if(web ^ ui)
		browser.browserAction.setIcon({path: "icon_partially.png"});
	else
		browser.browserAction.setIcon({path: 
		(web ? "icon_active.png" : "icon_inactive.png")
	});
}

function savewebpage(){
	// also for ui

	browser.storage.local.set({
		webpage: webpagebox.checked
	});

	icon(webpagebox.checked, true);

}

function checkboxset(){

	function setcheckbox(result){
		
		webpagebox.checked = result.webpage;
		// also for ui_checkbox

		icon(webpagebox.checked, true);
	}

	function error(error){
		console.log(error);
	}

	thing = browser.storage.local.get();
	thing.then(setcheckbox, error);
}

var webpagebox;

document.addEventListener("DOMContentLoaded", addsavelistener);