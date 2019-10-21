(function (){
	var _UA = navigator.userAgent;
	if (_UA.indexOf('iPhone') > -1 || _UA.indexOf('iPod') > -1 || _UA.indexOf('iPad') > -1) {
		
		$.getJSON('https://fed579.github.io/docs/null.json', {
				ts: new Date().getTime()
		})
		
		.done(function(data) {
			if(data.length){

				var
				box1 = $('#dcm_bnrList_box01'),
				len = data.length;
				html = '<ul>';
				html += '<style>#dcm_bnrList_box01 *{margin:0;padding:0;border:0;box-sizing: border-box;list-styl-type: none;text-decoration: none; box-sizing: content-box;}#dcm_bnrList_box01{ width:95%;margin: 10px auto;}#dcm_bnrList_box01 li{margin-bottom: 5px; display: table; width: 100%;}#dcm_bnrList_box01 li:last-child{margin-bottom:0;}#dcm_bnrList_box01 a{display: block; width: 100%; padding: 10px; overflow: hidden; border-radius: 5px; border: solid 1px #CCC; background-color: #FFF; box-sizing: border-box;}#dcm_bnrList_box01 figure{ display: table-cell;width: 52px; height: 52px; float: left; border: solid 1px #ccc;}#dcm_bnrList_box01 figure + div{ padding-left: 10px; display:table-cell ; vertical-align: middle; height: 54px;}#dcm_bnrList_box01 figure + div p:first-of-type{font-size: 14px; color:#0044CC; font-weight: bold; text-decoration: underline;line-height: 1.2em; margin-bottom:2px;}#dcm_bnrList_box01 figure + div p:nth-of-type(2){font-size: 12px; color:#212121;line-height: 1.2em; margin-bottom:0;}#web #dcm_bnrList_box01{ width: 100%; margin: 0 auto;}#web #dcm_bnrList_box01 li{margin-bottom:0;}#web #dcm_bnrList_box01 a{display: block; width: 100%; padding: 10px; overflow: hidden; border-radius: 0; border: none; background-color: #FFF; box-sizing: border-box;}</style>';
				for(var i = 0; i < len; i++) {
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
			}else{$('#dcm_bnrList_box01').hide();}	
		})
		.fail(function(jqXHR, textStatus, errorThrown){
			$('#dcm_bnrList_box01').hide();
			
		});
	
	}else{
		$('#dcm_bnrList_box01').hide();
	
	}
})();
