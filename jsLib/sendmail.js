$(document).ready(function(){
	$("#submitBtn").click(validateSubmission);
	$("#clearBtn").click(clearFields);
	$('#senderField').focus(function(){
		if($(this).val().indexOf('Your name')==0)
		$(this).val('');
	});
	
	$('#senderField').blur(function(){
		if($(this).val().length==0)
		$(this).val('Your name');
	});
	
	$('#emailField').focus(function(){
		if($(this).val().indexOf('yourname@example.com')==0)
		$(this).val('');
	});
	
	$('#emailField').blur(function(){
		if($(this).val().length==0)
		$(this).val('yourname@example.com');
	});
	
	$('#messageField').focus(function(){
		if($(this).val().indexOf('Your message here')==0)
		$(this).val('');
	});
	
	$('#messageField').blur(function(){
		if($(this).val().length==0)
		$(this).val('Your message here');
	});
});

function validateSubmission()
{
	var name = $.trim($('#senderField').val());
	var email = $.trim($('#emailField').val());
	var msg = $.trim($('#messageField').val());
	var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	if( name.indexOf('Your name')==0 || name.length==0 )
	{
		$("#statusText").html("Please enter your name"); 
		$("#statusText").css('visibility','visible');
	}
	else if( email.indexOf('yourname@example.com')==0 || email.length==0 || !email.match(pattern))
	{
		$("#statusText").html("Please enter your email"); 
		$("#statusText").css('visibility','visible');
	}
	else if( msg.indexOf('Your message here')==0  || msg.length==0 )
	{
		$("#statusText").html("Please leave a message for me"); 
		$("#statusText").css('visibility','visible');
	}
	else
	{
		sendmail();
	}
}

function sendmail()
{
	//console.log('clicked');
	var sender = $("#senderField").val();
	var email = $("#emailField").val();
	var message = $("#messageField").val();
	var msgStatus = "";
	$.post("http://meghasandesh.net/php/sendmail.php",{sender:sender,email:email,subject:"meghasandesh.net",message:message},function(returnData){
				console.log(returnData);
				
				msgStatus = (returnData == 1 ? "Message sent!" : "An error has occured. Please email me at msandesh3@gatech.edu");
				$("#statusText").html(msgStatus);
				$("#statusText").css('visibility','visible');
			}	
		)
		.error(function() { $("#statusText").html(msgStatus); $("#statusText").css('visibility','visible');});
}

function clearFields()
{
	$("#senderField").val('Your name');
	$("#emailField").val('yourname@example.com');
	$("#messageField").val('Your message here');
}