window.addEventListener("load", function() {
    fetch('https://joey.jased.xyz/beemo.txt')
    .then(response=> response.text())
    .then(text=> document.getElementById('beemo').innerHTML = text);
});