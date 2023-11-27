// Magic 8 Ball

// Button Event Listener 
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
    // INPUTS
    let answer = document.getElementById("Answer-in").value;
    let username = document.getElementById("Username-in").value;

// Question
if ((question === Does a magic 8 ball actually work?)) {
    document.getElementById("output").innerHTML = "How dare you doubt me!!"
}else {
    document.getElementById("output").innerHTML = "Without a Doubt";
}else {
    document.getElementById("output").innerHTML = "yes";
}else {
    document.getElementById("output").innerHTML = "no";
    }
}