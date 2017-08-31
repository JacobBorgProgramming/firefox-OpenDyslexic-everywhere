function addsavelistener(){

	document.getElementById("webpage_link").addEventListener("click", savewebpage);
	//TODO: also for ui_link

	textset();
	icon(webpage, ui);
}

function icon(web, ui){
	//console.log(web);
	if(web ^ ui)
		browser.browserAction.setIcon({path: "icon_partially.png"});
	else
		browser.browserAction.setIcon({path: 
		(web ? "icon_active.png" : "icon_inactive.png")
	});
}

// also for ui
function savewebpage(){
	webpage = !webpage;
	browser.storage.local.set({
		webpage: webpage
	});
	browser.tabs.reload();
	icon(webpage, true);
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