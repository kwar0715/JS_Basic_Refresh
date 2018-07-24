
// objects

var bar ="bar1";

function foo(){
    console.log(this.bar);
}


var o2 = { bar : "bar2" , foo:foo}
var o3 = { bar : "bar3" , foo:foo}

foo();
o2.foo();
o3.foo();

// explicit binding  

foo.call(o2)


// hard binding

var obj ={bar :"obj"};
var obj2 ={bar :"obj 2"}
var org = foo;
foo = function(){org.call(obj)}


foo();              // obj
foo.call(obj2);     // obj