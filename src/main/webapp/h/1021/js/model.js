/*
 * www.piaojuke.com mobile style,author,Ming;@verson:m.piaojuke.com mobile vista
 * Model :: Frame: @sea @swipe @chart 
 *
 */

var piaojuke_Model ={

	version: 'piaojuke.com mobile',

	//cookie
	setCookie : function(name,value){
		var that = this;
	    var Days = 365;
	    var exp  = new Date();
	    exp.setTime(exp.getTime() + Days*24*60*60*1000);
	    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
	},
	//introbanner
	introBanner : function(a){
		var that = this;
		var mySwiper = new Swiper(a,{
			pagination: '.pagination',
			grabCursor: true,
			paginationClickable: true,
		})
	},

	//banner
	bannerSl : function(a){
		var that = this;
		var mySwiper = new Swiper(a,{
			//pagination: '.pagination',
			loop:true,
			grabCursor: true,
			paginationClickable: true,
			autoplay:5000,
			autoplayDisableOnInteraction:false
		})
	},

	init : function(){
		var that = this;

		//导航
		$('.dropdown-toggle').dropdown();
		//banner
		//that.bannerSl('.swiper-banner');
		//结构控制器
		//piaojuke_Controller.controllMain();

	}

}









$(window).load(function () {
	

	//模块初始化
	piaojuke_Model.init();
	
});



function allCount() {
	if (document.getElementById("alled").checked) {
		var shengyu = document.getElementById("fen_shu").innerHTML;
		var maxnum = parseInt(document.getElementById("maxnum").innerHTML);
		if (shengyu > maxnum) {
			document.getElementById("fen_shu_sc").value = maxnum;
		} else {
			document.getElementById("fen_shu_sc").value = shengyu;
		}
		checkCount();
		return false;
	} else {
		document.getElementById("fen_shu_sc").value = '';
		document.getElementById("tuo_zi").innerHTML = '0.00';
		document.getElementById("yu_qi").innerHTML = '0.00';
	}
}

function checkCount() {
	var tuo_zi = parseInt(document.getElementById("fen_shu_sc").value);
	var minnum = parseInt(document.getElementById("minnum").innerHTML);
	var maxnum = parseInt(document.getElementById("maxnum").innerHTML);
	var shengyu = parseInt(document.getElementById("fen_shu").innerHTML);
	var li_lu = document.getElementById("li_lu").innerHTML;
	var r_qi = document.getElementById("days").innerHTML;
	var zhi = li_lu.substring(0, li_lu.length - 1) * tuo_zi * r_qi* unitnum / 36000;
	var unitnum = document.getElementById("unitnum").innerHTML;
	if (tuo_zi > maxnum) {
		if (shengyu > maxnum) {
			tuo_zi = document.getElementById("maxnum").innerHTML;
			document.getElementById("fen_shu_sc").value = document.getElementById("maxnum").innerHTML;
		} else {
			tuo_zi = document.getElementById("fen_shu").innerHTML;
			document.getElementById("fen_shu_sc").value = document.getElementById("fen_shu").innerHTML;
		}
		document.getElementById("tuo_zi").innerHTML = tuo_zi * unitnum;
		document.getElementById("yu_qi").innerHTML = zhi.toFixed(2);
		return false;
	} else {
		var li_lu = document.getElementById("li_lu").innerHTML;
		document.getElementById("tuo_zi").innerHTML = tuo_zi * unitnum;
		var r_qi = document.getElementById("days").innerHTML;
		var zhi = li_lu.substring(0, li_lu.length - 1) * tuo_zi * r_qi* unitnum / 36000;
		document.getElementById("yu_qi").innerHTML = zhi.toFixed(2);
	}
	if (tuo_zi === 0) {
		document.getElementById("fen_shu_sc").value = '';
	}
	if (isNaN(tuo_zi)) {
		document.getElementById("tuo_zi").innerHTML = '0.00';
		document.getElementById("yu_qi").innerHTML = '0.00';
	}
}
