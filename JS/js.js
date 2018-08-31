var base_datos ={
  "postres" : [
    {"nombre" : "donitas" , "ubicacion" : "esquina donitas"},
    {"nombre" : "nieves" , "ubicacion" : "nieve"},
    {"nombre" : "galletas" , "ubicacion" : "galletitas"}
  ]
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// AIzaSyCDDGfrhXGi7V8Cc7fcwF3d2_LrQQf4AVg
