document.getElementById("copyButton").addEventListener("click", function() {
    var textToCopy = "0x89a08199122353364774 "; 
    var tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = textToCopy;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
});