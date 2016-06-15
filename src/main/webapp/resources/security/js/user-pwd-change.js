$(function() {
	$("#userId").html(getQueryString("userId"));
	//提交
	$('#subBtn').click(function() {
	    if(!$("#jsForm").valid()){
			return false;
		}
		var data = {};
		var t = $('form').serializeArray();
		$.each(t, function() {
			data[this.name] = this.value;
		});
		var url = $("#basePath").val()+"/user/pwd/change";
		doPostAjax(url, data, doSuccessBack);
	});
	
	//返回
	$('#backBtn').click(function() {
		sessionStorage.setItem('activeMenu', 'user.htm');
		$('.nav li a', window.parent.frames['topFrame'].document).first().trigger('click');
	});
	
	//入参合法性校验
	$("#jsForm").validate({
		rules: {
			oldLoginPwd: {
				required: true,
				maxlength: 12,
				minlength: 6
			},
			newLoginPwd: {
				required: true,
				maxlength: 12,
				minlength: 6
			}
		},
		messages: {
			oldLoginPwd: {
				required: "请输入旧密码",
				maxlength: jQuery.format("旧密码不能大于{0}个字符"),
				minlength: jQuery.format("旧密码不能小于{0}个字符")
			},
			newLoginPwd: {
				required: "请输入新密码",
				maxlength: jQuery.format("新密码不能大于{0}个字符"),
				minlength: jQuery.format("新密码不能小于{0}个字符")
			}
		}
	});
});

function doSuccessBack(res) {
	if (res.success == true) {
		alert("操作成功");
		sessionStorage.setItem('activeMenu', 'user.htm');
		$('.nav li a', window.parent.frames['topFrame'].document).first().trigger('click');
	}else{
		alert(res.msg);
	}
}