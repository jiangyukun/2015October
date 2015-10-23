/*
 * www.piaojuke.com mobile style,author,Ming;@verson:m.piaojuke.com mobile vista
 * Controller :: Frame: @sea @swipe @chart 
 *
 */


var piaojuke_Controller = {

	version: 'piaojuke.com mobile',

	//intro
	introLogo : function(){
		var that = this;
		$('.intro').css({
			width : $(window).width(),
			height : $(window).height()
		}).fadeIn(3000,function(){

			setTimeout(function(){
				$('.intro').fadeOut(0);
				that.loading('.intro','');
				that.introBanner();
				return false;
			},3000);

		});

	},

	//theintro
	introBanner : function(){
		var that = this;
		//var introdom = '<div class="device"><div class="swiper-banner"><div class="swiper-wrapper"><div class="swiper-slide"> <img src="images/intro1.jpg"> </div><div class="swiper-slide"> <img src="images/intro2.jpg"> </div><div class="swiper-slide"> <img src="images/intro3.jpg"> </div></div></div><div class="pagination"></div></div>';
		$('section').append('<!--banner--><div class="device introbanner"><div class="swiper-banner"><div class="swiper-wrapper"><div class="swiper-slide"> <img src="images/intro1.jpg"> </div><div class="swiper-slide"> <img src="images/intro2.jpg"> </div><div class="swiper-slide"> <a href="javascript:;" id="start"><img src="images/intro3.jpg"></a> </div></div></div><div class="pagination"></div></div><!--banner eof-->');
		
		$('.device').css({
			width : $(window).width(),
			height : $(window).height()
		})

		//存储图片链接信息的关联数组
		var sources = {
			a : './images/intro1.jpg',
			b : './images/intro2.jpg',
			c : './images/intro3.jpg'
		}
		//调用图片预加载函数，实现回调函数
		that.loadImages(sources, function(images){

			piaojuke_Model.introBanner('.swiper-banner');
			
			//$('#loading').remove();
		});

		$('#start').bind('click touchstart',function(){
			$('.introbanner').remove();
			
			setTimeout(function(){
				that.startPage();
			},1000);
			
		});
	},

	//loading
	loading : function(a,b){
		var that = this;
		$('#loading').css({'height':$(document).height()}).show();
		$(a).fadeOut(0);
		//$('section').append('');

		setTimeout(function(){
			if($('#loading').length>0){
				$('#loading').fadeOut();
			}
			
		},1000);
		
	},

	startPage : function(){
		var that = this;
		that.loading('.intro','');
		if($('article').length>0){
			$('article').show();
		}
		$('#banner').append('<div class="device"><div class="swiper-banner"><div class="swiper-wrapper"><a class="swiper-slide" href="/36/"> <img src="/images/banner/banner1.jpg"> </a> </div></div><div class="pagination"></div></div>');
		//首页Banner
		//piaojuke_Model.bannerSl('.swiper-banner');
		/*
		if($('#wrapper')[0]){
			document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
			window.onload = isloaded();
		}
		*/
	},

	//图片载入后回调
	//参数sources:图片信息关联数组
	//参数callback:回调函数——图片预加载完成后立即执行此函数。
	loadImages : function(sources, callback){
		var that = this;
	    var count = 0,
	        images ={},
	        imgNum = 0;
	    for(src in sources){
	        imgNum++;
	    }
	    for(src in sources){
	        images[src] = new Image();
	        images[src].onload = function(){
	            if(++count >= imgNum){
	                callback(images);
	            }
	        }
	        images[src].src = sources[src];
	    }
	},

	currentTime : function(category) {
		var that = this;

		var d = new Date(),
			str = '';
		if (category == 'date' || category == 'all') {
			str += d.getFullYear() + '-';
			if (d.getMonth() < 10) {
				str += 0;
			}
			str += d.getMonth() + 1 + '-';
			if (d.getDate() < 10) {
				str += 0;
			}
			str += d.getDate() + ' ';
		}
		if (category == 'time' || category == 'all') {
			if (d.getHours() < 10) {
				str += 0;
			}
			str += d.getHours() + ':';
			if (d.getMinutes() < 10) {
				str += 0;
			}
			str += d.getMinutes() + ':';
			if (d.getSeconds() < 10) {
				str += 0;
			}
			str += d.getSeconds();
		}
		return str;
	},

	
	calls_content : function(url,position){

		var that = this;
		history_url = '';
		if(history_url != url){
			var this_time = that.currentTime('time');
			history_url = url;
			position.html('');
			
			$.ajaxSettings.async = false;
			var send_out = $.post(url,{
				timeid:this_time,
			},function(data,status){
				async:false;
				//position.html(data);

			}).success(function(data,status){
				history_url='';

				position.html(data);
				that.loading();



				//存储图片链接信息的关联数组
				var sources = {
					d : './images/banner.png',
					e : './images/logo.png'
				}
				that.loadImages(sources, function(images){
					//$('#loading').remove();
					//that.controllMain();
					//piaojuke_Model.bannerSl('.swiper-banner');
				});


			}).error(function(data,status){
				return'error';
			});
		}
	},

	controllBack : function (a){
		var that = this;
		if(a){
			var pge_data = (a).split(',');
			if(!pge_data[0]||pge_data[0]==''||pge_data[0]=='/'){return;}
			var url = pge_data[0];
			var location = $(pge_data[1]);
			var width = pge_data[2];
			var height = pge_data[3];
			var iframe = pge_data[4];	

			var data = that.calls_content(url,location);

		}else{
			$('body').delegate('[type="open"]','touchstart click',function(){
				var other = $(this);
				if(other.attr('open_data')){
					var pge_data = other.attr('open_data').split(',');
					if(!pge_data[0]||pge_data[0]==''||pge_data[0]=='/'){return;}
					var url = pge_data[0];
					var location = $(pge_data[1]);
					var width = pge_data[2];
					var height = pge_data[3];
					var iframe = pge_data[4];
					if(pge_data[1]=='#Popup .container')
					{
						Popup_show(width,height);
					}
				}
				var data = that.calls_content(url,location);
			});

		}


	},

	//首页框架
	controllMain : function(){
		var that = this;
		function setContentSize() {
			$('section').css({
				height: $(window).height()-$('.swiper-nav').height()
			})
			
		}
		//Pheight
		setContentSize();
		$(window).resize(function(){
			setContentSize()
		})
		var tabsSwiper = new Swiper('.swiper-container',{
			speed:500,
			onSlideChangeStart: function(){
			  $('#footer .active').removeClass('active');
			  $('#footer label').eq(tabsSwiper.activeIndex).addClass('active');

			}
		});
		$("#footer label").on('touchstart mousedown',function(e){
			e.preventDefault();
		$("#footer .active").removeClass('active');
			$(this).addClass('active');
			tabsSwiper.swipeTo( $(this).index());
		})
		$("#footer label").click(function(e){
			e.preventDefault();
		});

		
	},



	init : function(){
		var that = this;

		//check cookie
		var cookies = document.cookie;
		var pos = cookies.indexOf('piaojuke_e=');
		if(pos != -1){
		    var start = pos + 11;
		    var end = cookies.indexOf(';',start);
		    if(end == -1) var end = cookies.length;
		    var cookieName = cookies.substring(start, end);
			
			
			that.startPage();
			//that.startPage();

			//that.controllBack('./templates/home.php,#main');
			//that.introBanner();

		}else{
			that.introLogo();
			piaojuke_Model.setCookie('piaojuke_e','piaojukehemingming');
			
		}

		if($('.swiper-container-nav')[0]){

			var mySwiper = new Swiper('.swiper-container-nav', {
				//pagination: '.pagination',
				loop: false,
				grabCursor: true,
				paginationClickable: false,
				//autoplay: 6000,
				 slidesPerView: 3
			})
			$('.glyphicon-chevron-left').on('click', function(e) {
				e.preventDefault();
				mySwiper.swipePrev();
			});
			$('.glyphicon-chevron-right').on('click', function(e) {
				e.preventDefault();
				mySwiper.swipeNext();
			});


			/*

		  var mySwiperNav = new Swiper('.swiper-container-nav',{
		    paginationClickable: true,
		    slidesPerView: 3,
			onSlideChangeStart: function(){
				tabStart()
			},
			onSlideClick: function(){
				tabStart()
			}
			
		  })

		  function tabStart(){
				$('.swiper-container-nav .swiper-slide').click(function () {
					if (!$(this).hasClass('active')) {
						$('.swiper-container-nav .swiper-slide').removeClass('active');
						$(this).addClass('active');
						//$('.rulebox div.parent').hide();
						//$('.rulebox div.parent:eq(' + $('.ruletab > li a').index(this) + ')').show();
					};
				});
		  }
		  */
		}

		//location touch
		$('#footer a').bind('touchstart click',function(){
			var url = $(this).attr('rel');
			setTimeout(function(){
				window.location.href = url+'?'+Math.round(Math.random()*999);
			},100);
			that.loading();
			return false;
		});

		/*
		$('header a').bind('touchstart',function(){
			var url = $(this).attr('href');
			setTimeout(function(){
				window.location.href = url+'?'+Math.round(Math.random()*999);
			},100);
			that.loading();
			return false;
		});
		
		*/
		$('.home_box a').bind('touchstart',function(){
			//var url = $(this).attr('rel');
			$('.home_box a').css({'background-color':'#fff'});
			$(this).css({'background-color':'#ffcc00'});
			
		});
		$('.home_box a').bind('touchend',function(){
			//var url = $(this).attr('rel');
			$('.home_box a').css({'background-color':'#fff'});
			$(this).css({'background-color':'#fff'});
			
		});
		

		//person
		if($('.progress-button').length>0){
			$('.progress-button').each(function(){
				var number = $(this).children('#person').text();
				$(this).children('button').html(parseInt(number)+'%');
				var circle = 204-number/100*204;
				$(this).children().find('.svg-path').css({'stroke-dasharray': '204.243713378906px','stroke-dashoffset': circle +'px'});
				//$(this).children('svg').html('<path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z" style="stroke-dasharray: 204.243713378906px;stroke-dashoffset: '+ circle +'px;"/>');
			});
		}

		if($('#perbar').length>0){
			var perbar = $('#perbar').text().split('%')[0];
			console.log(perbar);
			$('.progress-nav em').animate({'width':perbar+'%'},500);
		}


	}

}



