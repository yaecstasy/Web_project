function nextLevel(){
	var ball=document.getElementById("Ball");
	var time=window.getComputedStyle(ball)['animation-duration'];
	time=parseFloat(time.match(/[^s]*/)[0]);
	console.log(time);
	ball.style.WebkitAnimationPlayState="paused";
	ball.style.display="none";
    document.getElementById("right").style.display="inline-block";
    time=time-0.5;
    if (time==0.5) {
    	document.getElementById("right").innerHTML="Congrats! This is final.";
    } 
    else{
		setTimeout(function(){
		ball.style.display="inline-block";
    	ball.style.WebkitAnimationPlayState="initial";
    	ball.style.WebkitAnimationDuration=time + "s";
   		document.getElementById("right").style.display="none";
    	},1500);
    	};
}