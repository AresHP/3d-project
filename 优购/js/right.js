$(function(){
	$.ajax({
		type:"post",
		url:"js/right.json",
	    success:function(data){
	    	$.each(data,function(key,val){
	    		$(".concent_right .drop_ul").append('<li><a href="#"><img src="'+val+'"/></a></li>')
	    	})
	    }
	})
})
