//@author: Zipeng WU
var clipList = new Array("33348669","33270207","25123854","14959205","5388651","6864953","6588265","9648208","5503825");
var videoList = new Array("33348669-LEPARC2BLAIRWITCHENDING","33270207-LEPARC2HAPPYENDING","25123854-LESNIPER","110504-GAMEONE","110504-HORDES","110504-BETCLIC","110504-MORGAN1","110504-MORGAN2","110504-BLYG");
var clientList = new Array("wandaproduction","auditoire","freshresearch","lachose","lestelecreateurs","profirst","tbwa","spoke");
var otherImgList = new Array("information","work","send");
var lock=0;
var zipToggle=0;
var gabiToggle=0;
var snipercounter=0;

jQuery.fn.center = function () {
	this.css("position","absolute");
	this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
	this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
	return this;
}
jQuery.preloadImages = function(list) {
	for(var i = 0; i<list.length; i++) {
		jQuery("<img>").attr("src", list[i]);
	}
}

var constructClip = function(str, width, height){
	return "<iframe src='http://player.vimeo.com/video/"+ str +"?title=0&amp;byline=0&amp;portrait=0' width='"+ width +"' height='"+ height +"' frameborder='0'></iframe>";
}

var sniperv=constructClip("25123854","800","450");

var getVideoList = function(list){
	if(list.length == null){
		return "img/video/"+ list +".png";
	}
	else{
		var videoList = new Array();
		for(var i=0; i<list.length; i++){
			videoList[i] = "img/video/"+ list[i] +".png";
		}
		return videoList;
	}
}

var getVideoListOver = function(list){
	if(list.length == null){
		return "img/video/"+ list +"-over.png";
	}
	else{
		var videoList = new Array();
		for(var i=0; i<list.length; i++){
			videoList[i] = "img/video/"+ list[i] +"-over.png";
		}
		return videoList;
	}
}

var getImgList = function(list){
	if(list.length == null){
		return "img/"+ list +".png";
	}
	else{
		var imgList = new Array();
		for(var i=0; i<list.length; i++){
			imgList[i] = "img/"+ list[i] +".png";
		}
		return imgList;
	}
}

var getImgListOver = function(list){
	if(list.length == null){
		return "img/"+ list +"-over.png";
	}
	else{
		var imgList = new Array();
		for(var i=0; i<list.length; i++){
			imgList[i] = "img/"+ list[i] +"-over.png";
		}
		return imgList;
	}
}


