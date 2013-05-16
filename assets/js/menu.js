var link = el('#link');
var menu = el('#context-menu-link');
var links = el("#context-menu-link a");
var l = 0;

document.addEventListener('contextmenu', desabilitaMenu);
link[0].addEventListener('mousedown', contextMenu);


while(l < links.length){
	links[l].addEventListener('click', hideMenus);
	++l;
}


function desabilitaMenu(e) {
	
	e.cancelBubble = true;
    e.returnValue = false;

}

function hideMenus(e){
	
	var i = 0;
	var menu = el('.context-menu');

	while(i < menu.length){

		var classList = menu[i].classList;

		if(e.button != 2 && e.witch != 3){
			if(classList.contains('show') == true){
				classList.remove('show');
			}
		}
		++i;

	}
	

}

function contextMenu(e){

	var menu = el('#context-menu-'+this.id);

	var classList = c('#context-menu-'+this.id);

	if(e.button == 2 || e.witch == 3){

		if(classList.contains('show') == false){
			classList.add('show');
			menu[0].style.top = e.x+"px";
			menu[0].style.left = e.y+"px";
		}else{
			classList.remove('show');
		}

	}		

}