function teste_age(){
    let age = prompt("Quelle est votre age");
    if (age <18)
    {
        document.write(" Attention accès refusé, vous etes mineur");
        document.body.style.backgroundColor ="red";
    
    }
    else
    {
        document.write("OK, vous êtes Majeur");
        document.body.style.backgroundColor="green";
    }
}

function affichage(){
    let prenom = prompt("saisir votre prenom");
    let nom = prompt("saisir votre nom");
    document.write ("<div style='border:5px solid blue; width:400px; height:300px; margin:auto;font-size:2em;'>");
    document.write ("Bonjour  "+ prenom + "   " + nom);
    document.write ("</div");
}
function test_couleur(){
    let couleur = prompt("Donner une couleur")
    if (couleur == "rouge") {
        document.body.style.backgroundColor = "red"

    }
    else if (couleur == "bleu"){
        document.body.style.backgroundColor = "blue"

    }
    else if (couleur
        == "vert"){
        document.body.style.backgroundColor = "green"

    }
    else{
        document.write("Couleur non comprise")
    }
}
function calcul_moyenne(){
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisième note :");

    var some = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la some : " + some + "<br>");
    var moyenne = some/3;

    document.write("Voici la moyenne : " + moyenne + "<br>");

    if (moyenne >= 10) {
        document.write("L'étudiant est admis (moyenne >= 10).<br>");
    }
    else {
        document.write("L'étudiant est redoublant (moyenne < 10).<br>");
    }

    if (moyenne < 10) {
        document.write("L'étudiant est refusé (moyenne < 10).<br>");

    }else if (moyenne >= 10 && moyenne < 14) {
        document.write("L'étudiant est admis (moyenne entre 10 et 14).<br>");
    }else 
    {
        document.write("L'étudiant est admis avec mention bien (moyenne >= 14).<br>");
    }


}