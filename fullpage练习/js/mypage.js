$(function(){
	var k = $(window).height();//当前屏幕的高度
	//点击next往下滚动一屏幕
	$(".next").click(function(event){
		$.fn.fullpage.moveSectionDown();
	});
	$('#fullpage').fullpage( {
		//是否显示项目导航
		navigation:true,
		//滚动到最底部是否滚回顶部
		//loopBottom:true,
		//滚动到最顶部是否滚回底部
		//loopTop:true,
		//滚动速度 ，单位毫秒
		scrollingSpeed:1200,

		//回调函数，滚动到第二屏才触发的函数
		afterLoad:function(anchorlink, index){
			if(index == 2 ){
				$(".next").fadeOut(); 
				//缓动动画要加到时间的后面，回调函数的前面
				$(".search").show().animate({"right":370},1500,"easeOutBack",function(){
					//方块走进来，沙发2字显示
					$(".search-words").animate({"opacity":1},500,function(){
						$(".search").hide();
						//图片 往右上角走，缩小
						$(".search-02-1").show().animate({"height":30,"right":250,"bottom":452},1000);
						//同时沙发图片变大
						$(".goods-02").show().animate({"height":218},1000);
						//同时白色文字显示
						$(".words-02").animate({"opacity":1},500,function(){
							$(".next").fadeIn();
						});
					});
				});
			}
		},

		//刚开始滚动屏幕就触发的回调函数 onLeave
		onLeave:function(index,nextIndex,direction){
			$(".next").fadeOut(); 
			if(index == 2 && nextIndex == 3 ){
				//当第二屏幕往第三屏幕滚动的时候，沙发显示并且往第三屏幕跑，白色盒子显示
				//沙发盒子要往第三屏幕走，走的距离就是当前屏幕的高度 - main到底部的高低 - 沙发到main底部的高度 
				$(".shirt-02").show().animate({"bottom":-(k-250),"width":207,"left":260},2000,function(){
					$(".img-01-a").animate({"opacity":1},500,function(){
						$(".btn-01-a").animate({"opacity":1},500,function(){
							$(".next").fadeIn();
						});
					});
				});
				$(".cover").show();
			}
			//第3屏到第4屏的滚动
			if(index == 3 && nextIndex == 4){
				$(".shirt-02").hide();
				//沙发的距离 当前屏幕的高度 - 250 + 第三屏幕的50距离
				$(".t1f").show().animate({"bottom":-((k-250) + 50),"left":260},2000,function(){
					$(this).hide(); //动画做完毕后自动隐藏
					$(".car-img").show();
					//这辆购物车就开始往右走
					$(".car").animate({"left":1900},3000,"easeInElastic",function(){
						$(".note").show();
						$(".note-img,.words-04-a").animate({"opacity":1},1000,function(){
							$(".next").fadeIn();
						});
					});
				})
			}

			//第4屏幕到第5屏幕过渡
			if(index == 4 && nextIndex == 5){
				//小手上来
				$(".hand-05").animate({"bottom":0},2000,function(){
					//鼠标显示
					$(".mouse-05-a").animate({"opacity":1});
					//沙发从800到70
					$(".t1f-05").show().animate({"bottom":70},1000,function(){
						//单子上来，走完后文字翻转
						$(".order-05").animate({"bottom":390},function(){
							$(".words-05").addClass("words-05-a");
							$(".next").fadeIn();
						});
					})
				});
			}


			//第5屏幕到第6屏幕过渡
			if(index == 5 && nextIndex == 6){
				//沙发的距离 当前屏幕的高度减去box的bottom 500
				$(".t1f-05").animate({"bottom":-(k - 500),"left":"40%","width":65},1500,function(){
					$(".t1f-05").hide();
				});
				$(".box-06").animate({"left":"38%"},1500,function(){
					$(".box-06").animate({"bottom":40},500,function(){
						$(".box-06").hide();

						//行走的过程就是背景移动的过程
						$(".section6").animate({"backgroundPositionX":"100%"},4000,function(){
							$(".boy").animate({"height":305,"bottom":116},1000,function(){
								$(this).animate({"right":500},500,function(){
									//门显示出来
									$(".door").animate({"opacity":1},200,function(){
										//之后girl显示出来
										$(".girl").show().animate({"right":350,"height":306},500,function(){
											$(".pop-07").show();
											$(".next").fadeIn();
										})
									});
								});
							});
						});
						//光的速度
						$(".words-06-a").show().animate({"left":"30%"},2000);
						$(".pop-06").show();
					});
				});
			}

			//第6屏幕到第7屏幕过渡
			if(index == 6 && nextIndex == 7){
				setTimeout(function() {
					$(".star").animate({"width":120},500,function(){
						$(".good-07").show();
						$(".next").fadeIn();
					})

				},2000);
			}


			//这是第8屏幕动画
			//$(".beginshoping").mouseenter(function(event){
			//	$(".btn-08-a").show();
			//}).mouseleave(function(event){
			//	$(".btn-08-a").hide();
			//});
			//用hover来替换更简洁  以后一个盒子鼠标经过显示离开隐藏 我们就可以用hover和toggle混搭
			$(".beginshoping").hover(function() {
				$(".btn-08-a").toggle(); //toggle 显示和隐藏的切换
			});
			//大手跟随鼠标移动
			$(document).mousemove(function(event){
				var x=event.pageX - $(".hand-08").width() / 2;//获得鼠标在页面中的x坐标
				var y=event.pageY + 10;//获得鼠标在页面中的y坐标
				//手的top值不能小于这个大小	当前屏幕的高度减去手的高度
				var minY = k - 449;
				if(y<minY){
					//把鼠标在页面中的坐标 给hand 大手的left top
					$(".hand-08").css({"left":x,"top":minY});
				}else{
					$(".hand-08").css({"left":x,"top":y});
				}
			});

			//当我们点击再来一次的时候分二步进行
			$(".again").click(function(event){
				//1.返回第一屏幕
				$.fn.fullpage.moveTo(1);
				//2.所有动画都复原，像没看过一样
				//核心原理就是 让我们的图片（做动画的元素清除行内样式就可以）
				//所有动画的div盒子添加move类名
				$("img,.move").attr("style","");
			});
		},
	});
});