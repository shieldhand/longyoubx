$(document).ready(function(){
		$("body").append("<div id='backtop'></div>")
		$("#backtop").on("click",function(){$("html,body").animate({scrollTop:0},1000);})
		window.onscroll=function(){
				var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
				var pH=document.documentElement.clientHeight;
				var mb=$("#backtop")
				if(scrollTop>=pH){
					mb.show()
				}else{
					mb.hide()
				}
			
			};	
	 $("#backtop").bind("click",function(){
		$("html,body").animate({scrollTop:0},500)
	return false; 
	 })
		if ($("#playBanner").length>0)
		{
		$("#playBanner").ZHYslider({
				fullscreen	:false,
				arrow		:false,		
				speed: 1200, 
				space: 6000,
				auto: true, //自动滚动CD=4
				affect:'fade',
				ctag: '.Slide_'
		})
			
			
		}	
	$.fn.videowindow({btnobj:".btn_video"});
	$.fn.scroll_({arrows:false,mouseWheelSpeed: 30,verticalGutter:15});
	setTimeout(function(){
	$('#Introduction .Tab').Tab({lilab:"li",labselect:".change",Tabname:".Tab_nr",labaction:"click",animatename:"scroll_x",animateTime:300,mode:"none"})},130)
	$.fn.wowanimate_list();
	$.fn.hovers();
})

