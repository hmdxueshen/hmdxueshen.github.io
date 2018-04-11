function showPic(whicp)
{
	var soure = 	whicp.getAttribute("href");
	var pla = 	document.getElementById("asdf");
	pla.setAttribute("src",soure);	
	
	var text = whicp.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}