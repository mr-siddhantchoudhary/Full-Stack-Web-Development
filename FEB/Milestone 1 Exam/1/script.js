// function to match password and confirm password fields
function passwordMatch(){
    if (document.getElementById("enteredPassword").value === '' && document.getElementById("confirmedPassword").value === ''){
        console.log("Password field is empty. Please enter the password.")
    }else if (document.getElementById("enteredPassword").value === document.getElementById("confirmedPassword").value){
        console.log("Password Matched. Password validation Successful.");
        document.getElementById("result").innerText = "Password Matched. Password validation Successful.";
    }else {
        console.log("Password didn't match. Password validation unsuccessful");
    }
}