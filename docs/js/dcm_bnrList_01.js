(function (){
	var box1 = $('#dcm_bnrList_box01');
	var _UA = navigator.userAgent;
	if (_UA.indexOf('iPhone') > -1 || _UA.indexOf('iPod') > -1 || _UA.indexOf('iPad') > -1) {
		
		$.getJSON('https://fed579.github.io/docs/bnrList_01.json', {
				ts: new Date().getTime()
		})
		.done(function(data) {
			var html = '<style>';
				html += '#dcm_bnrList_box01 *{margin:0;padding:0;border:0;box-sizing: border-box;list-styl-type: none;text-decoration: none; box-sizing: content-box;}';
				html += '#dcm_bnrList_box01 li{margin: 0px auto 5px; display: table; width: 95%;}';
				html += '#dcm_bnrList_box01 li:first-child{margin-top:10px;} #dcm_bnrList_box01 li:last-child{margin-bottom:10px;}';
				html += '#dcm_bnrList_box01 a{display: block; width: 100%; padding: 10px; overflow: hidden; border-radius: 5px; border: solid 1px #CCC; background-color: #FFF; box-sizing: border-box;}';
				html += '#dcm_bnrList_box01 figure{ display: table-cell;width: 52px; height: 52px; float: left; border: solid 1px #ccc;}';
				html += '#dcm_bnrList_box01 figure + div{ padding-left: 10px; display:table-cell ; vertical-align: middle; height: 54px;}';
				html += '#dcm_bnrList_box01 figure + div p:first-of-type{font-size: 14px; color:#0044CC; font-weight: bold; text-decoration: underline;line-height: 1.2em; margin-bottom:2px;}';
				html += '#dcm_bnrList_box01 figure + div p:nth-of-type(2){font-size: 12px; color:#212121;line-height: 1.2em; margin-bottom:0;}';
				html += '#web #dcm_bnrList_box01 li{margin: 0px; width: 100%;}';
				html += '#web #dcm_bnrList_box01 a{display: block; width: 100%; padding: 10px; overflow: hidden; border-radius: 0; border: none; background-color: #FFF; box-sizing: border-box;}';
				html += '</style>';
				html += '<ul>';
				for(var i in data) {
					html += '<li>';
					html += '<a href="' + data[i].url + '">';
					html += '<figure><img src="' + data[i].image + '" alt="image" width="100%"></figure>';
					html += '<div>';
					html += '<p>' + data[i].title + '</p>';
					html += '<p>' + data[i].content + '</p>';
					html += '</div>';
					html += '</a>';
					html += '</li>';
				}
				html += '</ul>';
				box1.html(html);
			
		})
		.fail(function(jqXHR, textStatus, errorThrown){
			box1.hide();
		});
	}else{
		box1.hide();
	}
})();
