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
for (x=0; x<=6; x++){
    checkboxToggle[x] = false;
}
var totalBox = document.createElement("p");
var totalBoxText = "";
$(".activities").append(totalBox);
var checkBoxes = $(".activities input[type='checkbox']" );
checkBoxes.change(function(){
console.log("a box was checked");
var selected_id = Array.prototype.indexOf.call(checkBoxes, this);
console.log(selected_id);
if (selected_id === 0){
    if (checkboxToggle[0] === false){
    regTotal = regTotal + 200;
        checkboxToggle[0] = true;
    }else{
    if(checkboxToggle[0] === true){
        regTotal = regTotal - 200;
        checkboxToggle[0] = false
    }
    }
}
if (selected_id === 1){
    if (checkboxToggle[1] === false){
    regTotal = regTotal + 100;
    checkBoxes[3].disabled = true;
    checkboxToggle[1] = true;
    }else{
    if(checkboxToggle[1] === true){
        regTotal = regTotal - 100;
        checkBoxes[3].disabled = false;
        checkboxToggle[1] = false;
    }
}
}
if (selected_id === 2){
    if (checkboxToggle[2] === false){
    regTotal = regTotal + 100;
    checkBoxes[4].disabled = true;
    checkboxToggle[2] = true;
    }else{
    if(checkboxToggle[2] === true){
        regTotal = regTotal - 100;
        checkBoxes[4].disabled = false;
        checkboxToggle[2] = false;
    }
}
}
if (selected_id === 3){
    if (checkboxToggle[3] === false){
    regTotal = regTotal + 100;
    checkBoxes[5].disabled = true;
    checkboxToggle[3] = true;
    }else{
    if(checkboxToggle[3] === true){
        regTotal = regTotal - 100;
        checkBoxes[5].disabled = false;
        checkboxToggle[3] = false;
    }
}
}
if (selected_id === 4){
    if (checkboxToggle[4] === false){
    regTotal = regTotal + 100;
    checkBoxes[2].disabled = true;
    checkboxToggle[4] = true;
    }else{
    if(checkboxToggle[4] === true){
        regTotal = regTotal - 100;
        checkBoxes[2].disabled = false;
        checkboxToggle[4] = false;
    }
}
}
if (selected_id === 5){
    if (checkboxToggle[5] === false){
    regTotal = regTotal + 100;
    checkboxToggle[5] = true;
    }else{
    if(checkboxToggle[5] === true){
        regTotal = regTotal - 100;
        checkboxToggle[5] = false;
    }
}
}
if (selected_id === 6){
    if (checkboxToggle[6] === false){
    regTotal = regTotal + 100;
    checkboxToggle[6] = true;
    }else{
    if(checkboxToggle[6] === true){
    regTotal = regTotal - 100;
    checkboxToggle[6] = false;
    }
}
}
    totalBoxText = "YOUR REGISTRATION TOTAL IS: $" + regTotal + ".00";
    totalBox.innerHTML = totalBoxText;
    console.log(regTotal);
})

/*
var tallyCost = function (){}
var displayCost = function (){}
*/