$.fn.wowanimate_list=function(){
	
	if (typeof(WOW)=='undefined') {return;}
	if ((/msie [6|7|8|9]/i.test(navigator.userAgent))){return;}

	var download	=	$("#download");
	if (download.length>0)
	{
		download.find(".btn_down").css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":0.9+"s","data-wow-delay":0+"ms"})
		download.find(".btn_payment").css("visibility","hidden").addClass("wow fadeInDown").attr({"data-wow-offset":0,"data-wow-duration":0.9+"s","data-wow-delay":0+"ms"})
		download.find(".btn_pay").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.9+"s","data-wow-delay":0+"ms"})
		download.find(".toperweima").css("visibility","hidden").addClass("wow fadeInRight").attr({"data-wow-offset":0,"data-wow-duration":0.9+"s","data-wow-delay":0+"ms"})
		download.find(".list li").each(function(index, element) {

				$(this).css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":(index+1)*0.1+"s","data-wow-delay":100*(index+1)+"ms"})
      });
		
	}

	var playBanner	=	$("#playBanner");
	if (playBanner.length>0)
	{
		playBanner.css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":0.9+"s","data-wow-delay":400+"ms"})
	}
	var Introduction	=	$(".shiwu");
	if (download.length>0)
	{
		Introduction.css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":0.4+"s","data-wow-delay":400+"ms"})
	}

	var Introduction	=	$("#rightbg");
	if (Introduction.length>0)
	{
		Introduction.css("visibility","hidden").addClass("wow fadeInRight").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":300+"ms"})
	}

	var Introduction	=	$("#leftbg");
	if (Introduction.length>0)
	{
		Introduction.css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":0.4+"s","data-wow-delay":400+"ms"})
	}
	var Introduction	=	$("#huishoupic");
	if (Introduction.length>0)
	{
		Introduction.css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.8+"s","data-wow-delay":600+"ms"})
	}

	var Introduction	=	$(".PicList33");
	if (Introduction.length>0)
	{
		Introduction.css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.8+"s","data-wow-delay":600+"ms"})
	}

	var Transaction	=	$("#zhibo02bg");
	if (Transaction.length>0)
	{
		Transaction.css("visibility","hidden").addClass("wow fadeInRight").attr({"data-wow-offset":0,"data-wow-duration":0.6+"s","data-wow-delay":300+"ms"})
	}

	var Transaction	=	$("#zhibo01bg");
	if (Transaction.length>0)
	{
		Transaction.css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":0.6+"s","data-wow-delay":300+"ms"})
	}

	var Transaction	=	$("#carousel");
	if (Transaction.length>0)
	{
		Transaction.css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.6+"s","data-wow-delay":300+"ms"})
	}

	var Transaction	=	$(".PicList22");
	if (Transaction.length>0)
	{
		Transaction.css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.6+"s","data-wow-delay":300+"ms"})
	}

	var Transaction	=	$("#Transaction");
	if (Transaction.length>0)
	{
		Transaction.css("visibility","hidden").addClass("wow fadeInRight").attr({"data-wow-offset":0,"data-wow-duration":1.3+"s","data-wow-delay":600+"ms"})
	}

	var Transaction	=	$("#Transaction1");
	if (Transaction.length>0)
	{
		Transaction.css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":1.3+"s","data-wow-delay":600+"ms"})
	}

	var Game_show	=	$("#Game_show");
	if (Game_show.length>0)
	{
		Game_show.find("h3").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":1.5+"s","data-wow-delay":400+"ms"})
		Game_show.find(".PicList2").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":1.5+"s","data-wow-delay":500+"ms"})
		Game_show.find(".PicList3").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":1.5+"s","data-wow-delay":500+"ms"})
	}



		if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
			if (typeof(WOW)!='undefined')
			{new WOW().init();}
		};	
	
}
//视频弹窗
$.fn.videowindow=function(config){
	
	var videowindow		=	$("#videowindow"),
		videowindow_zz	=	$("#videowindow_zz")
		windowHtml		=	'<div id="videowindow"><span class="btn_closewindow"><em>关闭窗口</em></span></div><div id="videowindow_zz"></div>',
		btn_close		=	videowindow.find(".btn_closewindow"),
		btn_			=	$(config.btnobj),
		videosrc		=	btn_.data("videosrc"),
		videoAutoPlay	=	btn_.data("autoplay"),
		video_w			=	0,
		video_h			=	0,
		kaiguan			=	0,
		writehtml		=	'';
		
		if (videosrc=="" ||  typeof(videosrc)=="undefined") {return;}
		if (videoAutoPlay!==1 || typeof(videoAutoPlay)=="undefined"){videoAutoPlay=0;}

		var clearwindow	=	function(){
			$("#videowindow").empty().remove();
			$("#videowindow_zz").empty().remove();
			videowindow		=	$("#videowindow");
			videowindow_zz	=	$("#videowindow_zz");
		};
	
		var createwindow	=function(){
			kaiguan	=	1;
			if (videowindow.length==0 || videowindow_zz.length==0){
				clearwindow();
				$("body").append(windowHtml);
				videowindow		=	$("#videowindow");
				videowindow_zz	=	$("#videowindow_zz");
				btn_close		=	videowindow.find(".btn_closewindow");
			}
			
				openwindow();
			
			
		};

		if (videowindow.length==0 || videowindow_zz.length==0){
			clearwindow();
			createwindow();
		}
		var openwindow	=	function(){
			videowindow.fadeIn();
			videowindow_zz.fadeIn();
		};	

		video_w	=	videowindow.outerWidth()-20;
		video_h	=	videowindow.outerHeight()-20;
		writehtml='<object class id="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="/download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+video_w+'" height="'+video_h+'">'
			+'<param name="movie" value="flash/Flvplayer.swf">'
			+'<param name="quality" value="high">'
			+'<param value="transparent" name="wmode">'
			+'<param name="allowFullScreen" value="true">'
			+'<param name="FlashVars" value="vcastr_file='+videosrc+'&BufferTime=3&IsAutoPlay='+videoAutoPlay+'">'
			+'<embed src="flash/Flvplayer.swf" wmode="Opaque" allowfullscreen="true" flashvars="vcastr_file='+videosrc+'&IsAutoPlay='+videoAutoPlay+'" quality="high" pluginspage="/www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+video_w+'" height="'+video_h+'"></embed>'
			+'</object>'

	
		//关闭
		$("body").on("click",".btn_closewindow",function(){
			videowindow_zz.fadeOut(200);
			videowindow.fadeOut(200);
			setTimeout(function(){clearwindow();},200)
			
		});
		//打开
		btn_.bind("click",function(){
			if (kaiguan==1) {return;}
			createwindow();
			videowindow.append(writehtml);
			setTimeout(function(){kaiguan=0;},200)
		});
	
	
	
};

