let result;



function calculateBtn(){
    if (document.getElementById("operator").value === '+' || document.getElementById("operator").value === '-' || document.getElementById("operator").value === '*' || document.getElementById("operator").value === '/') {
        switch (document.getElementById("operator").value) {
            case '+':
                result = Number(document.getElementById("numberOne").value) + Number(document.getElementById("numberTwo").value);
                console.log(result);
                break;
            case '-':
                result = Number(document.getElementById("numberOne").value) - Number(document.getElementById("numberTwo").value);
                console.log(result);
                break;
            case '*':
                result = Number(document.getElementById("numberOne").value) * Number(document.getElementById("numberTwo").value);
                console.log(result);
                break;
            case '/':
                result = Number(document.getElementById("numberOne").value) / Number(document.getElementById("numberTwo").value);
                console.log(result);
                break;
        }
    } else {
        console.log("Invalid operator");
    }
}