/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-search' : '&#xe000;',
			'icon-twitter' : '&#xe001;',
			'icon-facebook' : '&#xe002;',
			'icon-feed' : '&#xe003;',
			'icon-menu' : '&#xe004;',
			'icon-clock' : '&#xe005;',
			'icon-arrow-up' : '&#xe006;',
			'icon-arrow-right' : '&#xe009;',
			'icon-arrow-left' : '&#xe007;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};