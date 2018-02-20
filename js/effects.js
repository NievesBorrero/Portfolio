
$(document).ready(init);
 
	let invisible = true;

	let ocultar =()=>{
	     	$('nav').animate({
	            left: '-100%'
	        });        
	        invisible = true;
	        mostrarOpen();
	     	        
	}

	let mostrarOpen = () =>{
		$("#close").css('display', 'none');
	    $("#open").css('display', 'inline');
	}

	let mostrarClose = () =>{
		$("#close").css('display', 'inline');
	    $("#open").css('display', 'none');
	}
	 
	function init(){		
			$('.menu').click(function(event){
	        event.preventDefault();

	        if(invisible == true){
	            $('nav').animate({
	                left: '0'
	            });
	            mostrarClose();
	            invisible = false;
	        } 
	        else {
	            invisible = true;
	            $('nav').animate({
	                left: '-100%'
	            });
	            mostrarOpen();
	        }
	     $('.option').click(ocultar);
	     $('main').click(ocultar);
	    });	 

	    $('nav li').click(mostrarOpen);

	    
};
