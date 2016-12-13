// on page load set focus to the name input field
$(document).ready(function(){$("#name").focus();}); 
// if job role is "other" add text area
var otherText = document.createElement("textarea");
var lineBreak = document.createElement("br");
otherText.setAttribute("rows","1");
otherText.setAttribute("cols","30");
otherText.setAttribute("id","other-title");
otherText.setAttribute("placeholder","Your Title");
$("#title").change(function(){
	var jobRole = $("#title").val();
	console.log(jobRole);
	if (jobRole === "other"){
        $("fieldset")[0].append(lineBreak);
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
// dynamic itinerary update
var regTotal = 0;
var checkboxToggle = [];
var totalBox = document.createElement("p");
var totalBoxText = "";
$(".activities").append(totalBox);
var checkBoxes = $(".activities input[type='checkbox']" );
checkBoxes.change(function(){
console.log("a box was checked");
var selected_id = Array.prototype.indexOf.call(checkBoxes, this);
console.log(selected_id);
if (selected_id === 0){
    regTotal = regTotal + 200;
}
if (selected_id === 1){
    checkBoxes[3].disabled = true;
    regTotal = regTotal + 100;
       if(checkBoxes[1].checked === false){
        checkBoxes[3].disabled = false;
    }
}
if (selected_id === 2){
    checkBoxes[4].disabled = true;
    regTotal = regTotal + 100;
 
    if(checkBoxes[2].checked === false){
        checkBoxes[4].disabled = false;
    }
}
if (selected_id === 3){
    checkBoxes[1].disabled = true;
    regTotal = regTotal + 100;
    
    if(checkBoxes[3].checked === false){
        checkBoxes[1].disabled = false;
    }
}
if (selected_id === 4){
    checkBoxes[2].disabled = true;
    regTotal = regTotal + 100;
 
    if (checkBoxes[4].checked === false){
         checkBoxes[2].disabled = false;
    }
}
if (selected_id === 5){regTotal = regTotal + 100;}
if (selected_id === 6){regTotal = regTotal + 100;}
    totalBoxText = "YOUR REGISTRATION TOTAL IS: $" + regTotal + ".00";
    totalBox.innerHTML = totalBoxText;
    console.log(regTotal);
})

/*
var tallyCost = function (){}
var displayCost = function (){}
*/