$(document).ready( function() {
//	$.preloadImages("img/information-gris.png","img/work-gris.png","img/video/33270207-LEPARC2HAPPYENDINGnoir.png","img/video/25123854-LESNIPERnoir.png", "img/video/33348669-LEPARC2BLAIRWITCHENDINGnoir.png", "img/video/sniperclip.png","img/tbwa-coul.png","img/profirst-coul.png","img/send-gris.png","img/lestelecreateurs-coul.png","img/lachose-coul.png","img/freshresearch-coul.png","img/auditoire-coul.png","img/wandaproduction-coul.png","img/video/110504-BETCLIC.png","img/video/110504-BETCLIC-noir.png","img/video/110504-BLYG.png","img/video/110504-BLYG-noir.png","img/video/110504-GAMEONE.png","img/video/110504-GAMEONE-noir.png","img/video/110504-HORDES-noir.png","img/video/110504-HORDES.png","img/video/110504-MORGAN1-noir.png","img/video/110504-MORGAN1.png","img/video/110504-MORGAN2-noir.png","img/video/110504-MORGAN2.png","img/spoke-coul.png");
	$.preloadImages(getImgListOver(otherImgList));
	$.preloadImages(getVideoListOver(videoList));
	$.preloadImages(getImgListOver(clientList));
	
	
	$(".video").click( function(e) {
		$("#background").css({
			"opacity" : "0.85"
		})
		.fadeIn("slow");

		for(var i = 1; i<=clipList.length; i++){
			var video = "video" + i;
			if($(this).attr("id")==video) {
				$("#videoclip").html(constructClip(clipList[i-1],"640","360"));
			}
			
		}
		$("#videoclip")
		.center()
		.fadeIn("slow");
		return false;
	});
	$(document).keypress( function(e) {
		if(e.keyCode==27) {
			$("#background").fadeOut("slow");
			$("#videoclip").fadeOut("slow");
		}
	});
	
	$(".video").hover( function() {
		for(var i = 1; i<=videoList.length; i ++){
			if($(this).id == "video" + i){
				$(this).attr("src",getVideoListOver(videoList[i-1]));
				break;
			}
		}
		
	});
	$(".video").mouseout( function() {
		for(var i = 1; i<=videoList.length; i ++){
			if($(this).id == "video" + i){
				$(this).attr("src",getVideoList(videoList[i-1]));
				break;
			}
		}
	});
	
	$("#background").click( function() {
		$("#background").fadeOut("slow");
		$("#videoclip").fadeOut("slow");
		$("#videoclip").html("");
	});
	$("#videoclip").click( function() {
		$("#background").fadeOut("slow");
		$("#videoclip").fadeOut("slow");
	});
	$("#logoButton").click( function() {
		if(lock==0) {
			lock=1;
			if($("#infopanel").css("display")!="none") {
				$("#infopanel").fadeOut(500, function() {
					$("#sniper").fadeIn(500, function() {
						lock=0;
					});
				}
				);
			} else if($("#workcontent").css("display")!="none") {
				$("#authorInfo").fadeIn(500, function() {});
				$("#workcontent").fadeOut(500, function() {
					$("#sniper").fadeIn(500, function() {
						lock=0;
					});
				}
				);
			} else
				lock=0;
		};
	});
	$("#workarea").hover( function() {
		$("#work").attr("src","img/work-over.png");
	});
	$("#workarea").click( function() {
		if(lock==0) {
			lock=1;
			if($("#sniper").css("display")!="none") {
				$("#authorInfo").fadeOut(500, function() {});
				$("#sniper").fadeOut(500, function() {
					$("#workcontent").fadeIn(500, function() {
						lock=0;
					});
				}
				);
			} else if($("#infopanel").css("display")!="none") {
				$("#authorInfo").fadeOut(500, function() {});
				$("#infopanel").fadeOut(500, function() {
					$("#workcontent").fadeIn(500, function() {
						lock=0;
					});
				}
				);
			} else
				lock=0;
		};
	});
	$("#workarea").mouseout( function() {
		$("#work").attr("src","img/work.png");
	});
	$("#informationarea").hover( function() {
		$("#information").attr("src","img/information-over.png");
	});
	$("#informationarea").click( function() {
		if(lock==0) {
			lock=1;
			if($("#sniper").css("display")!="none") {
				$("#sniper").fadeOut(500, function() {
					$("#infopanel").fadeIn(500, function() {
						lock=0;
					});
				}
				);
			} else if($("#workcontent").css("display")!="none") {
				$("#authorInfo").fadeIn(500, function() {});
				$("#workcontent").fadeOut(500, function() {
					$("#infopanel").fadeIn(500, function() {
						lock=0;
					});
				}
				);
			} else
				lock=0;
		};
	});
	$("#informationarea").mouseout( function() {
		$("#information").attr("src","img/information.png");
	});
	
	$("#name").focusin( function() {
		$(this).css("background-color","#E1E1E1");
		if($(this).val()=="Name:")
			$(this).val("");
	});
	$("#name").focusout( function() {
		$(this).css("background-color","#F4F4F4");
		if($(this).val().trim()=="")
			$(this).val("Name:");
	});
	$("#email").focusin( function() {
		$(this).css("background-color","#E1E1E1");
		if($(this).val()=="Email:")
			$(this).val("");
	});
	$("#email").focusout( function() {
		$(this).css("background-color","#F4F4F4");
		if($(this).val().trim()=="")
			$(this).val("Email:");
	});
	$("#message").focusin( function() {
		$(this).css("background-color","#E1E1E1");
		if($(this).val()=="Leave a message...")
			$(this).val("");
	});
	$("#message").focusout( function() {
		$(this).css("background-color","#F4F4F4");
		if($(this).val().trim()=="") {
			$(this).val("Leave a message...");
		}
	});
	$("#send").hover( function() {
		$(this).attr("src","img/send-over.png");
	});
	$("#send").mouseout( function() {
		$(this).attr("src","img/send.png");
	});
	$("#send").click( function() {
		message=new Object();
		message.name=$("#name").val().trim();
		message.email=$("#email").val().trim();
		message.message=$("#message").val().trim();
		if(message.email.match("@")==null) {
			alert("Not valid email !");
			return;
		}
		if(message.message.trim()==""||message.message.trim()=="Leave a message...") {
			alert("Please leave a message!");
			return;
		}
		$.post("/contact",JSON.stringify(message));
		alert("Thanks for your message, I will respond ASAP.");
	});
	$("#zipeng").hover( function() {
		if(zipToggle==0) {
			$(this).css("background-color","#F4F4F4");
			$("#zipInfo").fadeIn(400);
		}
	});
	$("#zipeng").mouseout( function() {
		if(zipToggle==0) {
			$(this).css("background-color","#FFF");
			$("#zipInfo").fadeOut(400);
		}
	});
	$("#zipeng").click( function() {
		if(zipToggle==0) {
			zipToggle=1;
			$(this).css("background-color","#E1E1E1");
			$("#zipInfo").css("background-color","#E1E1E1");
		} else {
			zipToggle=0;
			$(this).css("background-color","#F4F4F4");
			$("#zipInfo").css("background-color","#F4F4F4");
		}

	});
	$("#gabi").hover( function() {
		if(gabiToggle==0) {
			$(this).css("background-color","#F4F4F4");
			$("#gabiInfo").fadeIn(400);
		}
	});
	$("#gabi").mouseout( function() {
		if(gabiToggle==0) {
			$(this).css("background-color","#FFF");
			$("#gabiInfo").fadeOut(400);
		}
	});
	$("#gabi").click( function() {
		if(gabiToggle==0) {
			gabiToggle=1;
			$(this).css("background-color","#E1E1E1");
			$("#gabiInfo").css("background-color","#E1E1E1");
		} else {
			gabiToggle=0;
			$(this).css("background-color","#F4F4F4");
			$("#gabiInfo").css("background-color","#F4F4F4");
		}
	});
	$("#img_sniper").click( function() {
		$(this).css("display","none");
		$("#snipervimeo").html(sniperv);
		$("#background2").css({
				"opacity" : "0.85"
			})
			.fadeIn("slow");
	});
	
	$("#background2").click( function() {
		$(this).fadeOut("normal");
		$("#img_sniper").css("display","block");
		$("#snipervimeo").html("");
	});
	
	$("#img_sniper").hover( function() {
		$("#img_sniper").attr("src","img/video/sniperclip-over.png");
	});
	$("#img_sniper").mouseout( function() {
		$("#img_sniper").attr("src","img/video/sniperclip.png");
	});
	
	/*
	"33348669-LEPARC2BLAIRWITCHENDING","33270207-LEPARC2HAPPYENDING","25123854-LESNIPER","110504-GAMEONE","110504-HORDES","110504-BETCLIC","110504-MORGAN1","110504-MORGAN2","110504-BLYG"
	
	$("#video1").hover( function() {
		$("#video1").attr("src","img/video/33348669-LEPARC2BLAIRWITCHENDINGnoir.png");
	});
	$("#video1").mouseout( function() {
		$("#video1").attr("src","img/video/33348669-LEPARC2BLAIRWITCHENDING.png");
	});
	$("#video2").hover( function() {
		$("#video2").attr("src","img/video/33270207-LEPARC2HAPPYENDINGnoir.png");
	});
	$("#video2").mouseout( function() {
		$("#video2").attr("src","img/video/33270207-LEPARC2HAPPYENDING.png");
	});
	$("#video3").hover( function() {
		$("#video3").attr("src","img/video/25123854-LESNIPERnoir.png");
	});
	$("#video3").mouseout( function() {
		$("#video3").attr("src","img/video/25123854-LESNIPER.png");
	});
	$("#video6").hover( function() {
		$("#video6").attr("src","img/video/110504-BETCLIC-noir.png");
	});
	$("#video6").mouseout( function() {
		$("#video6").attr("src","img/video/110504-BETCLIC.png");
	});
	$("#video9").hover( function() {
		$("#video9").attr("src","img/video/110504-BLYG-noir.png");
	});
	$("#video9").mouseout( function() {
		$("#video9").attr("src","img/video/110504-BLYG.png");
	});
	$("#video4").hover( function() {
		$("#video4").attr("src","img/video/110504-GAMEONE-noir.png");
	});
	$("#video4").mouseout( function() {
		$("#video4").attr("src","img/video/110504-GAMEONE.png");
	});
	$("#video5").hover( function() {
		$("#video5").attr("src","img/video/110504-HORDES-noir.png");
	});
	$("#video5").mouseout( function() {
		$("#video5").attr("src","img/video/110504-HORDES.png");
	});
	$("#video7").hover( function() {
		$("#video7").attr("src","img/video/110504-MORGAN1-noir.png");
	});
	$("#video7").mouseout( function() {
		$("#video7").attr("src","img/video/110504-MORGAN1.png");
	});
	$("#video8").hover( function() {
		$("#video8").attr("src","img/video/110504-MORGAN2-noir.png");
	});
	$("#video8").mouseout( function() {
		$("#video8").attr("src","img/video/110504-MORGAN2.png");
	});
	
	"wandaproduction","auditoire","freshresearch","lachose","lestelecreateurs","profirst","tbwa","spoke"
	
	$("#clientmap1").hover( function() {
		$("#client1").attr("src","img/wandaproduction-coul.png");
	});
	$("#clientmap1").mouseout( function() {
		$("#client1").attr("src","img/wandaproduction-nb.png");
	});
	$("#clientmap2").hover( function() {
		$("#client2").attr("src","img/auditoire-coul.png" );
	});
	$("#clientmap2").mouseout( function() {
		$("#client2").attr("src","img/auditoire-nb.png" );
	});
	$("#clientmap3").hover( function() {
		$("#client3").attr("src","img/freshresearch-coul.png");
	});
	$("#clientmap3").mouseout( function() {
		$("#client3").attr("src","img/freshresearch-nb.png");
	});
	$("#clientmap4").hover( function() {
		$("#client4").attr("src","img/lachose-coul.png");
	});
	$("#clientmap4").mouseout( function() {
		$("#client4").attr("src","img/lachose-nb.png");
	});
	$("#clientmap5").hover( function() {
		$("#client5").attr("src","img/lestelecreateurs-coul.png");
	});
	$("#clientmap5").mouseout( function() {
		$("#client5").attr("src","img/lestelecreateurs-nb.png");
	});
	$("#clientmap6").hover( function() {
		$("#client6").attr("src","img/profirst-coul.png");
	});
	$("#clientmap6").mouseout( function() {
		$("#client6").attr("src","img/profirst-nb.png");
	});
	$("#clientmap7").hover( function() {
		$("#client7").attr("src","img/tbwa-coul.png");
	});
	$("#clientmap7").mouseout( function() {
		$("#client7").attr("src","img/tbwa-nb.png");
	});
	$("#clientmap8").hover( function() {
		$("#client8").attr("src","img/spoke-coul.png");
	});
	$("#clientmap8").mouseout( function() {
		$("#client8").attr("src","img/spoke-nb.png");
	});
	*/
});