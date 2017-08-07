function eleve(id, prenom, nom, sexe, age) {
    this.id = id;
    this.prenom = prenom;
    this.nom = nom;
    this.sexe = sexe.toLowerCase();
    this.age = parseInt(age);
    this.affiche = function () {
        if (this.sexe == "m"){
        console.log("Monsieur " + this.prenom + " " + this.nom);
        }
        if (this.sexe == "f"){
        console.log("madame " + this.prenom + " " + this.nom);
        }
    }
}

function classe() {
    this.curIdEleve = 1;
    this.eleves = [];
    // methode ajout eleve
    this.addEleve = function (prenom, nom, sexe, age ) {
        var nouveau =  new eleve(this.curIdEleve, prenom, nom, sexe, age )
        this.eleves.push(nouveau)
        this.curIdEleve++
    }
    //methode supprimer eleve
    this.removeEleve = function (id) {
        this.eleves.splice(id, 1)
    }
    //methode compte eleve
    this.compteEleve = function (sexe) {
        var nbEleve = this.eleves.length;
        var masculin = 0;
        var feminin = 0
        for (var i = 0; i < nbEleve; i++) {
            if (this.eleves[i].sexe == "m") {
                masculin++
            }
        }
        feminin = nbEleve - masculin;
        if (sexe == "m") {
            return masculin
        }
        else if (sexe == "f") {
            return feminin
        }
        else if (sexe == "a") {
            return nbEleve
        }
        else {
            return "erreur d'argument, veuillez renseignez 'm' ou 'f' ou 'a'"
        }
    }
    //methode affiche les eleves
    this.afficheEleves = function () {
        console.log("cette classe contient les eleves suivant : ")
        for (var i = 0; i < this.eleves.length; i++) {
            this.eleves[i].affiche()
        }

    }
    //methode moyenne age eleves
    this.moyenneAgeEleves = function () {
        var total = 0;
        var nbEleve = this.eleves.length;
        for (var i = 0; i < nbEleve; i++) {
            total += this.eleves[i].age
        }
        return total / nbEleve
    }
    //methode affiche stat de la classe
    this.afficheStatClasse = function () {
        console.log("cette classe contient : " + this.compteEleve("a") + " eleves")
        console.log("cette classe contient : " + this.compteEleve("m") + " hommes")
        console.log("cette classe contient : " + this.compteEleve("f") + " femmes")
        console.log("La moyenne d'age des eleves est de : " + this.moyenneAgeEleves() + " ans")
    }
}

var classe1 = new classe()
classe1.addEleve("jim", "bou", "m", 30)
classe1.addEleve("leo", "sub", "f", 20)
classe1.addEleve("chris", "topher", "m", 40)
classe1.afficheEleves()
classe1.afficheStatClasse()