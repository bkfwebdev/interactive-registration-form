// on page loan set focus to the name input field
$(document).ready(function(){$("#name").focus();}); 
// if job role is "other" add text area
var otherText = document.createElement("textarea");
otherText.setAttribute("rows","1");
otherText.setAttribute("cols","30");
otherText.setAttribute("id","other-title")
otherText.setAttribute("placeholder","Your Title");
$("#title").change(function(){
	var jobRole = $("#title").val();
	console.log(jobRole);
	if (jobRole === "other"){
		$("fieldset")[0].append(otherText); 
		}
}); 