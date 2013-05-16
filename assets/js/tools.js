var id = function(el) {

	return document.getElementById(el);

};

var className = function(el, p) {

	(p == null) ? p = document.body : '';
		
	var a = [];
    var re = new RegExp('(^| )'+el+'( |$)');
    var els = p.getElementsByTagName("*");
    for(var i=0,j=els.length; i<j; i++)
        if(re.test(els[i].className))a.push(els[i]);
    return a;

};

function keyExists( key, arr ) {
    for(var i = 0, len = arr.length; i < len; i++) {
        if( arr[ i ].key === key )
            return true;
    }
    return false;
}


var attr = function(el, attr, value) {

	return (value != '') ? el.setAttribute(attr, value) : el.getAtrribute(attr);

}

var firstChild = function(parent, child) {

	return parent.getElementsByTagName(child)[0];

};

function eventListener(el, e, f) {

	if (el.addEventListener) {
		el.addEventListener(e, f);
	} else if (el.attachEvent) {
		el.attachEvent('on' + e, f);
	}

}

function setCookie(c_name, value, exdays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value = escape(value)
			+ ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
	document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
	var i, x, y, ARRcookies = document.cookie.split(";");
	for (i = 0; i < ARRcookies.length; i++) {
		x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
		y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
		x = x.replace(/^\s+|\s+$/g, "");
		if (x == c_name) {
			return unescape(y);
		}
	}
}

function alteraTamanhoDiv(objetoAtual, removeCss) {
    var elemento = new Array();
    var altura = 0;
    var topAtual = 0;

    $(objetoAtual).each(function () {
        elemento[0] = $(this);

        if (removeCss == true) {
            elemento[0] = $(this).css({ height: "auto" });
        }

        if (elemento[0].offset().top == topAtual) {
            if (elemento[0].height() > altura) {
                altura = elemento[0].height();
            }

            if ($(this)[0] == $(objetoAtual + ":last")[0]) {
                $(objetoAtual).each(function () {
                    elemento[2] = $(this);

                    if (elemento[2].offset().top == topAtual) {
                        elemento[2].css({
                            'height': altura
                        });
                    }
                });
            }
        } else {
            $(objetoAtual).each(function () {
                elemento[1] = $(this);

                if (elemento[1].offset().top == topAtual) {
                    elemento[1].css({
                        'height': altura
                    });
                }
            });

            topAtual = elemento[0].offset().top;
            altura = elemento[0].height();
        }
    });
}