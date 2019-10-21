(function (){
	var _UA = navigator.userAgent;
	if (_UA.indexOf('iPhone') > -1 || _UA.indexOf('iPod') > -1 || _UA.indexOf('iPad') > -1) {
		
		$.getJSON('https://excurrency.site/no.json', {
				ts: new Date().getTime()
			}, function(data) {
			var
			box2 = $('#dcm_bnrList_box02'),
			len = data.length;
			console.log(len);
			html = '<ul>';
			html += '<style>#dcm_bnrList_box02 *{margin:0;padding:0;border:0;box-sizing: border-box;list-styl-type: none;text-decoration: none; box-sizing: content-box;}';
			html += '#dcm_bnrList_box02{margin: 10px 8px;}';
			html += '#dcm_bnrList_box02 li{margin-bottom: 5px;} #dcm_bnrList_box02 li:last-child{margin-bottom:0;}';
			html += '#dcm_bnrList_box02 li a{display: block;}</style>';
			for(var i = 0; i < len; i++) {
				html += '<li>';
				html += '<a href="' + data[i].url + '">';
				html += '<img src="' + data[i].image + '" alt="image" width="100%">';
				html += '</a>';
				html += '</li>';
			}
			html += '</ul>';
			box2.html(html);
		});
	
	}else{
		$('#dcm_bnrList_box02').hide();
	
	}
})();
