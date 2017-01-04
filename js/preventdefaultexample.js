var form = document.getElementById('test');

if (!form.addEventListener) {
    form.attachEvent("onsubmit", checkForm);
}
else {
    form.addEventListener("submit", checkForm, false);
}

function checkForm(e) { 
    if(form.elements['name'].value == "") {
        e.preventDefault();
        alert("Invalid name!");   
    }
}