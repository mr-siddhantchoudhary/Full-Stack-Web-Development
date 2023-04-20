function vowel() {
    // name = siddhant, contains i and a vowel. total of two (2)
    let name = document.getElementById("name").value;
    name = name.toLowerCase();
    let count = 0;
    for (i in name) {
        //"A, E, I, O, U, a, e, i, o, u"
        if (name[i] === 'a' || name[i] === 'e' || name[i] === 'i' || name[i] === 'o' || name[i] === 'u') {
            count++;
        }
    }
    console.log(count);
    document.getElementById("nameBlock").style.display = "none";
    document.getElementById("resultBlock").style.display = "flex";
    document.getElementById("resultPara").innerText = "Total Vowels: " + count;
}