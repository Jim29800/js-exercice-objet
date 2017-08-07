function eleve(prenom, nom, sexe, age) {
    this.id = 0;
    this.prenom = prenom;
    this.nom = nom;
    this.sexe = sexe;
    this.age = age;
    this.affiche = function () {
        console.log("Monsieur/Madame " + this.prenom + this.nom)
    }
}
var jim = new eleve("jim", "bo", "m", 27);
var leo = new eleve("leo", "sub", "f", 8);

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

    this.affiche = function () {
        console.log(this.eleves)
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
        if (sexe == "m"){
            return console.log(masculin)
        }
        else if (sexe == "f"){
            return console.log(feminin)
        }
        else if (sexe == "a"){
            return console.log(nbEleve)
        }
        else {
            return console.log("erreur d'argument")
        }
    }
}
var classe1 = new classe()
classe1.addEleve(jim)
classe1.addEleve(leo)
jim.affiche()
leo.affiche()
classe1.affiche()
classe1.compteEleve("f")