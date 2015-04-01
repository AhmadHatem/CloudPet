	$(document).ready(
		function()
		{
			 $('.icon-menu').click(function(){
        $('.menu').animate({left:'0px'},300);
        $('body').animate({left:'285px'},300);
  
 $('.video').animate({right:'-1700'},300);
$('.signup').animate({left:'685px'},300);
        }
        )
        $('.icon-close').click(function(){
        $('.menu').animate({left:'-285px'},300);
        $('body').animate({left:'0px'},300);
 $('body').animate({top:'0px'},300);
 $('.signup').animate({left:'400px'},300);
 $('.video').animate({right:'-1700'},300);

 
        }
        )

$('.li0').click(function(){
    $('.signup').animate({left:'-1000px'},300);
    $('.video').animate({right:'0'},300);
    $('.menu').animate({left:'-285px'},300);
    $('body').animate({left:'0px'},300);
   $('.container').removeClass('reverse-move');
           $('.tuna').removeClass('reverse');
            $('.tuna').addClass('staticmove');
  move();
        setTimeout( function(){
                
                $('.tuna').addClass('eaten');
                            } , 4000); 
        setTimeout( function(){
        $('.tuna').removeClass('eaten'); 
        $('.tuna').addClass('reverse');
 $('.tuna').addClass('reverse-eaten');
  } , 5500); 
		}
		);