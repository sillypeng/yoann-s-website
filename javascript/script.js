jQuery.fn.center = function () {
	this.css("position","absolute");
	this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
	this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
	return this;
}
jQuery.preloadImages = function() {
	for(var i = 0; i<arguments.length; i++) {
		jQuery("<img>").attr("src", arguments[i]);
	}
}
var clip1 ="<iframe src='http://player.vimeo.com/video/6864953?title=0&amp;byline=0&amp;portrait=0' width='640' height='360' frameborder='0'></iframe>";
var clip2 ="<iframe src='http://player.vimeo.com/video/5503825?title=0&amp;byline=0&amp;portrait=0' width='640' height='360' frameborder='0'></iframe>";
var clip3 ="<iframe src='http://player.vimeo.com/video/14959205?title=0&amp;byline=0&amp;portrait=0' width='640' height='360' frameborder='0'></iframe>";
var clip4 ="<iframe src='http://player.vimeo.com/video/5388651?title=0&amp;byline=0&amp;portrait=0' width='640' height='360' frameborder='0'></iframe>";
var clip5 ="<iframe src='http://player.vimeo.com/video/9648208?title=0&amp;byline=0&amp;portrait=0' width='640' height='360' frameborder='0'></iframe>";
var clip6 ="<iframe src='http://player.vimeo.com/video/6588265?title=0&amp;byline=0&amp;portrait=0' width='640' height='360' frameborder='0'></iframe>";
var lock=0;
var zipToggle=0;
var gabiToggle=0;

$(document).ready( function() {
	$.preloadImages("img/tbwa-coul.png","img/profirst-coul.png","img/lestelecreateurs-coul.png","img/lachose-coul.png","img/freshresearch-coul.png","img/auditoire-coul.png","img/ailleursexactement-coul.png","img/information-gris.png","img/work-gris.png","img/video/110504-BETCLIC.png","img/video/110504-BETCLIC-noir.png","img/video/110504-BLYG.png","img/video/110504-BLYG-noir.png","img/video/110504-GAMEONE.png","img/video/110504-GAMEONE-noir.png","img/video/110504-HORDES-noir.png","img/video/110504-HORDES.png","img/video/110504-MORGAN1-noir.png","img/video/110504-MORGAN1.png","img/video/110504-MORGAN2-noir.png","img/video/110504-MORGAN2.png","img/spoke-coul.png");

	$(".video").click( function(e) {
		$("#background").css({
			"opacity" : "0.85"
		})
		.fadeIn("slow");

		if($(this).attr("id")=="video1") {
			$("#videoclip").html(clip1)
		}
		if($(this).attr("id")=="video2") {
			$("#videoclip").html(clip2)
		}
		if($(this).attr("id")=="video3") {
			$("#videoclip").html(clip3)
		}
		if($(this).attr("id")=="video4") {
			$("#videoclip").html(clip4)
		}
		if($(this).attr("id")=="video5") {
			$("#videoclip").html(clip5)
		}
		if($(this).attr("id")=="video6") {
			$("#videoclip").html(clip6)
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
		$("#work").attr("src","img/work-gris.png");
	});
	$("#workarea").click( function() {
		if(lock==0) {
			lock=1;
			if($("#sniper").css("display")!="none") {
				$("#sniper").fadeOut(500, function() {
					$("#workcontent").fadeIn(500, function() {
						lock=0;
					});
				}
				);
			} else if($("#infopanel").css("display")!="none") {
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
		$("#work").attr("src","img/work-noir.png");
	});
	$("#informationarea").hover( function() {
		$("#information").attr("src","img/information-gris.png");
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
		$("#information").attr("src","img/information-noir.png");
	});
	$("#video1").hover( function() {
		$("#video1").attr("src","img/video/110504-BETCLIC-noir.png");
	});
	$("#video1").mouseout( function() {
		$("#video1").attr("src","img/video/110504-BETCLIC.png");
	});
	$("#video2").hover( function() {
		$("#video2").attr("src","img/video/110504-BLYG-noir.png");
	});
	$("#video2").mouseout( function() {
		$("#video2").attr("src","img/video/110504-BLYG.png");
	});
	$("#video3").hover( function() {
		$("#video3").attr("src","img/video/110504-GAMEONE-noir.png");
	});
	$("#video3").mouseout( function() {
		$("#video3").attr("src","img/video/110504-GAMEONE.png");
	});
	$("#video4").hover( function() {
		$("#video4").attr("src","img/video/110504-HORDES-noir.png");
	});
	$("#video4").mouseout( function() {
		$("#video4").attr("src","img/video/110504-HORDES.png");
	});
	$("#video5").hover( function() {
		$("#video5").attr("src","img/video/110504-MORGAN1-noir.png");
	});
	$("#video5").mouseout( function() {
		$("#video5").attr("src","img/video/110504-MORGAN1.png");
	});
	$("#video6").hover( function() {
		$("#video6").attr("src","img/video/110504-MORGAN2-noir.png");
	});
	$("#video6").mouseout( function() {
		$("#video6").attr("src","img/video/110504-MORGAN2.png");
	});
	$("#clientmap1").hover( function() {
		$("#client1").attr("src","img/ailleursexactement-coul.png");
	});
	$("#clientmap1").mouseout( function() {
		$("#client1").attr("src","img/ailleursexactement-nb.png");
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
		$(this).attr("src","img/send-gris.png");
	});
	$("#send").mouseout( function() {
		$(this).attr("src","img/send-noir.png");
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
	$("#sniper").click( function() {
		$("#sniper").html("<iframe src='http://player.vimeo.com/video/25123854?title=0&amp;byline=0&amp;portrait=0' width='800' height='450' frameborder='0'></iframe>");
	});
});