//悬停效果
$.fn.hovers=function(){
	$(".list a").append('<span class="border_top"></span><span class="border_right"></span><span class="border_bottom"></span><span class="border_left"></span>');
	$(".list a").hover_animate(
				{
				  aniobj:
				  [
					 
					  [
						  ".border_top",					//应用对象
						  "",//初始CSS
						  "width:100%;left:0;",		//mouseenter动画CSS
						  "width:0px;left:50%;",			//mouseleave动画css
						  "600",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],
					  [
						  ".border_bottom",					//应用对象
						  "",//初始CSS
						  "width:100%;left:0;",		//mouseenter动画CSS
						  "width:0px;left:50%;",			//mouseleave动画css
						  "600",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],
					  [
						  ".border_left",					//应用对象
						  "",//初始CSS
						  "height:100%;top:0;",		//mouseenter动画CSS
						  "height:0px;top:50%;",			//mouseleave动画css
						  "600",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],
					  [
						  ".border_right",					//应用对象
						  "",//初始CSS
						  "height:100%;top:0;",		//mouseenter动画CSS
						  "height:0px;top:50%;",			//mouseleave动画css
						  "600",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			);
	
	
	$(".btn_payment,.btn_pay,.btn_down").append('<span class="border_top"></span><span class="border_right"></span><span class="border_bottom"></span><span class="border_left"></span>');
	$(".btn_payment,.btn_pay,.btn_down").hover_animate(
				{
				  aniobj:
				  [
					 
					  [
						  ".border_top",					//应用对象
						  "",//初始CSS
						  "width:100%;left:0;",		//mouseenter动画CSS
						  "width:0px;left:50%;",			//mouseleave动画css
						  "600",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],
					  [
						  ".border_bottom",					//应用对象
						  "",//初始CSS
						  "width:100%;left:0;",		//mouseenter动画CSS
						  "width:0px;left:50%;",			//mouseleave动画css
						  "600",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],
					  [
						  ".border_left",					//应用对象
						  "",//初始CSS
						  "height:100%;top:0;",		//mouseenter动画CSS
						  "height:0px;top:50%;",			//mouseleave动画css
						  "600",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],
					  [
						  ".border_right",					//应用对象
						  "",//初始CSS
						  "height:100%;top:0;",		//mouseenter动画CSS
						  "height:0px;top:50%;",			//mouseleave动画css
						  "600",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			);
	
	$(".PicList li").append('<i class="arrow_top"></i><i class="arrow_bom"></i>')
	$(".PicList li").hover_animate(
				{
				  aniobj:
				  [
					  [
						  ".photo img",					//应用对象
						  "",//初始CSS
						   "width:110%;height:110%;margin-left:-5%;margin-top:-5%;",		//mouseenter动画CSS
						  "width:100%;height:100%;margin-left:0;margin-top:0;",			//mouseleave动画css
						  "500",					//mouseenter 时间
						  "300",						//mouseleave 时间
						  300,
						  300
					  ],
					  [
						  ".arrow_top",					//应用对象
						  "",//初始CSS
						  "bottom:448px;",		//mouseenter动画CSS
						  "bottom:7px;",			//mouseleave动画css
						  "300",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],
					  [
						  ".arrow_bom",					//应用对象
						  "",//初始CSS
						  "top:448px;",		//mouseenter动画CSS
						  "top:7px;",			//mouseleave动画css
						  "300",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			)
	
}
//滚动条
$.fn.scroll_=function(config){
	var scrollobj=$("[data-scroll]");
	if (scrollobj.length==0) {return;}
	scrollobj.each(function(index, element) {
			var self=$(this);
			if (self.length==0){return;}
			
			var h=parseInt(self.attr("data-scroll-height")),
				w=parseInt(self.attr("data-scroll-width")),
				color=self.attr("data-scroll-color");
				
				self.css({"width":"100%"}).wrap('<div class="container1" style="width:'+w+'px"></div>').wrap('<div class="div_scroll"></div>');
				self.parents('.div_scroll').css({height:h}).scroll_absolute(config)	;
				self.find("img").load(function(){self.parents('.div_scroll').scroll_absolute(config);})
			
			if (typeof(color)!="undefined")
			{setTimeout(function(){self.parents(".container1").find(".scroll_drag").css({"background":color})},500);}
	});
};



//选项卡切换
		$.fn.Tab=function(config){
			var self=$(this);
			var select_=0;
			var classname=config.labselect.replace(".","")
			if (self.length==0) return false;
			if (self.find(config.lilab).length==0) return false;
			
			
			self.each(function(index, element) {
							
				self=$(this);
						
						if (self.find(config.labselect).length==0) 
						{self.find(config.lilab+":eq(0)").addClass(classname);}
						self.find(config.lilab).each(function(index, element) {
							if (!$(this).is(config.labselect))
							{
								self.siblings(config.Tabname+":eq("+index+")").hide();
							}
						});
						
						self.find(config.lilab).bind(config.labaction+".action",function(){
							
							var index=$(this).index();
							if(self.siblings(config.Tabname+":visible").is(":animated")){ 
							return false;
							
							}

							
							if ($(this).is(config.labselect)) return false;
							var index2=$(this).siblings(config.labselect).index()
							$(this).addClass(classname).siblings().removeClass(classname);
							
							config.animate(index,index2,config.animatename)
							return config.labaction=="click"?   false :  true;
						})
						
						config.animate=function(index,index2,active){
							
							switch (active)
							{
								case "fade":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").fadeIn(config.animateTime);
								break;
								case "scroll_x":
									self.parent().css({"position":"relative","overflow":"hidden"});
									var selfs=self.siblings(config.Tabname+":visible")
									var dr="100%",dr2="100%"
									if (index2>index)
									{
										dr="100%";
										dr2="-100%"
									}
									else
									{
										dr="-100%";
										dr2="100%"
									}
									var top=selfs.position().top
									
									
									if (config.mode=="delay")		
									{
									//当前渐隐
									selfs
									.css({"position":"relative","width":"100%"})
									.stop(true,false)
									.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"static","left":"auto","opacity":1,"display":"none"}
												)}
											)
									setTimeout(function(){
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"static"})	
														
												})
									},config.animateTime)		
								
									}
									
									else
									{
										
											selfs
											.css({"position":"absolute","width":"100%","left":selfs.position().left,"top":selfs.position().top})
											.stop(true,false)
											.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"relative","top":"auto","left":"auto","opacity":1,"display":"none"}
												)}
											)
									
									
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"relative"})	
														
												})
									}
								break;
								
								
								case "none":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").show();
								break;	
								
							}
							
							
						}


            });

		}
		

