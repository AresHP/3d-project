$(function(){
	    var index = 0;
	    //但滚动条滚动到底部时加载更多的东西
	    $(window).on('scroll',function(){
	    	
	    	var scrollTop = $(window).scrollTop();
	    	//文档内容的高度
	    	var docHeight = $(document).height();
	    	//窗口的高度
	    	var widHeight = $(window).height();
	    	//滚到底部触发
	    	$('.jiazai').hide();
	    	if(scrollTop >= 700){
	    		$('.fixd').show();
	    	}
	    	
	    	if(scrollTop >= docHeight - widHeight){
	    		
	    		index++;
	    		if(index<=4){
	    			ajax();
	    			$('.jiazai').show();
	    		}else{
	    			$('.jiazai').hide();
	    		}
	    	}
	    })
	 
	    ajax();
	    
	    
	    function ajax(){
			$.ajax({
				url:'http://diviner.jd.com/diviner?p=610009&uuid=12396477&lid=1&lim=15&cb=tempGuessLikeCallback',
				dataType:'jsonp',
//						jsonp: 'callback',
				jsonpCallback: 'tempGuessLikeCallback',
				scriptCharset:'gb2312', 
				success:function(res){
					var data = res.data;
					var _html = '';
					$.each(data,function(idx,obj){
						// 把json的图片路径先放在新增的data-lazy-img属性里面，等数据处理完了再替换src属性
//								_html += '<li><div class="p-img"><a href="' + obj.clk +'"><img src="images/load.jpg" data-lazy-img="http://img13.360buyimg.com/n1/s200x200_'+ obj.img +'"></a></div><div class="p-name"><a href="">' + unescape(obj.t) + '</a></div><div class="p-price"><b>' + obj.jp + '</b></div></li>';
						console.log(obj);
						$('.concent ul').append('<li><img src="http://img13.360buyimg.com/n1/s200x200_'+ obj.img +'"/><div class="title-box"><div class="title">'+obj.t+'</div><div><p>'+obj.jp+'元</p><span>已售：'+obj.c3+'</span></div></div></li>')
					});
//							$('<ul/>').addClass('list-'+index).html(_html).appendTo($datalist);
					
					// 回调函数，等数据全部拼接完再执行
					
				}
			});
	    }
	    
	    
	    $('.fixd').click(function(){
	    	$(window).scrollTop(0);
	    	if($(window).scrollTop(0)){
	    		$('.fixd').hide();
	    	}
	    })
	    
})

