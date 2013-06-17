/* author: Zipeng WU */
var clipList = ["49589990","33348669","33270207","25123854","62622034","14959205","5388651","6864953","6588265","9648208","5503825","49233752"];
var videoList = ["110504-TEARDROPS","33348669-LEPARC2BLAIRWITCHENDING","33270207-LEPARC2HAPPYENDING","25123854-LESNIPER","110504-ROQUEFORT","110504-GAMEONE","110504-HORDES","110504-BETCLIC","110504-MORGAN1","110504-MORGAN2","110504-BLYG","110504-BOUYGUES"];
var clientList = ["wandaproduction","auditoire","freshresearch","lachose","lestelecreateurs","profirst","tbwa","spoke","yellowz"];
var otherImgList = ["information","work","send"];
var lock=0;
var zipToggle=0;
var gabiToggle=0;
var snipercounter=0;
var templateStr = '<img src="{{img}}" class="video" id="{{id}}"></img>'

jQuery.fn.center = function () {
	this.css("position","absolute");
	this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
	this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
	return this;
}
jQuery.preloadImages = function(list) {
	if(list instanceof Array){
		for(var i = 0; i<list.length; i++) {
			jQuery("<img>").attr("src", list[i]);
		}
	}
	else{
		jQuery("<img>").attr("src", list);
	}
}

var constructClip = function(str, width, height){
	return "<iframe src='http://player.vimeo.com/video/"+ str +"?title=0&amp;byline=0&amp;portrait=0' width='"+ width +"' height='"+ height +"' frameborder='0'></iframe>";
}

var sniperv=constructClip("58493481","800","450");

//transform an image or an array of images
var getImgPath = function(list, isVideo, isHover){
	var dirPath = isVideo? "img/video/": "img/";
	var subfix = isHover? "-over.png" : ".png";
	if(list instanceof Array){
		var imgList = new Array();
		for(var i=0; i<list.length; i++){
			imgList[i] = dirPath + list[i] + subfix;
		}
		return imgList;
	}
	else{
		return dirPath + list + subfix;
	}
}



$(document).ready( function() {
	$.preloadImages(getImgPath("welcome",true,true));
	$.preloadImages(getImgPath(otherImgList,false,true));
	$.preloadImages(getImgPath(videoList,true,true));
	$.preloadImages(getImgPath(clientList,false,true));
	
	var template = Mustache.compile(templateStr);
	var $workcontent = $("#workcontent");
	
	for(var i = 0; i<videoList.length; i++){
		var image = getImgPath(videoList[i],true,false);
		var vid = "video" +i;
		var view = {"img":image, "id": vid};
		var tag = template(view);
		$workcontent.append(tag);
	}
	
		
	$(".video").click( function(e) {
		$("#background").css({
			"opacity" : "0.85"
		})
		.fadeIn("slow");

		for(var i = 0; i<clipList.length; i++){
			var video = "video" + i;
			if($(this).attr("id")==video) {
				$("#videoclip").html(constructClip(clipList[i],"640","360"));
			}
		}
		$("#videoclip")
		.center()
		.fadeIn("slow");
	});
	$(".video").hover( function() {
		for(var i = 0; i<videoList.length; i ++){
			if($(this).attr("id") == "video" + i){
				$(this).attr("src",getImgPath(videoList[i],true,true));
				break;
			}
		}
		
	});
	$(".video").mouseout( function() {
		for(var i = 0; i<videoList.length; i ++){
			if($(this).attr("id") == "video" + i){
				$(this).attr("src",getImgPath(videoList[i],true,false));
				break;
			}
		}
	});
	
	$(document).keypress( function(e) {
		if(e.keyCode==27) {
			$("#background").fadeOut("slow");
			$("#videoclip").fadeOut("slow");
		}
	});
	
	
	
	$(".clientClickMap").hover( function() {
		for(var i = 1; i<=clientList.length; i ++){
			if($(this).attr("id") == "clientmap" + i){
				$("#client" + i).attr("src",getImgPath(clientList[i-1],false,true));
				break;
			}
		}
		
	});
	$(".clientClickMap").mouseout( function() {
		for(var i = 1; i<=clientList.length; i ++){
			if($(this).attr("id") == "clientmap" + i){
				$("#client" + i).attr("src",getImgPath(clientList[i-1],false,false));
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
		$("#img_sniper").attr("src","img/video/welcome-over.png");
	});
	$("#img_sniper").mouseout( function() {
		$("#img_sniper").attr("src","img/video/welcome.png");
	});
});