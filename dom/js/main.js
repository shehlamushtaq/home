//alert ("Page Loaded");

function ShowAlert () {
    alert ("Hello World");
}

function ChangeMainHeading () {

    var previous = document.getElementById("main-heading").innerHTML;

    document.getElementById("main-heading").innerHTML = "Asim";
    document.getElementById("sub-heading").innerHTML = previous;

}

function ChangeColor () {
    //document.getElementById("sub-heading").style.color = '#f00';
    document.getElementById("body").style.backgroundColor = '#f00';

}