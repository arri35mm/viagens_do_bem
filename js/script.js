// formulário de email
function enviar(){
    alert("Obrigada por preencher o formulário");
}

// menu de hamburguer
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
