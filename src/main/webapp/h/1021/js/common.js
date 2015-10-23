var piaojukeScript = {
	version: 'piaojuke.com v2.0',

	caseTab: function(a, b) {
		var that = this;
		$(a).each(function(i, o) {
			$(o).click(function() {
				$(a).removeClass('on');
				$(this).addClass('on');
				$(b).hide().eq(i).show();
			});
		});
	},

	bankTab: function(a, b) {
		var that = this;
		$(a).each(function(i, o) {
			$(o).click(function() {
				$(a).removeClass('choice');
				$(this).addClass('choice');
				$(b).hide().eq(i).show();
			});
		});
	},
	pop: function(idname) {
		var that = this;
		var blackbgh = document.documentElement.scrollHeight;
		$('.black').css('height', blackbgh);
		var window_height = $(window).height();
		//var top = (parseInt(window_height) - parseInt($(idname).height())) / 2 + 'px';
		$(idname).css('top', '60px');
		$(idname).show();
		$('.black').show();
		$('.close').click(function() {
			that.close(idname);
		});
	},
	close: function(idname) {
		var that = this;
		$(idname).hide();
		$('.black').hide();
	},
	init: function() {
		var that = this;


		that.caseTab('.procon dt li', '.procon dd');
		that.caseTab('.intelbtn a');
		that.bankTab('.method li');
		/*
		$('.popbanked').bind('click', function() {
			$('.choicebank').slideToggle();
			return false;
		});
		*/
	},

	userInit: function() {
		var that = this;

		$('.bankcard li').eq(0).addClass('on');
		$('.bankcard li,.amount').click(function() {
			var bankID = $('.bankcard li.on').attr('bankid');
			$('#cardid').val(bankID);
		});
		$('#mention').bind('click', function() {
			var val = $('#verify_picture').val();
			if (val == '' || val == null) {
				$('#verify_picture').css({
					'border': '1px solid rgb(255, 0, 0)'
				});
			}
		});
		$('#add_bank').bind(' click', function() {
			$('.showbank').slideToggle();
			return false;
		});
		$('#open_bank,.modbank').bind(' click',function(){
			//$('.choicebank').slideToggle();
			that.pop('.choicebank');
			
		});
		that.bankTab('.choicebank li');

		$('#savecard').click(function() {
			var card = $('.choicebank li.choice>em').attr('id');
			$('#bankval').val(card);
			switch (card) {
			case 'CMB':
				$('.popbanked').html('<div class="CMB cards"></div>');
				break;
			case 'ICBC':
				$('.popbanked').html('<div class="ICBC cards"></div>');
				break;
			case 'CCB':
				$('.popbanked').html('<div class="CCB cards"></div>');
				break;
			case 'SPDB':
				$('.popbanked').html('<div class="SPDB cards"></div>');
				break;
			case 'ABC':
				$('.popbanked').html('<div class="ABC cards"></div>');
				break;
			case 'CIB':
				$('.popbanked').html('<div class="CIB cards"></div>');
				break;
			case 'BOB':
				$('.popbanked').html('<div class="BOB cards"></div>');
				break;
			case 'CEB':
				$('.popbanked').html('<div class="CEB cards"></div>');
				break;
			case 'CMBC':
				$('.popbanked').html('<div class="CMBC cards"></div>');
				break;
			case 'CITIC':
				$('.popbanked').html('<div class="CITIC cards"></div>');
				break;
			case 'CGB':
				$('.popbanked').html('<div class="CGB cards"></div>');
				break;
			case 'PAB':
				$('.popbanked').html('<div class="PAB cards"></div>');
				break;
			case 'BOC':
				$('.popbanked').html('<div class="BOC cards"></div>');
				break;
			case 'BCOM':
				$('.popbanked').html('<div class="BCOM cards"></div>');
				break;
			case 'PSBC':
				$('.popbanked').html('<div class="PSBC cards"></div>');
				break;
			default:
				$('.popbanked').html('<em></em>选择银行');
			}
			
			that.close('.choicebank');
			return false;
		});

		if($('.cardno')[0]){
			for(var i =0;i<=$('.cardno').length;i++){
				$('.cardno').eq(i).html($('.cardno').eq(i).text().substr(-4));
			}
		}

		//pay bank
		$('.morebank').bind('click',function(){
			$('.overbank').slideToggle();
			return false;
		});

		/**/
		$('.overbank li').bind('touchstart click',function(){
			var bankname = $(this).children('em').html();
			$('#bank-name').html(bankname);
			$('.overbank').slideUp();
			$('.overbank').slideUp();
			//return false;
		});
		$('#payments .kuaijie').bind('touchstart click',function(){
			$('#bank-name').html('更多银行&gt;&gt;');
		});


$('body').delegate('.Switch li ,.Switch td,.Switch .swiper-slide', "touchstart", function(e) {
	var that = $(this);
	that.parents('.Switch').find('li,td,.swiper-slide').removeClass('on');
	that.addClass('on');
})

$('.user_record a').bind('touchstart click',function(){
	openback();
});

$('body').delegate('.SabWrap td,.SabWrap li', "touchstart click", function(e) {
	var that = $(this);
	that.parents('.SabWrap').find('.container dd').hide();
	that.parents('.SabWrap').find('.container dd:eq(' + that.index() + ')').show();
})

	},
	cardSuccess: function() {
		var that = this;

	},
	deleSuccess: function() {
		var that = this;

	},
	switchIntel : function(){
		var that = this;
		$('#intelment .ioscheck').click(function(){
			var target = $(this);
			if (target.hasClass("off")) {
				target.removeClass("off");
				target.addClass("on");
				//$('#tact').text('开启');
			} else {
				target.removeClass("on");
				target.addClass("off");
				//$('#tact').text('关闭');
			}
			var intel = document.getElementById('inteldo').value;
			if (parseInt(intel) === 1) {
				document.getElementById('inteldo').value = '0';
			} else {
				document.getElementById('inteldo').value = '1';
			}
		});	
		setTimeout(function() {
			$('#reserve_invest').trigger("click");
		}, 1000);
	}

}


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