//控制器初始化
$(window).load(function () {

	piaojuke_Controller.init();
});

var myScroll,indexScroll;

function isloaded() {
	$('#wrapper').css('height',$('#wrapper dl').length*$('#wrapper dl').height()+40);
	$('#scroller').css('height',$('#scroller dl').length*$('#scroller dl').height()+400);
	var myScroll = new IScroll('#wrapper', {
		mouseWheel: true,
		momentum:false,
		bounceLock:true,
		useTransform:true,
		useTransition:true
		//bounce:false
	});

}









/*
document.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, false);
*/

//touchstart事件
function touchSatrtFunc(evt) {
    try {
        //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
 
        var touch = evt.touches[0]; //获取第一个触点
        var x = Number(touch.pageX); //页面触点X坐标
        var y = Number(touch.pageY); //页面触点Y坐标
        //记录触点初始位置
        startX = x;
        startY = y;
 
 
    } catch (e) {
        alert('touchSatrtFunc：' + e.message);
    }
}
 
//touchmove事件，这个事件无法获取坐标
function touchMoveFunc(evt) {
    try {
        //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
        var touch = evt.touches[0]; //获取第一个触点
        var x = Number(touch.pageX); //页面触点X坐标
        var y = Number(touch.pageY); //页面触点Y坐标
 
 
//document.getElementById("version").innerHTML = "原:"+startY+"   "+"现:"+y;
        //判断滑动方向 上下
        //console.log(y-startY);
        if (y - startY > 100) {
            
            swipeDown(y);//你自己的方法 我是用来翻页的一样的

        } else if(y - startY < -100){
            swipeUp();//你自己的方法
        }
    } catch (e) {
        alert('touchMoveFunc：' + e.message);
    }
}
 
