function* createIntegerIterator(max){
	var curInt = 0;
	while(curInt<max){
		curInt++;
		yield curInt;
	}
}
var it = createIntegerIterator(2);
console.log( it.next().value );
console.log( it.next().value );
console.log( it.next().done );
console.log( it.next().done );