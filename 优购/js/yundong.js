$(function(){
			$('.nav_1 div').hover(function(){
				$(this).children('ul').show();
			},function(){
				$(this).children('ul').hide();
			});
			$('.nav_1 a').hover(function(){
				$(this).addClass('active').parent('div').siblings().removeClass('active');
				$(this).parent('div').addClass('hover').siblings().removeClass('hover');
			},function(){
				$(this).removeClass('active');
				$(this).parent('div').removeClass('hover');
			})
			$('.nav_1_2').hover(function(){
				$(this).children('div').show();
			},function(){
				$(this).children('div').hide();
			})
			$('.nav_1_4').hover(function(){
				$('.sp1').hide().siblings().show();
			},function(){
				$('.sp2').hide().siblings().show();
			})
			$(".nav_body_3_1").hover(function(){
				if(parseInt($('.nav_s_1 span').text())> 0){
					$('.nav_dis').hide();
				}else{
					$('.nav_dis').show();
				}
			},function(){
				$('.nav_dis').hide();
			})
			$('.h_drop_box li').hover(function(){
				$(this).children('.drop_dis1').show();
			},function(){
				$(this).children('.drop_dis1').hide();
			})
			
			var i = 0;
			var clone = $('.lb_ul li').first('li').clone();
			$('.lb_ul').append(clone);
			var size = $('.lb_ul li').size();
			$('.num li').first('li').addClass('on').siblings().removeClass('on');
			function moveL(){
				i++;
				if(i==size){
//					$('.lb_ul').css({'left':"0px"});
					i=1;
				}
//				$('.lb_ul').stop().animate({left:-990*i});
				$('.lb_ul li').eq(i).stop().fadeIn().siblings().fadeOut();

				if(i==size-1){
					$('.num li').eq(0).addClass('on').siblings().removeClass('on');
				}else{
					$('.num li').eq(i).addClass('on').siblings().removeClass('on');
				}
			}
			function moveR(){
				i--;
				if(i==-1){
//					$('.lb_ul').css({'left':"-4950px"});
					i=size-2;
				}
//				$('.lb_ul').stop().animate({left:-990*i});
				$('.lb_ul li').eq(i).stop().fadeIn().siblings().fadeOut();

				$('.num li').eq(i).addClass('on').siblings().removeClass('on');
			}
			
			$('.num li').hover(function(){
				i=$(this).index();
//				$('.lb_ul').stop().animate({left:-990*i},500);
				$('.lb_ul li').eq(i).stop().fadeIn().siblings().fadeOut();

				$(this).addClass('on').siblings().removeClass('on')
			})
			
			var t = setInterval(function(){
				moveL();
			},2000)
			
			$('.lunbo_box').hover(function(){
				clearInterval(t);
			},function(){
				t = setInterval(function(){
					moveL();
					
				},2000)
			})
			
			
			$('.btn1').click(function(){
				$('.body_ul2').stop().animate({left:-1106});
			})
			$('.btn2').click(function(){
				$('.body_ul2').stop().animate({left:0});
			})
			
			$('#tab li').hover(function(){
				$(this).addClass('black').siblings().removeClass('black');
				$(this).children('a').addClass('white').parent('li').siblings().children('a').removeClass('white');
				$(this).children('i').show().parent('li').siblings().children('i').hide();
				var i = $(this).index();
				$('.show_ul').eq(i).show().siblings().hide();
			})
			
			$('.foot_hd_firsta').click(function(){
				$('.foot_show_box2').show();
				$('.foot_show_box1').hide();
			})
			$('.foot_hd_seconda').click(function(){
				$('.foot_show_box1').show();
				$('.foot_show_box2').hide();
			})
			$('.fixd_a').click(function(){
				$('.fixd').hide();
			})
			
		})