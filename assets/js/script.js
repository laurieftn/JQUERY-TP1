var prix = 55;

$(document).ready(function(){
    $('form').click(function(){ // À l'appui sur le bouton, déclenche la fonction
        var numberChoice = $('#number').val(); // Pour récupérer la valeur de l'input number

        if (numberChoice == prix) { // si nombre choisi = prix
            alert("Gagné !")
        }

        else if (numberChoice < prix) { // si nombre choisi inférieur au prix
            alert("Plus !")
        }

        else {
            alert("Moins !") // si nombre choisi supérieur au prix
        }
    });
});