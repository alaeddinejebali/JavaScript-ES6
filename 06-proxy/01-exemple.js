let validateurEmail = {
    set: function(obj, prop, valeur) {
        if (prop === 'email') {
            if (Number.isInteger(valeur)) {
                throw new TypeError('Les nombres ne sont pas acceptés.');
            }
            if (valeur.indexOf("@") === -1) {
                throw new TypeError('Il manque le "@".');
            }
            if (valeur.indexOf("@") === -1 || valeur.indexOf(".") === -1) {
                throw new TypeError('Il manque le ".".');
            }
        }
        obj[prop] = valeur;
        return true;
    }
};

let formulaire = new Proxy({}, validateurEmail);

formulaire.email = "nom@domain.com";
console.log(formulaire.email);

//formulaire.email = 123;

//formulaire.email = "nomdomain.com"; 