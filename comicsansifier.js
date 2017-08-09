function error(error){
	console.log(error);
}

function comicsans(result){
	if(result.webpage){
		link = document.createElement("link");
		link.href = browser.extension.getURL("sheet.css");
		link.type = "text/css";
		link.rel = "stylesheet";
		document.getElementsByTagName("head")[0].appendChild(link);
	}
}

browser.storage.local.get().then(comicsans, error);