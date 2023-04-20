function capitalize(){
    let name = document.getElementById("name").value;

    let capitalized = (name[0] === name[0].toLowerCase()) ? name[0].toUpperCase() + name.slice(1) : name;

    console.log(capitalized); 

    document.getElementById("nameBlock").style.display = "none";
    document.getElementById("resultBlock").style.display = "flex";
    document.getElementById("resultPara").innerHTML = "Result: "+ capitalized;

}
