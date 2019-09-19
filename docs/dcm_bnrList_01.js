$(function(){
	var _UA = navigator.userAgent;
	if (_UA.indexOf('iPhone') > -1 || _UA.indexOf('iPod') > -1 || _UA.indexOf('iPad') > -1) {
		
		$.getJSON('https://fed579.github.io/docs/bnrList_01.json', {
				ts: new Date().getTime()
			}, function(data) {
			var
			box1 = $('#dcm_bnrList_box01'),
			len = data.length;
			html = '<ul>';
			html += '';
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
});
