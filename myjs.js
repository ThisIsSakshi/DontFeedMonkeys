
var hits = 0;
var missed = 0; 
var level= 1 ;
var sco = 3 ;
var misscount = 4;
var x="";
var person="";

function Shoot()
{
   var fruits = document.getElementById("fruits");
   fruits.offsetTop=330;
   var target = document.getElementById("target");
   fruits.style.display="inherit";
   var bPos = 331;
   var t = setInterval(moveFruit,5);
   
   function moveFruit()
   {
     if(bPos < 20)
     {
      clearInterval(t);
      fruits.style.display="none";
      missed++;
     }
       else
     {
      var sameX = (fruits.offsetTop>=36) && (fruits.offsetTop <= 70);
      var sameY = (target.offsetLeft >=90)&&(target.offsetLeft <=150);
       if(!(sameX && sameY))
       {
        bPos -= 3;
        fruits.style.top = bPos +"px";
        var yb = bPos + "px";         
       }
       else
       {
         clearInterval(t);
         fruits.style.display="none";
         hits++;
        document.getElementById("explode").style.visibility="inherit";
         setTimeout(function(){ document.getElementById("explode").style.visibility="hidden"; },800)
       }   
      } document.getElementById("hits").innerHTML= "Hits: "+hits;
      document.getElementById("missed").innerHTML="Missed: "+missed;
   }
   if(missed >misscount)
{
   confirm ("Game over!!\nYour score : "+hits) 
   hits=0;
   missed=0;
           document.getElementById("target").style.width="0px";
   document.getElementById("fruits").style.width="0px";
   document.getElementById("explode").style.width="0px";
    x = x+"<h2 >♥Thankyou♥ <br> ★"+person+"★</h2>";
   document.getElementById("showthnx").innerHTML = x;
 
}
if(hits>=sco)
{
   confirm("Wow "+person+" you won level "+level+" !!") 
   sco+=5;
   level++;
   misscount++;
   
}
};
function takename()
{
   var name=prompt ("Please enter your name ","Little monkey");
   if(person=="")
   {
      person=name; 
   }
     
}
function showrules()
{
alert("Welcome to the Jungle \n\nRules: \n1.) Try to score as much as you can.\n2.) In starting if you miss more than 4 fruits you will loose. \n3.) On increase of every new level your missed count will increase by 1.\n4.) All you need to do is just click on the fruit basket to shoot.")
alert("All the best !!")
}