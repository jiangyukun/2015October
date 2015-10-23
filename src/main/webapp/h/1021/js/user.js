var city = [
	["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "海淀区", "丰台区", "石景山区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "门头沟区", "密云区", "延庆区"],
	["广州", "深圳", "珠海", "汕头", "韶关", "佛山", "江门", "湛江", "茂名", "肇庆", "惠州", "梅州", "汕尾", "河源", "阳江", "清远", "东莞", "中山", "潮州", "揭阳", "云浮"],
	["黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "宝山区", "闵行区", "嘉定区", "松江区", "金山区", "青浦区", "南汇区", "奉贤区", "浦东新区", "崇明区"],
	["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "北辰区", "津南区", "武清区", "宝坻区", "静海县", "宁河县", "蓟县"],
	["渝中区", "大渡口区", "江北区", "南岸区", "北碚区", "渝北区", "巴南区", "长寿区", "双桥区", "沙坪坝区", "万盛区", "万州区", "涪陵区", "黔江区", "永川区", "合川区", "江津区", "九龙坡区", "南川区", "綦江县", "潼南区", "荣昌区", "璧山区", "大足区", "铜梁县", "梁平县", "开县", "忠县", "城口县", "垫江区", "武隆县", "丰都县", "奉节县", "云阳县", "巫溪县", "巫山县"],
	["沈阳", "大连", "鞍山", "抚顺", "本溪", "丹东", "锦州", "营口", "阜新", "辽阳", "盘锦", "铁岭", "朝阳", "葫芦岛"],
	["南京", "苏州", "无锡", "常州", "镇江", "南通", "泰州", "扬州", "盐城", "连云港", "徐州", "淮安", "宿州"],
	["武汉", "黄石", "十堰", "荆州", "宜昌", "襄樊", "鄂州", "荆门", "孝感", "黄冈", "咸宁", "随州", "仙桃", "天门", "潜江", "神农架"],
	["成都", "自贡", "攀枝花", "泸州", "德阳", "绵阳", "广元", "遂宁", "内江", "乐山", "南充", "眉山", "宜宾", "广安", "达州", "雅安", "巴中", "资阳"],
	["西安", "铜川", "宝鸡", "咸阳", "渭南", "延安", "汉中", "榆林", "安康", "商洛"],
	["石家庄", "唐山", "秦皇岛", "邯郸", "邢台", "保定", "张家口", "承德", "沧州", "廊坊", "衡水"],
	["太原", "大同", "阳泉", "长治", "晋城", "朔州", "晋中", "运城", "忻州", "临汾", "吕梁"],
	["郑州", "开封", "洛阳", "平顶山", "安阳", "鹤壁", "新乡", "焦作", "濮阳", "许昌", "漯河", "三门峡", "南阳", "商丘", "信阳", "周口", "驻马店", "焦作"],
	["吉林", "长春", "四平", "辽源", "通化", "白山", "松原", "白城", "延边朝鲜自治区"],
	["哈尔滨", "齐齐哈尔", "鹤岗", "双鸭山", "鸡西", "大庆", "伊春", "牡丹江", "佳木斯", "七台河", "黑河", "绥化", "大兴安岭地区"],
	["呼和浩特", "包头", "乌海", "赤峰", "通辽", "鄂尔多斯", "呼伦贝尔", "巴彦淖尔", "乌兰察布", "锡林郭勒盟", "兴安盟", "阿拉善盟"],
	["济南", "青岛", "淄博", "枣庄", "东营", "烟台", "潍坊", "济宁", "泰安", "威海", "日照", "莱芜", "临沂", "德州", "聊城", "滨州", "菏泽"],
	["合肥", "芜湖", "蚌埠", "淮南", "马鞍山", "淮北", "铜陵", "安庆", "黄山", "滁州", "阜阳", "宿州", "巢湖", "六安", "亳州", "池州", "宣城"],
	["杭州", "宁波", "温州", "嘉兴", "湖州", "绍兴", "金华", "衢州", "舟山", "台州", "丽水"],
	["福州", "厦门", "莆田", "三明", "泉州", "漳州", "南平", "龙岩", "宁德"],
	["长沙", "株洲", "湘潭", "衡阳", "邵阳", "岳阳", "常德", "张家界", "益阳", "滨州", "永州", "怀化", "娄底", "郴州"],
	["南宁", "柳州", "桂林", "梧州", "北海", "防城港", "钦州", "贵港", "玉林", "百色", "贺州", "河池", "来宾", "崇左"],
	["南昌", "景德镇", "萍乡", "九江", "新余", "鹰潭", "赣州", "吉安", "宜春", "抚州", "上饶"],
	["贵阳", "六盘水", "遵义", "安顺", "铜仁", "毕节", "黔东南苗族侗族自治州"],
	["昆明", "曲靖", "玉溪", "保山", "邵通", "丽江", "普洱", "临沧"],
	["拉萨", "那曲地区", "昌都地区", "林芝地区", "山南区", "阿里区", "日喀则"],
	["海口", "三亚", "五指山", "琼海", "儋州", "文昌", "万宁", "东方", "澄迈县", "定安县", "屯昌县", "临高县"],
	["兰州", "嘉峪关", "金昌", "白银", "天水", "武威", "酒泉", "张掖", "庆阳", "平凉", "定西", "陇南", "临夏", "甘南"],
	["银川", "石嘴山", "吴忠", "固原", "中卫"],
	["西宁", "海东地区", "海北藏族自治区", "海南藏族自治区", "黄南藏族自治区", "果洛藏族自治区", "玉树藏族自治州", "还西藏族自治区"],
	["乌鲁木齐", "克拉玛依", "吐鲁番地区", "哈密地区", "和田地区", "阿克苏地区", "喀什地区", "克孜勒苏柯尔克孜", "巴音郭楞蒙古自治区", "昌吉回族自治州", "博尔塔拉蒙古自治区", "石河子", "阿拉尔", "图木舒克", "五家渠", "伊犁哈萨克自治区", "阿勒泰地区"],
	["中西区", "湾仔区", "东区", "南区", "深水埗区", "油尖旺区", "九龙城区", "黄大仙区", "观塘区", "北区", "大埔区", "沙田区", "西贡区", "元朗区", "屯门区", "荃湾区", "葵青区", "离岛区"],
	["花地玛塘区", "圣安多尼塘区", "大堂区", "望德堂区", "风顺堂区", "嘉模堂区", "圣方济各堂区", "路凼"],
	["台北市", "高雄市", "台北县", "桃园县", "新竹县", "苗栗县", "台中县", "彰化县", "南投县", "云林县", "嘉义县", "台南县", "高雄县", "屏东县", "宜兰县", "花莲县", "台东县", "澎湖县", "基隆市", "新竹市", "台中市", "嘉义市", "台南市"]
]

function getCity(obj) {
	var sltProvince = obj||document.getElementById("province");
	var sltCity = document.getElementById("city");
	var provinceCity = city[sltProvince.selectedIndex - 1];
	sltCity.length = 1;
	if (provinceCity != undefined) {
		for (i = 0; i < provinceCity.length; i++) {
			sltCity[i + 1] = new Option(provinceCity[i]);
		}
	}
}

$('body').delegate('.Switch li ,.Switch td,.Switch .swiper-slide', "click", function(e) {
	var that = $(this);
	that.parents('.Switch').find('li,td,.swiper-slide').removeClass('on');
	that.addClass('on');
})

$('body').delegate('.SabWrap td,.SabWrap li', "click", function(e) {
	var that = $(this);
	that.parents('.SabWrap').find('.container dd').hide();
	that.parents('.SabWrap').find('.container dd:eq(' + that.index() + ')').show();
})

//$('body').delegate('#paynow [type="submit"]', "click", function(e) {});
	
$('body').delegate('img', "click", function(e) {
	var src = $(this).attr('src');
	if (src.indexOf('form/picture') > 0) {
		$(this).attr("src", "/form/picture/" + Math.random());
	}
})

function StopCode(id) {
	document.getElementById('send').disabled = true;
	var i = 60;
	var interval = window.setInterval(function() {
		if (i == 0) {
			$(id).html('重新发送');
			document.getElementById('send').disabled = false;
			clearInterval(interval);
		} else {
			var object = $(id)[0];
			if (object) {
				object.innerHTML = '重新发送(' + i + ')';
				i--;
			}
		}
	}, 500);
}

$('body').delegate('[type="send"]', "click", function(e) {
	var that = $(this);
	var data = new Array();
	data[0] = $('#verify_picture').val();
	data[1] = $('#send_tel').val();
	if (!data[0] || data[0] == '') {
		that.html('请先输入图片验证码');
		return false;
	}
	var url = that.attr('url');
	that.html('正在提交');
	var send_out = $.post(url, {
		data: data
	}, function(data, status) {
		that.html(data);
		if (data == '发送成功' || data == '发送失败') {
			StopCode('.second');
		}
		if (data == '图片验证码错误') {
			$('#verify_pic').trigger("click");
		}
	}).error(function(data, status) {
		StopCode('.second');
		$('#verify_pic').trigger("click");
	});
})

function Popup_show(width, height) {
	cen_height = $(window).height();
	cen_width = $(window).width();
	var top = (cen_height - height) / 2;
	var left = (cen_width - width) / 2;
	$('#Popup').css({
		height: height,
		width: width,
		top: top,
		left: left
	});
	$('#Popup_bg').show();
	$('#Popup').show();
}

function Popup_hide(width, height) {
	$('#Popup_bg').hide();
	$('#Popup').hide();
}

function caseTab(a, b) {
	var that = this;
	$(a).each(function(i, o) {
		$(o).click(function() {
			$(a).removeClass('on');
			$(this).addClass('on');
			$(b).hide().eq(i).show();
		});
	});
}

function currentTime(category) {
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
}




history_url='';
function calls_content(url,position)
{
	if(history_url!=url)
	{
		var this_time=currentTime('time');
		history_url=url;
		position.html('');
		$.ajaxSettings.async=false;
		var send_out=$.post(url,
		{
			timeid:this_time,
		},function(data,status)
		{
			async:false;
			position.html(data);
			//alert(data);
			if(data == '您已离线')
			{
				Popup_show(300,80);
				$('#Popup .container_p').html('您已登陆超时');
				setTimeout(function()
				{
					location.replace('/user/welcome/');
				},1500);
			}
		})
		.success(function(data,status)
		{
			history_url='';
			piaojukeScript.userInit();
			//return data;
		})
		.error(function(data,status)
		{
			return'error';
		});
	}
}
function openback(){
	$('body').delegate('[type="open"]',"touchstart click",function()
	{
		var that=$(this);
		if(that.attr('open_data'))
		{
			var pge_data=that.attr('open_data').split(',');
			if(!pge_data[0]||pge_data[0]==''||pge_data[0]=='/'){return;}
			var url=pge_data[0];
			var location=$(pge_data[1]);
			var width=pge_data[2];
			var height=pge_data[3];
			var iframe=pge_data[4];
			if(pge_data[1]=='#Popup .container_p')
			{
				Popup_show(width,height);
			}
		}
		var data=calls_content(url,location);
	});

}

openback();

function from_empty(element) {
    var i = 0;
    var ck_email = /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/;
    var ck_number = /^[0-9]*$/;
    var ck_tel = /^[1][3][0-9]{9}$/;
    var ck_chinese = /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/;
    var email = $('input[type="email"]').val();
    element.each(function() {
        var that = $(this);
        var val = that.val();
        var type = that.attr('type');
        var empty = that.attr('empty');
        if (type != 'checkbox') {
            if ((!val && empty != 'true') || (type == 'ck_email' && ck_email.test(val) == false) || (type == 'ck_number' && ck_number.test(val) == false) || (type == 'ck_tel' && ck_tel.test(val) == false) || (type == 'ck_chinese' && ck_chinese.test(val) == false)) {
                that.css('border', '1px solid #f00');
                i++;
            } else {
                that.css('border', '1px solid #5ba8e4');
            }
        }
    });
    $('input.bottom').css({
        'border-top': 0
    });
    if (i != 0) {
        return false;
    } else {
        return true;
    }
}

function from_pack(e, a, type) {
    if (!type) {
        var i = 0,
        j = 0;
        var data = new Array();　data[i] = new Array();
        e.each(function() {
            var content = $(this).val();
            if (!content) {
                content = $(this).html();
            }
            if (a == 0) {
                data[i] = content;
                i++;
            } else {
                if (j != 0 && (j + 1) % a) {
                    j = 0;
                    i++;
                    data[i] = new Array();
                }
                data[i][j] = content;
                j++;
            }
        });
    } else if (type == 'string') {
        var data = '';
        e.each(function() {
            if ($(this).val()) {
                data += $(this).val() + ',';
            } else {
                data += $(this).html() + ',';
            }
        });
    }
    return data;
}

var flag = true;//
$('body').delegate('[type="async_form"] [type="submit"]', "touchend click",
function() {
	if(!flag){
		return ;
	}
	flag = false;
	console.log("-----...");
    var that = $(this);
    var box = that.parents('[type="async_form"]');
    var selected = box.find('input[type!="button"],select,textarea');
    var data = from_pack(selected, 0);
    //if (from_empty(selected) == false) { 
    //    that.html('信息不完整');
    //    return false;
    //}
	//alert(data);return;
    var url_data = that.attr('url').split(',');
    var url = url_data[0];
    if (url == '/account/register/1') {
        var regs = /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i;
        var phone = /1[3-9]+\d{9}/;
        var password = document.getElementById("password").value;
        var surepass = document.getElementById("surepass").value;
        var number = document.getElementById("send_tel").value;
        if (!phone.test(number)) {
            that.html('手机号不正确');
            return false;
        }
        if (password !== surepass) {
            that.html('两次密码不一致');
            return false;
        }
        if (!regs.test(password) || password.length < 6 || password.length > 15) {
            that.html('密码必须为6-15位数字字母组合');
            return false;
        }
        /*
        if (!$('#agree').is(':checked')) {
            that.html('请勾选协议');
            return false;
        }
        */
    }else if(url == '/form/bankcard/'){
		openHref();
    }
    /*
    if (url == '/form/drafts_order/') {
        if (!$('#agree').is(':checked')) {
            that.html('请勾选协议');
            return false;
        }
    }
    */

	if (url == '/form/active/1') {
		var password = document.getElementById("password").value;
        var surepass = document.getElementById("surepass").value;
		if (password !== surepass) {
            that.html('两次密码不一致');
            return false;
        }
		if (password.length < 6) {
            that.html('交易密码不能少于 6 位字符');
            return false;
        }
	}

	if (url == '/form/retrieve/1') {
		var regs = /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i;
        var phone = /1[3-9]+\d{9}/;
        var password = document.getElementById("password").value;
        var surepass = document.getElementById("surepass").value;
        /*
        var number = document.getElementById("send_tel").value;
        if (!phone.test(number)) {
            that.html('手机号不正确');
            return false;
        }
        */
        if (password !== surepass) {
            that.html('两次密码不一致');
            return false;
        }
        if (!regs.test(password) || password.length < 6 || password.length > 15) {
            that.html('密码必须为6-15位数字字母组合');
            return false;
        }
	}
	if(url == '/form/reserve_change/'){

		piaojukeScript.switchIntel();
		
	}
    if (url_data[2] != 'off') {
        that.html('正在提交');
    }

    if(url == '/form/bankcard/'){
    	$('#province').val();
		$('#city').val();
		if($('#province').val()==0 || $('#city').val()==0)
		{
			that.html('请选择开户城市');
			return false;
		}
		/*
		var sf = document.getElementById('province').value;
    	var sq = document.getElementById('city').value;
    	if(sf==0||sq==0){
            
            return false;
    	}
		*/
    }
	//alert(data);return;
	
    var send_out = $.post(url, {
        data: data
    },
    function(data, status) {
		//flag=true;
        if (url_data[2] != 'off') {
            that.html(data);
        }
        var patt_1 = new RegExp('成');
        if (patt_1.test(data)) {
            var patt_2 = new RegExp('/');
            if (url_data[1] && patt_2.test(url_data[1])) {
                window.location.href = url_data[1];
            } else if(url_data[1] != ''){
                //Popup_show(300, 80);
                //var data = calls_content('/form/form_prompt/', $('#Popup .container_p'));
                setTimeout(function() {
                    $(url_data[1]).trigger("click");
                    //Popup_hide(0, 0);
                },
                1000);
            }
        }
		if(data == '账户或密码错误')
		{
			var verify = '<dd><label>验证码：</label> <input id="verify_picture" type="text" tip="请输入验证码" class="reg form-control vercode" value="" placeholder="请输入验证码"><a href="javascript:;" title="看不清，点击换一张？"><img src="/form/picture/" id="verify_pic"/></a></dd>';
			var i = that.parents('dl').find('input').length;
			if(i == 2)
			{
				//$(that.parents('dl').find('#login_password')).after(verify);
			}
			else if(i == 1)
			{
				window.location.href = $('#change_account').attr('href');
				//$('#change_account').trigger("mouseenter");
			}
		}
		
    }).success(function(data, status) {}).error(function(data, status) {
        that.html(data);
    });
});
onerror = function(msg, url, line) {
    var errorMsg = msg + ",\n url" + url + ",\n line:" + line;
    alert(errorMsg);
}
function balance() {
    var money = parseFloat(document.getElementById('bala').innerHTML);
    var bala = parseFloat(document.getElementById('payvalue').value);
    var count = money + bala;
    document.getElementById('count').innerHTML = count.toFixed(2);
}