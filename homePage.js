/**
 * Created by tonyhendrick on 6/16/15.
 */
var userName = "";
var password = "";

function logIn(){
    var userName = prompt("Username: ");
    var password = prompt("Password: ");
}

var x;

function changecolors() {
    x = 1;
    setInterval(change, 1000);
}

function change() {

    var hex = ["red", "blue", "white"];

    var color = hex[Math.floor(Math.random() * 3)];

    document.body.style.background = color;
    document.getElementById('social').style.backgroundColor = color;
}

$(document).ready(function() {
    changecolors();
});