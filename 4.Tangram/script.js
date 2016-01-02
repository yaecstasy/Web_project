var score=0;
$(document).ready(function(){
	$(function () {
        $(".drag.tribigup").draggable(
        {
         snap:".tribigup",	
         snapMode: "inner",
         stop: matchAnswer.bind(this,$(".drag.tribigup"),'Q1')
         });

        $(".drag.righttri").draggable(
        {
         snap:".righttri",	
         snapMode: "inner",
         stop: matchAnswer.bind(this,$(".drag.righttri"),'Q2')
         });

        $(".drag.square").draggable(
        {
         snap:".square",	
         snapMode: "inner",
         stop: matchAnswer.bind(this,$(".drag.square"),'Q3')
         });

        $(".drag.triupsmall").draggable(
        {
         snap:".triupsmall",	
         snapMode: "inner",
         stop: matchAnswer.bind(this,$(".drag.triupsmall"),'Q5')
         });
        $(".drag.tribigdown").draggable(
        {
         snap:".tribigdown",	
         snapMode: "inner",
         stop: matchAnswer.bind(this,$(".drag.tribigdown"),'Q4')
     });
    });

});

function matchAnswer(Obj,Q){
	var ans=Obj.offset();
	console.log(ans);
	var qes = $('#'+ Q).offset();

     if (ans.left==qes.left && ans.top==qes.top) {
     	score++;
     	console.log(score);
     };  
     if(score==5){
     	$('h1').text("You Win !!!");
     };     
};
