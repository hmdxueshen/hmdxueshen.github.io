function showPic(whicp)
{
	var soure = 	whicp.getAttribute("href");
	var pla = 	document.getElementById("zwf");
	pla.setAttribute("src",soure);	
	var text = whicp.getAttribute("title");
	var des = document.getElementById("des");
	des.firstChild.nodeValue = text;
}