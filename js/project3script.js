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
    } else {
    if (designSelect == "heart js"){
        for (x=0;x<=2; x++){
         theColors[x].style.display = "none";
            theColors[x+3].style.display = "block";
        }
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


totalBox.setAttribute("ID","totalBox");
$(".activities").append(totalBox);
var checkBoxes = $(".activities input[type='checkbox']" );
checkBoxes.change(function(){

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
// show registration total at bottom of registration section
   if (regTotal > 0){ 
    totalBoxText = "TOTAL: $" + regTotal + ".00";
    totalBox.innerHTML = totalBoxText;
   } else {
       totalBoxText = "";
       totalBox.innerHTML = totalBoxText;
   }
   
    
   
})

//hide/show active payment option (credit card as default)
// grab paragraphs for bitcoin and pay pal
var thePs =  $("p").parent("div");
thePs[0].style.display = "none";
thePs[1].style.display = "none";
// grab credit card input div
var creditCard = $("#credit-card");
$("#payment").change(function(){
// console.log($("#payment").val())
if ($("#payment").val() == "bitcoin"){
    // console.log("option 1");
   $("p").parent("div")[0].style.display = "none";
   $("p").parent("div")[1].style.display = "block";
   document.getElementById("credit-card").style.display = "none";
} else {
    // console.log("option 2");
if ($("#payment").val() == "paypal"){
    $("p").parent("div")[0].style.display = "block";
    $("p").parent("div")[1].style.display = "none";
    document.getElementById("credit-card").style.display = "none";
} else {
    // console.log("option 3");
    $("p").parent("div")[0].style.display = "none";
    $("p").parent("div")[1].style.display = "none";
    document.getElementById("credit-card").style.display = "block";
}
}
});
// payment section & form validation
var errorMessage = [];
errorMessage[0] = "Name field can't be empty"
errorMessage[1] = "Email field must be a validly formatted e-mail address"
errorMessage[2] = "At least one activity must be checked from the list under Register for Actitivities."
errorMessage[3] = "Payment option must be selected."
errorMessage[4] = "If Credit Card is the selected payment option, make sure you have supplied a credit card number, a zip code, and a 3 number CVV value."
var formCheck = [];
for (x=0; x<=4; x++){
    formCheck[x] = false;
}
if ($("#name").val() != ""){formCheck[0] = true;}
// if ($("#email")){regex email test formCheck[1] = true}
if (regTotal != 0){formCheck[2] = true;}
// if ( valid payment option selected){formCheck[3] = true;}
// if ( car info is valid){formCheck[4] = true;}

// on submit check form validation conditions
// promp user withh appropriate error message
// prevent default on submit if any of the 5 checks are false


