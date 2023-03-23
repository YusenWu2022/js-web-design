
function check() {
    var form = document.forms.myform;
    if (myform.gender.value == "woman" && myform.major.value == "labor") {
        alert("invalid application!")
        return false;
    }
    return true;
}