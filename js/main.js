// accordion part
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// form part
function formData(){
  var fname=document.forms ["userform"] ["firstname"];
  var lname=document.forms ["userform"] ["lastname"];
  var sub=document.forms ["userform"] ["subject"];
  var phn=document.forms ["userform"] ["phone"];
  
  if(fname.value == ""){
    window.alert("Enter your first name!")
    fname.focus();
    return false;
  }
  if(lname.value == ""){
    window.alert("Enter your last name!")
    lname.focus();
    return false;
  }
  if(fname.value == ""){
    window.alert("Enter your subject name!")
    sub.focus();
    return false;
  }
  if(fname.value == ""){
    window.alert("Enter your phone name!")
    phn.focus();
    return false;
  }
    return true;

  }

