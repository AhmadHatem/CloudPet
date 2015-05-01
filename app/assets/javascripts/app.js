
var main = function(){
   var x =0;


   $('.header__dynamic-width-col').click(function(){
       if(x==0){
        $('.menu').animate({top:'60px'},300);
        $('.body').animate({top:'200px'},300);
        
        x=1;
        }
        else{
  $('.menu').animate({top:'-1000px'},300);
  $('.body').animate({top:'50px'},300);
  x=0;
 }
 /* wigle wigle wigle
  if(x==0){
        $('.menu').animate({top:'60px'},300);
        $('.body').animate({top:'200px'},300);
        
        x=1;
        }
        else{
  $('.menu').animate({top:'-1000px'},300);
  $('.body').animate({top:'50px'},300);
  x=0;
 } if(x==0){
        $('.menu').animate({top:'60px'},300);
        $('.body').animate({top:'200px'},300);
        
        x=1;
        }
        else{
  $('.menu').animate({top:'-1000px'},300);
  $('.body').animate({top:'50px'},300);
  x=0;
 } if(x==0){
        $('.menu').animate({top:'60px'},300);
        $('.body').animate({top:'200px'},300);
        
        x=1;
        }
        else{
  $('.menu').animate({top:'-1000px'},300);
  $('.body').animate({top:'50px'},300);
  x=0;
 } if(x==0){
        $('.menu').animate({top:'60px'},300);
        $('.body').animate({top:'200px'},300);
        
        x=1;
        }
        else{
  $('.menu').animate({top:'-1000px'},300);
  $('.body').animate({top:'50px'},300);
  x=0;
 }*/
        }
        )
        
$('fit-fixed').click(function(){


})
 }
    
    $(document).ready(main);