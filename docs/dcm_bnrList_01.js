window.onload = function() {
	var _UA = navigator.userAgent;
	if (_UA.indexOf('iPhone') > -1 || _UA.indexOf('iPod') > -1 || _UA.indexOf('iPad') > -1) {
		
		$.getJSON('./output.json' , function(data) {
			var
			box1 = $('#dcm_bnrList_box01'),
			len = data.length;
			html = '<ul>';
			html += '<style>#dcm_bnrList_box01 *{margin:0;padding:0;border:0;box-sizing: border-box;list-styl-type: none;text-decoration: none;}#dcm_bnrList_box01{ background-color: #FFF; width:100%;}#dcm_bnrList_box01 a{display: block;padding: 10px;overflow: hidden;}#dcm_bnrList_box01 figure{ width: 54px; height: 54px; float: left; border: solid 1px #EEE;}#dcm_bnrList_box01 figure + div{ padding-left: 10px; display: table-cell; vertical-align: middle; height: 54px;}#dcm_bnrList_box01 figure + div p:first-of-type{font-size: 14px; color:#0044CC; font-weight: bold; text-decoration: underline;line-height: 1.2em; margin-bottom:4px;}#dcm_bnrList_box01 figure + div p:nth-of-type(2){font-size: 12px; color:#000;line-height: 1.2em; margin-bottom:0;}</style>';
			for(var i = 0; i < len; i++) {
				html += '<li>';
				html += '<a href="' + data[i].url + '">';
				html += '<figure><img src="' + data[i].image + '" alt="image"></figure>';
				html += '<div>';
				html += '<p>' + data[i].title + '</p>';
				html += '<p>' + data[i].content + '</p>';
				html += '</div>';
				html += '</a>';
				html += '</li>';
			}
			html += '</ul>';
			box1.html(html);
		});
	
	}else{
		$('#dcm_bnrList_box01').hide();
	
	}
};
