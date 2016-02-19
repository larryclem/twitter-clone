$(document).ready(function() {

//Hide the sumbit tweet button & character count on load
$('#tweet-submit').hide();

$('#char-count').hide();

//When a user clicks in the compose tweet area, show the tweet button and char count. Need to fix so that it only expands the reply compose. 

$('.tweet-compose').on('click', function(){
	$(this).css('height','5em');
	$('#tweet-submit').show();
	$('#char-count').show();
})

$('.tweet-compose').blur(function (){
	$(this).css('height','2.5em');
	$('#tweet-submit').hide();
	$('#char-count').hide();
})

// For each keypress, decrease the character count

$('.tweet-compose').keyup(function(){
 
 var charCount = $('.tweet-compose').val().length;	
 $('#char-count').html(140 - charCount);

 //make character count under 140 turn red if it's 10 or lower

 if(140 - charCount <= 10){
 	$('#char-count').css('color', 'red')
 }
 // return to normal grey color if it's 11 or higher after deleting

 else{
 	$('#char-count').css('color', '#999')
 }

 // Hide tweet button if tweet is too long, show if it is acceptable length

 if (charCount > 140) {
 	$('#tweet-submit').hide();
 }

 else {
 	$('#tweet-submit').show();
 }

});

// Add new tweet to stream

$()


})