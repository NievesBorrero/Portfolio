
$(document).ready(init);
 
	let invisible = true;

	let ocultar =()=>{
	     	$('nav').animate({
	            left: '-100%'
	        });        
	        invisible = true;
	        //$(".menu").show();
	     	        
	 }
	 
	function init(){	
			$('.menu').click(function(event){
	        event.preventDefault();

	        if(invisible == true){
	            $('nav').animate({
	                left: '0'
	            });
	            //$(".menu").hide();
	            invisible = false;
	        } 
	        else {
	            invisible = true;
	            $('nav').animate({
	                left: '-100%'
	            });
	        }
	     $('.option').click(ocultar);
	     $('main').click(ocultar);
	    });	    

};
