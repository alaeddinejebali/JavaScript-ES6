class C{
    constructor(v){
        this._prop1 = v;
    }
    constructor(v1, v2, v3){
        this._prop1 = v1;
        this._prop2 = v2;
        this._prop3 = v3;
    }
    /*
    constructor(v1, v2, v3){
        this._prop1 = v1;
        if(arguments.length === 3){
            this._prop2 = v2;
            this._prop3 = v3;
        }
    }
    */
    afficherInfo(){
        console.log(this._prop1, this._prop2, this._prop3);
    }
}

var c1 = new C("prop1");
c1.afficherInfo();

var c2 = new C("prop1", "prop2", "prop3");
c2.afficherInfo();
