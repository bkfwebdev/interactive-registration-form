// on page load set focus to the name input field
$(document).ready(function(){$("#name").focus();}); 
// if job role is "other" add text area
var otherText = document.createElement("textarea");
otherText.setAttribute("rows","1");
otherText.setAttribute("cols","30");
otherText.setAttribute("id","other-title");
otherText.setAttribute("placeholder","Your Title");
$("#title").change(function(){
	var jobRole = $("#title").val();
	console.log(jobRole);
	if (jobRole === "other"){
		$("fieldset")[0].append(otherText); 
		}
}); 
// hide invalid & show valid color select options for current t-shirt theme
$("#design").change (function(){
    var designSelect = $("#design").val();
    var x = null;
    var theColors = $("#color > option");

    if (designSelect == "js puns"){
        for(x=0; x<=2; x++){
        theColors[x].style.display = "block";
            theColors[x+3].style.display = "none";
        }
    }
    if (designSelect == "heart js"){
        for (x=0;x<=2; x++){
         theColors[x].style.display = "none";
            theColors[x+3].style.display = "block";
        }
    }
    });