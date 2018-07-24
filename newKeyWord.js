function foo(){
    this.baz ="baz";
    console.log(this.bar+" "+this.baz);
}

var bar ="bar";

var baz = new foo();    // undefined baz

// create brandnew empty object
// newly created object linked to another object
// new ly created object passed as this context
// return this if functions wasnt already returned 