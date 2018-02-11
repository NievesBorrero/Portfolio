
$(document).ready(init);
 
let visible = true;
 
function init(){	
    $('.menu').click(function(event){
        event.preventDefault();
        if(visible == true){
            $('nav').animate({
                left: '0'
            });
            visible = false;
        } else {
            visible = true;
            $('nav').animate({
                left: '-100%'
            });
        }
     $('.option').click(ocultar); 
     $('main').click(ocultar);
    });

 let ocultar =()=>{
     visible = true;
        $('nav').animate({
            left: '-100%'
        });
 }
};