function checkedit() {
	var moneynum = document.getElementById('fen_shu_sc').value;
	var inintnum = document.getElementById('minnum').innerHTML;
	var touzi = document.getElementById('tuo_zi').innerHTML;
	if (moneynum == '' || moneynum == null) {
		document.getElementById('fen_shu_sc').style.border = '1px solid rgb(255, 0, 0)';
		document.getElementById('buynow').value = '请输入购买金额';
		return false;
	}
	if (parseInt(moneynum) < parseInt(inintnum)) {
		document.getElementById('fen_shu_sc').style.border = '1px solid rgb(255, 0, 0)';
		document.getElementById('buynow').value = '认购份数低于限制';
		return false;
	}
	if (document.getElementById('ancenum')) {
		var ancenum = document.getElementById('ancenum').innerHTML;
		if (parseInt(touzi) > parseInt(ancenum)) {
			document.getElementById('fen_shu_sc').style.border = '1px solid rgb(255, 0, 0)';
			document.getElementById('buynow').value = '您的余额不足请充值';
			return false;
		}
	}
}

function payedit() {
	var payval = document.getElementById('payvalue').value;
	if (payval == '' || payval == null) {
		document.getElementById('payvalue').style.border = '1px solid rgb(255, 0, 0)';
		document.getElementById('paynow').value = '请输入充值金额';
		return false;
	}
	//if (payval < 1) {
	//	document.getElementById('paynow').value = '充值金额必须大于0';
	//	return false;
	//}
	//if (payval < 100) {
	//	document.getElementById('paynow').value = '充值金额必须大于100';
	//	return false;
	//}
	if(document.getElementById("isShow").value == 1){
		if($("#card_no").val()==""){
			document.getElementById('card_no').style.border = '1px solid rgb(255, 0, 0)';
		return false;
	}
		if($("#code").val()==""){
			document.getElementById('code').style.border = '1px solid rgb(255, 0, 0)';
		return false;
	}
		if($("#province").val()=="0"){
			document.getElementById('province').style.border = '1px solid rgb(255, 0, 0)';
			return false;
		}
		if($("#city").val()=="0"){
			document.getElementById('city').style.border = '1px solid rgb(255, 0, 0)';
		return false;
	}
	}
	document.getElementById('paynow').value = '立即充值';
}


$(function() {
	piaojukeScript.init();
})



