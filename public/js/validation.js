function validateEmail(email) {
  console.log(email);
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  const warn = document.getElementById("warn");
  if (email.value != "") {
    if (!emailRegex.test(email.value)) {
      warn.style.display = "flex";
      email.style.borderBottomColor = "brown";
      console.log(warn);
    } else {
      warn.style.display = "none";
      email.style.borderBottomColor = "rgba(27, 4, 47, 0.878)";
    }
  }
}
function validateLogin (form){
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  if(form.email.value == '' || form.password.value == ''){
    console.log('1')
    return false;
  }else if(!emailRegex.test(email.value) || form.password.value.length < 5 ){
    console.log('2')
    return false;
  }else{
    console.log('3')
    return true;
  }
}
function validatePass(pass) {
  const warn = document.getElementById("warnpass");
  if (pass.value.length < 5 ) {
    warn.style.display = "flex"
    pass.style.borderBottomColor="brown"
  } else {
    warn.style.display = "none";
    pass.style.borderBottomColor = "rgba(27, 4, 47, 0.878)";
  }
}

function validateSignup (form){
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  if(form.email.value == '' || form.password.value == '' || form.username.value == ''){
    console.log('1')
    return false;
  }else if(!emailRegex.test(email.value) || form.password.value.length < 5  ){
    console.log('2')
    return false;
  }else{
    console.log('3')
    return true;
  }
}