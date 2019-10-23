(function (){
	var box2 = $('#dcm_bnrList_box02');
	var _UA = window.navigator.userAgent.toLowerCase();
	if (_UA.indexOf('iphone') > -1 || _UA.indexOf('ipod') > -1 || _UA.indexOf('ipad') > -1 || _UA.indexOf('macintosh') > -1 && 'ontouchend' in document) {
		$.getJSON('https://fed579.github.io/docs/bnrList_02.json', {
				ts: new Date().getTime()
		})
		.done(function(data) {
			var html = '<style>';
			html += '#dcm_bnrList_box02 *{margin:0;padding:0;border:0;box-sizing: border-box;list-styl-type: none;text-decoration: none; box-sizing: content-box;}';
			html += '#dcm_bnrList_box02 li{margin: 0px 8px 5px;}';
			html += '#dcm_bnrList_box02 li:first-child{margin-top:10px;}';
			html += '#dcm_bnrList_box02 li:last-child{margin-bottom:10px;}';
			html += '#dcm_bnrList_box02 li a{display: block;}</style>';
			html += '<ul>';
			for(var i in data) {
				html += '<li>';
				html += '<a href="' + data[i].url + '">';
				html += '<img src="' + data[i].image + '" alt="image" width="100%">';
				html += '</a>';
				html += '</li>';
			}
			html += '</ul>';
			box2.html(html);
		})
		.fail(function(jqXHR, textStatus, errorThrown){
			box2.hide();
		});

	}else{
		box2.hide();
	}
})();
