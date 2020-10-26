function information (){
    document.getElementById("info").innerHTML = " My name is shehla" ;
}

function changeColor(){
    document.getElementById("color").style.backgroundColor = "#957A69"; 
}

function ChangeColorsOfC1 () {

    var elements = document.getElementsByClassName('c1');

    //elements[1].style.backgroundColor = '#0f0';

    for (var n=0; n<elements.length; n++) {
        elements[n].style.backgroundColor = '#eee';
    }

}

function ChangeColorsOfAllDivs () {

    var elements = document.getElementsByTagName('div');

    //elements[1].style.backgroundColor = '#0f0';

    for (var n=0; n<elements.length; n++) {
        elements[n].style.backgroundColor = '#fee';
    }

}

