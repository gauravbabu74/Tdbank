// jQuery animation by Studio Brahma 

$(document).ready(function(){
// login
$('.helpnv ').click(function(){	$(".helpcontain ul").slideToggle(300);  	$('.helpnv').toggleClass( "act" );  });
$('#log_BX .clsmnub').click(function(){ 	$("#log_BX").slideToggle(300);   $('.log_men').removeClass("act");   $('.srh_men').removeClass("act");    $('.soc_men').removeClass("act");    $('.soc_men .scmsk').show();   $('.srh_men .scmsk').show();   $('.log_men .scmsk').show(); }); 	

});

// document list
$(document).ready(function(){ $('.cont').hide(); $('.trig:first').addClass('active').next().show(); $('.trig').click(function(){	if( $(this).next().is(':hidden') ) { $('.trig').removeClass('active').next().slideUp(); $(this).toggleClass('active').next().slideDown(); } return false;  }); }); 