$.fn.hover_animate=function(obj){
	var time_delay=null,runlist=[],runlist_end	=[],create_var=[],set_var=[],self=$(this)
		if (self.length==0) return false;
		if (obj.aniobj.length==0) return false;
		if (obj.set_class=="" || typeof (obj.set_class)=="undefined") {$.extend(obj,{set_class:"hover"});	}
		if (obj.hover_w	=="" || typeof (obj.set_class)=="undefined"){$.extend(obj,{hover_w:0});	}
		
		if (typeof(obj.delaytime)!="number" || typeof(obj.delaytime)=="undefined"){$.extend(obj,{delaytime:100});	}
		var fn={
			csschange:function(val){
				if (val==""){return '';}
				if (val.indexOf("{")<0 || val.indexOf("}")<0 )
				{
					val=$.trim(val)
					var last_fh=val.lastIndexOf(';')
					if (last_fh+1==val.length)
					{
						val=val.substring(0,last_fh);
						val='{\''+val.replace(/\:/g,"':'").replace(/\;/g,"','")+'\'}';
					}
					else
					{   val='{\''+val.replace(/\:/g,"':'").replace(/\;/g,"','")+'\'}';	}
				}
				return $.trim(val);
			}	
		}
		$.each(obj.aniobj,function(index,val){
			if (val.length<6) return false;
			var setobj			=	val[0],
				setobj_			=	setobj.replace(/\.|\ |\>/g,""),
				animate_css		=	fn.csschange(val[1]),
				animate_start	=	fn.csschange(val[2]),
				animate_end		=	fn.csschange(val[3]),
				animate_easing	=	val[4],
				animate_easing2	=	val[5],
				run				=	'',
				run_end			=	''
				
				if (setobj=="") return false;
				create_var.push('var _'+setobj_+'')
				setobj=="self" ? set_var.push('_'+setobj_+'=[self]'): set_var.push('_'+setobj_+'=[self].find("'+setobj+'")')
				if (animate_css=="" && animate_start=="") return false;
				if (animate_css!="" && animate_start!="")
				{run='_'+setobj_+'.css('+animate_css+').stop(true,false).animate('+animate_start+','+animate_easing+')'}		
				else if (animate_css=="" && animate_start!="")
				{run='_'+setobj_+'.stop(true,false).animate('+animate_start+','+animate_easing+')'}
				else if (animate_css!="" && animate_start=="")
				{run='_'+setobj_+'.css('+animate_css+')'}
				
				runlist.push(run)
				if (animate_end!="")
				{	
					run_end='_'+setobj_+'.animate('+animate_end+','+animate_easing2+')'
					runlist_end.push(run_end)
				}
				
		})
		var selfobj				=	null,
			selfobj_siblings	=	null;
		self.unbind(".s")
		$.each(create_var,function(index,val){eval(val);})
		self.bind("mouseenter.s",function(){
			selfobj				=	$(this)
			selfobj_siblings	=	selfobj.siblings()
			if (obj.hover_w!=0 && $(window).width()<obj.hover_w)
			{return false;}
			$.each(set_var,function(index,val){eval(val.replace("[self]","selfobj"));})
			clearTimeout(time_delay)	
			time_delay=setTimeout(function(){
					if(!selfobj.is(":animated"))
					{
						selfobj.addClass(obj.set_class);
						$.each(runlist,function(index,val){eval(val)})	;
					}
			},obj.delaytime)
		})
		.bind("mouseleave.s",function(){
			clearTimeout(time_delay)	
			if (selfobj.is("."+obj.set_class))
			{		
				$.each(runlist_end,function(index,val){eval(val);})	
				selfobj.removeClass(obj.set_class);
			}
		})
}
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});