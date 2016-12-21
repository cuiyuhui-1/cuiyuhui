;
(function(method) {
	method(window, window.document, jQuery);
}(function(win, doc, $) {
	$.fn.SuperPlus = function(options) {
		//默认参数
		var setting={
			//每次增加的长度
			length:3,
			//加号的颜色
			color:"blue",
			//回调事件，点击后执行
			changeAfter:null   
		};
		//使用用户的参数覆盖默认参数
		$.extend(setting,options);
		
		return $.each(this, function(index, obj) {
			$("<span/>").html("+").css("cursor", "pointer").css("color",setting.color).click(function() {
				$(obj).width($(obj).width() + setting.length);
				//如果用户指定了回调事件
				if(setting.changeAfter)
				{
					//执行用户带入的方法将当前对象作为参数带出
					setting.changeAfter($(obj));
				}
			}).insertAfter(obj);
		});
	}
}));