var x = document.getElementById("div1")
var a = document.getElementById("div2")
var b = document.getElementById("div3")
var c = document.getElementById("div4")

//new commit

window.onload = function() {
    redimenciona()
};

window.addEventListener('resize', function() { redimenciona() })

function redimenciona() {
    x.style.margin = "150px auto";
    x.style.backgroundColor = "";
    x.style.border = "";
    x.style.width = window.innerWidth + "px";
    x.style.height = window.innerHeight + "px";
    x.style.color = "white";
    x.style.fontFamily = "font-family: Graphik-Medium, Graphik-Regular, 'Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif";
    x.style.fontSize = "300%";
    x.style.fontWeight = "bold";
    x.style.height = window.innerHeight - 300 + "px";
    x.style.width = window.innerWidth - 100 + "px";

    a.style.backgroundColor = "#3333ff";
    a.style.marginTop = "400px";
    a.style.border = "solid blue";
    a.style.textAlign = "le";
    a.style.width = "100%";
    a.style.height = "400px";
    a.style.borderRadius = "10px";
    a.style.color = "white";
    a.style.fontSize = "200%";
    a.style.paddingLeft = "5%";
    a.style.paddingTop = "5%";
    a.style.opacity = "90%";

    b.style.backgroundColor = "white";
    b.style.border = "";
    b.style.fontFamily = "font-family: Graphik-Medium, Graphik-Regular, 'Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif";
    b.style.width = "100%";
    b.style.height = "100px";
    b.style.fontSize = "200%";
    b.style.color = "black";
    b.style.borderRadius = "10px";
    b.style.paddingLeft = "5%";
    b.style.display = "inline-block";

    c.style.border = "";
    c.style.textAlign = "center";
    c.style.width = "30%";
    c.style.height = "200px";
    c.style.borderRadius = "10px";
    c.style.color = "#0D6EFD";
    c.style.fontSize = "200%";

}