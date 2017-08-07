function eleve(prenom, nom, sexe, age) {
    this.id = 0;
    this.prenom = prenom;
    this.nom = nom;
    this.sexe = sexe;
    this.age = age;
    this.affiche = function () {
        if (this.sexe == "m"){
        console.log("Monsieur " + this.prenom + " " + this.nom);
        }
        if (this.sexe == "f"){
        console.log("madame " + this.prenom + " " + this.nom);
        }
    }
}


var curIdEleve = 0

function classe() {
    this.curIdEleve = curIdEleve;
    this.eleves = [];

    this.addEleve = function (ajout) {
        this.eleves.push(ajout)
        ajout.id = curIdEleve
        curIdEleve++
    }

    this.removeEleve = function (id) {
        this.eleves.splice(id, 1)
    }
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
            return "erreur d'argument"
        }
    }
    this.afficheEleves = function () {
        console.log("cette classe contient les eleves suivant : ")
        for (var i = 0; i < this.eleves.length; i++) {
            this.eleves[i].affiche()
        }

    }
    this.moyenneAgeEleves = function () {
        var total = 0;
        var nbEleve = this.eleves.length;
        for (var i = 0; i < nbEleve; i++) {
            total += parseInt(this.eleves[i].age)
        }
        return total / nbEleve
    }




    this.afficheStatClasse = function () {
        console.log("cette classe contient : " + this.compteEleve("a") + " eleves")
        console.log("cette classe contient : " + this.compteEleve("m") + " hommes")
        console.log("cette classe contient : " + this.compteEleve("f") + " femmes")
        console.log("La moyenne d'age des eleves est de : " + this.moyenneAgeEleves() + " ans")
    }
}
var jim = new eleve("jim", "bo", "m", 30);
var leo = new eleve("leo", "sub", "f", 20);
var classe1 = new classe()
classe1.addEleve(jim)
classe1.addEleve(leo)
// jim.affiche()
// leo.affiche()
// classe1.affiche()
// classe1.compteEleve("f")
classe1.afficheEleves()
classe1.afficheStatClasse()