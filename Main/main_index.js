document.getElementById("Button").onclick = function() {
    var myText = document.getElementById("inputBox").value;
    document.getElementById("h2Tag").innerHTML = 'Your text is: ' + myText;
};