// jQuery animation by Studio Brahma 

$(document).ready(function(){

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
        $(".Lineofcredit").hide();
        $(".Timeloan").hide();
        $(".lettercredit").hide();
        $(".Expresslease").hide();
        $(".SBHome").hide();
        $(".ACH").hide();
        $(".Termloan").hide();
    } else {
       $(".commercialmortgage").hide();
    }
});



$('.Lineofcredit1').click(function() {	
	if($(this).is(':checked')) {		
    $(".Lineofcredit").show();
    $(".commercialmortgage").hide();
    $(".Timeloan").hide();
    $(".lettercredit").hide();
    $(".Expresslease").hide();
    $(".SBHome").hide();
    $(".ACH").hide();
    $(".Termloan").hide();
    } else {
       $(".Lineofcredit").hide();
    }
});



$('.Timeloan1').click(function() {	
	if($(this).is(':checked')) {		
    $(".Timeloan").show();
    $(".commercialmortgage").hide();
    $(".Lineofcredit").hide();
    $(".lettercredit").hide();
    $(".Expresslease").hide();
    $(".SBHome").hide();
    $(".ACH").hide();
    $(".Termloan").hide();
    } else {
       $(".Timeloan").hide();
    }
});

$('.lettercredit1').click(function() {	
	if($(this).is(':checked')) {		
    $(".lettercredit").show();
    $(".commercialmortgage").hide();
    $(".Lineofcredit").hide();
    $(".Timeloan").hide();
    $(".Expresslease").hide();
    $(".SBHome").hide();
    $(".ACH").hide();
    $(".Termloan").hide();
    } else {
       $(".lettercredit").hide();
    }
});


$('.Expresslease1').click(function() {	
	if($(this).is(':checked')) {		
    $(".Expresslease").show();
    $(".commercialmortgage").hide();
    $(".Lineofcredit").hide();
    $(".Timeloan").hide();
    $(".lettercredit").hide();
    $(".SBHome").hide();
    $(".ACH").hide();
    $(".Termloan").hide();
    } else {
       $(".Expresslease").hide();
    }
});


$('.ACH1').click(function() {	
	if($(this).is(':checked')) {		
    $(".ACH").show();
    $(".commercialmortgage").hide();
    $(".Lineofcredit").hide();
    $(".Timeloan").hide();
    $(".lettercredit").hide();
    $(".Expresslease").hide();
    $(".SBHome").hide();
    $(".Termloan").hide();
    } else {
       $(".ACH").hide();
    }
});


$('.SBHome1').click(function() {	
	if($(this).is(':checked')) {		
    $(".SBHome").show();
    $(".commercialmortgage").hide();
    $(".Lineofcredit").hide();
    $(".Timeloan").hide();
    $(".lettercredit").hide();
    $(".Expresslease").hide();
    $(".ACH").hide();
    $(".Termloan").hide();
    } else {
       $(".SBHome").hide();
    }
});

$('.Termloan1').click(function() {	
	if($(this).is(':checked')) {		
    $(".Termloan").show();
    $(".commercialmortgage").hide();
    $(".Lineofcredit").hide();
    $(".Timeloan").hide();
    $(".lettercredit").hide();
    $(".Expresslease").hide();
    $(".SBHome").hide();
    $(".ACH").hide();
    } else {
       $(".Termloan").hide();
    }
});
 
    

    
    
$('.dueyes1').live("change", function(){
      $(".dueyes").show();    
});
$('.dueno1').live("change", function(){
      $(".dueyes").hide();    
});



$('.isapplicantyes').live("change", function(){	

      $(".applicant").show();
    
});
$('.isapplicantno').live("change", function(){

      $(".applicant").hide();
    
});


$('.isapplicantyes1').live("change", function(){

      $(".applicant2").show();
    
});
$('.isapplicantno1').live("change", function(){	

      $(".applicant2").hide();
    
});

$('.gamblingyes').live("change", function(){

      $(".gambling").show();
    
});
$('.gamblingno').live("change", function(){

      $(".gambling").hide();
    
});


$('.overdraftyes').live("change", function(){

      $(".overdraft").show();
    
});
$('.overdraftno').live("change", function(){	

      $(".overdraft").hide();
    
});



$('.other_title1').live("change", function(){
	if($(this).is(':checked')) {		
      $(".other_title").show();
    } else {
       $(".other_title").hide();
    }
});






$('.rent1').live("change", function(){

      $(".Rent").show();
	   $(".OwnedBlock").hide();
    
});
$('.own1').live("change", function(){

      $(".Rent").hide();
    
});
    
$('.other1').live("change", function(){

      $(".other11").show();
    
}); 
  
  
  
  
  
$('.own1').live("change", function(){

      $(".Rent").hide();
	     $(".OwnedBlock").show();
    
});
    

  
  
  
  
  
  
  
  
  
    
    
$('.legal2').live("change", function(){

      $(".legal").show();
    
});
$('.legal1').live("change", function(){

      $(".legal").hide();
    
});

 
 
 
 $('.otherintp').live("change", function() {	
	if($(this).is(':checked')) {		
      $(".other22").show();
    } else {
       $(".other22").hide();
    }
});
 
 
 $('.tempr').live("change", function(){

      $(".other11").hide();
    
});
  

});

