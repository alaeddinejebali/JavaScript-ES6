function somme(a, b, ...valeurs){
	var resultat = a + b;
	valeurs.forEach( uneValeur => resultat += uneValeur );
	return resultat;
}
console.log( somme(1, 2) );
console.log( somme(1, 2, ...[3, 7]) );
console.log( somme(...[1, 2, 3, 4, 5, 6, 7, 8, 9]) );