//touchend事件
function touchEndFunc(evt) {
    try {
        //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等

    } catch (e) {
        alert('touchEndFunc：' + e.message);
    }
}
 
//绑定事件
function bindEvent() {
    document.addEventListener('touchstart', touchSatrtFunc, false);
    document.addEventListener('touchmove', touchMoveFunc, false);
    document.addEventListener('touchend', touchEndFunc, false);
}
 
//判断是否支持触摸事件
function isTouchDevice() {
    //document.getElementById("version").innerHTML = navigator.appVersion;
 
    try {
        document.createEvent("TouchEvent");
        //alert("支持TouchEvent事件！");
 
        bindEvent(); //绑定事件
    } catch (e) {
        alert("不支持TouchEvent事件！" + e.message);
    }
}
 
//列表页加载
var DomTrue = $('.loadbox')[0];
if(typeof(DomTrue)==='object'){
	bindEvent();
}



function swipeDown(){
	$('.pro-index').css({'margin-top':80});
	$('.loadbox').html('下拉刷新...');
	setTimeout(function(){
		moveEnd();
	},1000);	
}

function moveEnd(){
		$('.loadbox').html('<p id="loadMobile" style="text-align:center;"><img src="/images/load.gif"></p>');
		$('.pro-index').animate({'margin-top':0});
		setTimeout(function(){
			$('#loadMobile').remove();window.location.reload(true);
		},800);
}

function swipeUp(){
	$('.loadend').html('<p id="loadEnd" style="text-align:center;padding:1em 0;z-index:1;">最新产品就这些啦~</p>');
		setTimeout(function(){
			$('#loadEnd').remove();
		},2000);
}
