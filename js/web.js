jQuery(".slide1").slide({mainCell:".slide1images .uls",titCell:".slide1hd .uls li",interTime:1500,autoPlay:true,vis:1,effect:"fade"});
jQuery(".slide2").slide({mainCell:".slide2images .uls",titCell:".slide2hd .uls li",interTime:1500,autoPlay:true,vis:1,effect:"fade"});

jQuery(".slide3").slide({mainCell:".slide3images .uls",autoPlay:true,vis:1,effect:"fade"});
jQuery(".slide4").slide({mainCell:".slide4images .uls",autoPlay:true,vis:1,effect:"fade"});
jQuery(".slide5").slide({mainCell:".slide5images .uls",autoPlay:true,vis:1,effect:"fade"});



var myVid=document.getElementById("Music");

//

function ToggleMusic(){
	if(myVid.paused){
		$("#MusicToggleButton").html('点击暂停音乐');
		myVid.play();
	}else{
		$("#MusicToggleButton").html('点击播放音乐');
		myVid.pause();
	}
}

var swiper = new Swiper('.swww', {
  slidesPerView: 3,
  spaceBetween:9,
  centeredSlides: true,

  loop: true,
autoplay: 2000,
	  prevButton:'.swiper-button-prevx',
		nextButton:'.swiper-button-nextx',
  navigation: {
	nextEl: '.swiper-button-nextx',
	prevEl: '.swiper-button-prevx',
  },
});

 



var swiper = new Swiper('.sx', {
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
	speed: 2000,
	loop: true,
	  autoplay: {
    delay: 5000,//2秒切换一次
  },
	navigation: {
	nextEl: '.swiper-button-nexty',
	prevEl: '.swiper-button-prevy',
	},
});


$(function(){


	var featureSwiper = new Swiper('.feature-swiper',{
        loop: true,
        speed: 1000,
        autoplay: 3000,
        effect: 'coverflow',
        slidesPerView: 'auto',
        centeredSlides: true,
		slideToClickedSlide: true,
		prevButton:'.prev',
		nextButton:'.next',
        coverflow: {
            rotate: -10,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false
        }
    });
});




$(document).ready(function() {

	if ($("#playbanner").length>0)
	{
			$("#playbanner").ZHYslider({
					fullscreen	:false,
					arrow		:false,		
					speed: 500, 
					space: 2000,
					auto: true, //自动滚动
					affect:'scrollx',
					ctag: '.Slide_'
			})
		
		
	}


	$(".tsBox li").hover(function() {
		$(this).addClass("on").siblings().removeClass("on")
	})



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



	
	$('.photoshow2').roundabout({
		btnNext: '#ZhiYe2 .move_rights',
	btnNextCallback:function(){
		var indexs	=	$(this).find(".roundabout-in-focus").index()
		$(".photoshow_select2").find("a:eq("+indexs+")").addClass("change").siblings().removeClass("change")
	},
	autoplay: true,
	autoplayDuration: 2000,
	autoplayPauseOnHover: true,
	autoplayCallback: function() {
		var indexs	=	$(this).find(".roundabout-in-focus").index()
		$(".photoshow_select2").find("a:eq("+indexs+")").addClass("change").siblings().removeClass("change")
	},
	btnPrev: '#ZhiYe2 .move_lefts',
	btnPrevCallback:function(){
		var indexs	=	$(this).find(".roundabout-in-focus").index()
		$(".photoshow_select2").find("a:eq("+indexs+")").addClass("change").siblings().removeClass("change")
		
	},
	duration:300});



	$('.photoshow').roundabout({
        btnNext: '.gzshow .move_rights',
        btnNextCallback: function() {
            var indexs = $(this).find(".roundabout-in-focus").index()
            $(".photoshow_select").find("a:eq(" + indexs + ")").addClass("change").siblings().removeClass("change")
        },
        autoplay: true,
        autoplayDuration: 5000,
        autoplayPauseOnHover: true,
        autoplayCallback: function() {
            var indexs = $(this).find(".roundabout-in-focus").index()
            $(".photoshow_select").find("a:eq(" + indexs + ")").addClass("change").siblings().removeClass("change")
        },
        btnPrev: '.gzshow .move_lefts',
        btnPrevCallback: function() {
            var indexs = $(this).find(".roundabout-in-focus").index()
            $(".photoshow_select").find("a:eq(" + indexs + ")").addClass("change").siblings().removeClass("change")

        },
        duration: 300
    });



})