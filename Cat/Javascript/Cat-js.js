var staticmove = function(){
  $('.tuna').addClass('staticmove');
};

var move = function() {
	  $('.container').addClass('move');
}

var reversemove = function() {	
	$('.container').addClass('reverse-move');
}

var main = function(){
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
                          
                          setTimeout( function(){  
                             $('.tuna').removeClass('reverse-eaten'); 
                              $('.container').removeClass('move');
    $('.container').addClass('reverse-move');
  
 } , 6500);
                          setTimeout( function(){
                
                $('.tuna').addClass('eaten');
                            } , 11000); 
        setTimeout( function(){
        
        
 $('.tuna').removeClass('staticmove')
  } , 12000); 
}   
)
$('.button').click(function(){
    $('.box').removeClass('close-box');
     $('.box').addClass('open-box');
     setTimeout( function(){
      $('.tuna').removeClass('eaten'); 

        $('.tuna').removeClass('reverse');
 $('.tuna').addClass('reverse-eaten');
$('.container').removeClass('move');
             $('.container').removeClass('reverse-move');
               } , 13000);
           setTimeout( function(){
            $('.tuna').removeClass('reverse-eaten');
            $('.container').addClass('move');
            $('.tuna').addClass('staticmove');
            
             } , 15000);
            setTimeout( function(){
                $('.tuna').removeClass('staticmove');
                $('.tuna').addClass('eat');
                $('.box').addClass('close-box');
                
                            } , 19000); 
                             setTimeout( function(){
                var x = Math.floor(Math.random() * 20);
                alert("Your cat ate " + x + " gms.");
                            } , 19500);
            move();
            staticmove();
            setTimeout( function(){
                $('.tuna').removeClass('eat');
                $('.tuna').addClass('eaten');
                            } , 21000); 
        setTimeout( function(){
        $('.tuna').removeClass('eaten'); 
        $('.tuna').addClass('reverse');
        $('.tuna').addClass('staticmove');
 $('.tuna').addClass('reverse-eaten');
  } , 23000); 
                          
                          setTimeout( function(){  
                             $('.tuna').removeClass('reverse-eaten'); 
                              $('.container').removeClass('move');
    $('.container').addClass('reverse-move');
  
 } , 25000);
          
            setTimeout( function(){
 
  
  $('.tuna').addClass('eaten');
 } , 29000);
}
)

    };
    
    $(document).ready(main);