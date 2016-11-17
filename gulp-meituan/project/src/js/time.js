$(function(){
	var timer =setInterval(function(){
		var s = parseInt($('.t-3').text());
		var m = parseInt($('.t-2').text());
		var h = parseInt($('.t-1').text());
		s--;
		if(s==-1){
			s=59;
			m--;
			if(m==-1){
				m=59;
				h--;
				$('.t-1').text(h);
			}
			$('.t-2').text(m);
		}
		$('.t-3').text(s);
		
		if(h==0&&m==0&&s==0){
			clearInterval(timer);
		}
	},1000)
})