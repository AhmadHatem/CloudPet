
var main = function(){
   var dropdowncount =0;

   $('.header__dynamic-width-col').click(function(){
       if(dropdowncount==0){
        $('.menu').animate({top:'60px'},300);
        $('.body').animate({top:'200px'},300);
        
        dropdowncount=1;
      }
      else{
        $('.menu').animate({top:'-1000px'},300);
        $('.body').animate({top:'50px'},300);
        dropdowncount=0;
      }
   })
        
$('fit-fixed').click(function(){


})
}
    
    $(document).ready(main);
