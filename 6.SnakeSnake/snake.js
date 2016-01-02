$(document).ready(function(){
	var level=1;
	//document.getElementById('levelnow').innerHTML =level;
	var canvas = document.getElementById('canvas');
	var w = canvas.width;
	var	h = canvas.height;
    var ctx = canvas.getContext("2d");
    var way="right";
    var wayArray= new Array(); wayArray.push("snake"); wayArray.push("right");
    var size=15;
    ctx.fillStyle="white";
    // key:up:1 down:-1 left:2 right:-2
    var snakebody=8;
    var position={
    	headX:105,
    	headY:0,
    	tailX:0,
    	tailY:0
    };

    var speed=300;
    restart();
    var snakeMove = setInterval(function(){ move(); }, speed);
    function changeSpeed() {
 	   clearInterval(snakeMove);
 	   snakeMove = setInterval(function(){ move(); }, speed);
	};
	function stop(){
		clearInterval(snakeMove);
	}

    function restart(){
    	level=1;
    	document.getElementById('levelnow').innerHTML =level;
    	way="right";
    	snakebody=8;
    	speed=800;
    	for (var i = 0; i < snakebody; i++){
    	    ctx.fillRect(size*i,0,size,size);
    	};
    };
    function move(){
    	switch(way){
    		case "up":
				ctx.fillRect(position.headX,position.headY-size,size,size);
				ctx.clearRect(position.tailX,position.tailY,size,size);
				position.headY-=size;
				if (position.headX != position.tailX) {
					if (wayArray[0]=="left") {
						position.tailX-=size;
					} else{
						position.tailX+=size;
					};

				} else{
					
					position.tailY-=size;
				};
    		break;
    		case "down":
    			ctx.fillRect(position.headX,position.headY+size,size,size);
    			ctx.clearRect(position.tailX,position.tailY,size,size);
    			position.headY+=size;
    			if (position.headX != position.tailX) {
					if (wayArray[0]=="left") {
						position.tailX-=size;
					} else{
						position.tailX+=size;
					};

				} else{
				
					position.tailY+=size;
				};
    		break;
    		case "left":
    			ctx.fillRect(position.headX-size,position.headY,size,size);
    			ctx.clearRect(position.tailX,position.tailY,size,size);
    			position.headX-=size;
    			if (position.headY != position.tailY) {
					if (wayArray[0]=="up") {
						position.tailY-=size;
					} else{
						position.tailY+=size;
					};

				} else{
					position.tailX-=size;
				};
    		break;
    		case "right":
    			ctx.fillRect(position.headX+size,position.headY,size,size);
    			ctx.clearRect(position.tailX,position.tailY,size,size);    			
    			position.headX+=size;
    			if (position.headY != position.tailY) {
					if (wayArray[0]=="up") {
						position.tailY-=size;
					} else{
						position.tailY+=size;
					};

				} else{
					position.tailX+=size;
				};
    		break;
    	}
    
    }

   
	$(document).keydown(function( event ) {

 	 	switch( event.which){
 	 	    case 37:
      		//left
      			if(way=="up" || way=="down" ){
      				way="left";
      				wayArray.shift();
      				wayArray.push("left");
      			}
      		break;
    		case 39:
      		//right
      			if(way=="up" || way=="down" ){
      				way="right";
      				wayArray.shift();
      				wayArray.push("right");
      			}
      		break;
    		case 38:
      		//up
      			if(way=="left" || way=="right" ){
      				way="up";
      				wayArray.shift();
      				wayArray.push("up");
      			}
      		break;
    		case 40:
      		//down
      			if(way=="left" || way=="right" ){
      				way="down";
      				wayArray.shift();
      				wayArray.push("down");
      			}
      		break;
 		}
	});

});
