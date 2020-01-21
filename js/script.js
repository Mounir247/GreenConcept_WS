const myForm = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const errors = document.querySelectorAll(".error");
const required = ["email", "name", "num"];
const hide = document.querySelectorAll(".hide");

myForm.addEventListener("submit", validation);

function validation(e) {
  let data = {};

  e.preventDefault();
  errors.forEach(function(item) {
    item.classList.add("hide");
  });
  let error = false;
  inputs.forEach(function(el) {
    let tempName = el.getAttribute("name");
    

    if (tempName != null) {
      el.style.borderColor = "#ddd";
      if (el.value.length == 0 && required.includes(tempName)) {
        addError(el, "Ce champs d'information est requis", tempName);
      }
      if (tempName == "email") {
        let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
        let result = exp.test(el.value);
        if (!result) {
          addError(el, "Ce champs d'information est requis", tempName);
          error = true;
        }
      }
      
      data[tempName] = el.value;
    }
  });
  if (!error) {
    myForm.submit();
  }
}
function addError(el, mes, fieldName) {
  let temp = el.nextElementSibling;
  temp.classList.remove("hide");
  temp.textContent =  mes;
  el.style.borderColor = "red";
  el.focus();
}
