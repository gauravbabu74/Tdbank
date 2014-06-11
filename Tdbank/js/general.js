// jQuery animation by Studio Brahma 

$(document).ready(function(){

// tipsy
 $(function() {
	  $('.inpbf').tipsy({gravity: 'se'});
	   $('.IN1b').tipsy({gravity: 'se'});
	   $('.IN3').tipsy({gravity: 'se'});
	  $('.IN3b').tipsy({gravity: 'se'});
	   $('.inpbf_sl').tipsy({gravity: 'se'});
	    $('.IN1').tipsy({gravity: 'se'});
		$('.IN5').tipsy({gravity: 'se'});
		$('.IN6').tipsy({gravity: 'se'});
		$('.IN4').tipsy({gravity: 'se'});
		
		
  });
$('.workingcapital1').click(function() {	
	if($(this).is(':checked')) {		
      $(".specifyuse").show();
    } else {
       $(".specifyuse").hide();
    }
});

$('.purchasevehicle1').click(function() {	
	if($(this).is(':checked')) {		
      $(".pleasedescribe").show();
    } else {
       $(".pleasedescribe").hide();
    }
});

$('.purchaseequipment1').click(function() {	
	if($(this).is(':checked')) {		
      $(".purchaseequipment").show();
    } else {
       $(".purchaseequipment").hide();
    }
});


$('.others1').click(function() {	
	if($(this).is(':checked')) {		
      $(".others").show();
    } else {
       $(".others").hide();
    }
});


$('.modification1').click(function() {	
	if($(this).is(':checked')) {		
      $(".modification").show();
    } else {
       $(".modification").hide();
    }
});


$('.purchaseprice1').click(function() {	
	if($(this).is(':checked')) {		
      $(".purchaseprice").show();
    } else {
       $(".purchaseprice").hide();
    }
});


$('.realestate1').click(function() {	
	if($(this).is(':checked')) {		
      $(".realestate").show();
    } else {
       $(".realestate").hide();
    }
});


$('.commercialmortgage1').click(function() {	
	if($(this).is(':checked')) {		
      $(".commercialmortgage").show();
    } else {
       $(".commercialmortgage").hide();
    }
});



$('.Lineofcredit1').click(function() {	
	if($(this).is(':checked')) {		
      $(".Lineofcredit").show();
    } else {
       $(".Lineofcredit").hide();
    }
});



$('.Timeloan1').click(function() {	
	if($(this).is(':checked')) {		
      $(".Timeloan").show();
    } else {
       $(".Timeloan").hide();
    }
});

$('.lettercredit1').click(function() {	
	if($(this).is(':checked')) {		
      $(".lettercredit").show();
    } else {
       $(".lettercredit").hide();
    }
});


$('.Expresslease1').click(function() {	
	if($(this).is(':checked')) {		
      $(".Expresslease").show();
    } else {
       $(".Expresslease").hide();
    }
});


$('.ACH1').click(function() {	
	if($(this).is(':checked')) {		
      $(".ACH").show();
    } else {
       $(".ACH").hide();
    }
});


$('.SBHome1').click(function() {	
	if($(this).is(':checked')) {		
      $(".SBHome").show();
    } else {
       $(".SBHome").hide();
    }
});

$('.Termloan1').click(function() {	
	if($(this).is(':checked')) {		
      $(".Termloan").show();
    } else {
       $(".Termloan").hide();
    }
});
 
    
console.log($('.rahman'));
$('.rahman').change(function() {
      $(".dueyes").show();    
});
$('.rahman1').change(function() {
      $(".dueyes").hide();    
});



$('.isapplicantyes').click(function() {	

      $(".applicant").show();
    
});
$('.isapplicantno').click(function() {	

      $(".applicant").hide();
    
});


$('.isapplicantyes1').click(function() {	

      $(".applicant2").show();
    
});
$('.isapplicantno1').click(function() {	

      $(".applicant2").hide();
    
});

$('.gamblingyes').click(function() {	

      $(".gambling").show();
    
});
$('.gamblingno').click(function() {	

      $(".gambling").hide();
    
});


$('.overdraftyes').click(function() {	

      $(".overdraft").show();
    
});
$('.overdraftno').click(function() {	

      $(".overdraft").hide();
    
});



$('.other_title1').click(function() {	
	if($(this).is(':checked')) {		
      $(".other_title").show();
    } else {
       $(".other_title").hide();
    }
});






$('.rent1').click(function() {	

      $(".Rent").show();
    
});
$('.own1').click(function() {	

      $(".Rent").hide();
    
});


});


















