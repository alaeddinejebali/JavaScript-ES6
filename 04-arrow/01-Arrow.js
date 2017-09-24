var unObjet ={
	id: 123,
	afficherId: function f(){
		setTimeout(function(){
			console.log("this.id:", this.id);
		}, 100);
	}
}
unObjet.afficherId();

/*
var unObjet ={
	id: 123,
	afficherId: function f(){
		setTimeout(()=>{
			console.log("this.id:", this.id);
		}, 100);
	}
}
unObjet.afficherId();
*/