//maincanvas
var c = document.getElementById("maincanvas");
var ctx = c.getContext("2d");
var amount = 0;



var winwidth=$(window).width();
if(winwidth < 768){
	ctx.font = "19px Arial";
}else{
	ctx.font = "16px Arial";
}

$(window).resize(function() {
  var winwidth=$(window).width();
if(winwidth < 768){
	ctx.font = "19px Arial";
}else{
	ctx.font = "16px Arial";
}
});


var grd=ctx.createLinearGradient(0,0,0,20);
grd.addColorStop(0,"#66ffff");
grd.addColorStop(1,"#0a8fd5");
var progress = 0;

function progressBar(isStart){
 if(isStart == 1){
  
 }
 if(progress>=0&&progress<=15){
   progress += 0.05;
  }else if(progress>=15&&progress<=17){
   progress += 0.02;
  }else if(progress>=17&&progress<=38){
   progress += 0.26;
  }else if(progress>=38&&progress<=41){
   progress += 0.03;
  }else if(progress>=41&&progress<=60){
   progress += 0.34;
  }else if(progress>=60&&progress<=61){
   progress += 0.01;
  }else if(progress>=61&&progress<=79){
   progress += 0.6;
  }else if(progress>=79&&progress<=82){
   progress += 0.05;
  }else if(progress>=82&&progress<=96){
   progress += 0.35;
  }else if(progress>=96&&progress<100){
   progress += 0.05;
  }else if(progress>100){
   progress = 100;
  }
 ctx.clearRect(0,0,750,30)
 ctx.fillStyle = grd;
 ctx.fillRect(0,0,((maincanvas.width-1)/100)*progress,20);
 ctx.fillStyle = "#ffffff";
 ctx.strokeStyle="#ffffff";
 ctx.fillText(progress.toFixed(1) + "%",maincanvas.width/2,16);
 ctx.strokeRect(0,0,(maincanvas.width),20);
 ctx.strokeRect(1,1,(maincanvas.width-1),19);
 ctx.strokeRect(2,2,(maincanvas.width-2),18);
 setTimeout(progressBar,37,0);
}


