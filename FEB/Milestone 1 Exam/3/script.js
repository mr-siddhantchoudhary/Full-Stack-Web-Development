//function to determind the mix color
//first check if the pair of color inside the fields are correct or not
//if it is correct enter into a new if-else block and if it is not correct print "Invalid color combination"

function mixer(){
    if (((document.getElementById("colorOne").value == 'red' && document.getElementById("colorSecond").value == 'blue') || (document.getElementById("colorOne").value == 'blue' && document.getElementById("colorSecond").value == 'red')) || ((document.getElementById("colorOne").value == 'red' && document.getElementById("colorSecond").value == 'yellow') || (document.getElementById("colorOne").value == 'yellow' && document.getElementById("colorSecond").value == 'red')) || ((document.getElementById("colorOne").value == 'blue' && document.getElementById("colorSecond").value == 'yellow') || (document.getElementById("colorOne").value == 'yellow' && document.getElementById("colorSecond").value == 'blue'))){
        
        if ((document.getElementById("colorOne").value == 'red' && document.getElementById("colorSecond").value == 'blue') || (document.getElementById("colorOne").value == 'blue' && document.getElementById("colorSecond").value == 'red')) {
            console.log("PURPLE");
            document.getElementById("resultPara").innerText = "PURPLE";
            document.getElementById("resultPara").style.color = "purple";

        } else if ((document.getElementById("colorOne").value == 'red' && document.getElementById("colorSecond").value == 'yellow') || (document.getElementById("colorOne").value == 'yellow' && document.getElementById("colorSecond").value == 'red')) {
            console.log("ORANGE");
            document.getElementById("resultPara").innerText = "ORANGE";
            document.getElementById("resultPara").style.color = "orange";         
        } else if ((document.getElementById("colorOne").value == 'blue' && document.getElementById("colorSecond").value == 'yellow') || (document.getElementById("colorOne").value == 'yellow' && document.getElementById("colorSecond").value == 'blue')) {
            console.log("GREEN");
            document.getElementById("resultPara").innerText = "GREEN";
            document.getElementById("resultPara").style.color = "green";         
        }


    } else {
        console.log("Invalid color combination");
        document.getElementById("resultPara").innerHTML = "Invalid color combination. <br><br> Note: Enter only <span style='color:red'>'red:blue'</span>, <span style='color:red'>'red:yellow'</span> or <span style='color:red'>'blue:yellow'</span>";
        document.getElementById("resultPara").style.color = "black";
    }
}

