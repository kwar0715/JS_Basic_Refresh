/*
  Question series 
  http://perfectionkills.com/javascript-quiz-es6/
*/



var t =(function(x, f = () => x) {
    var x;
    var y = x;
    x = 2;
    return [x, y, f()];
  })(1)

console.log(t); // 2,1,1


// Q2 ------------------

var t2 = (function() {
    return [
      (() => this.x).bind({ x: 'inner' })(),
      (() => this.x)()
    ]
  }).call({ x: 'outer' });
  
console.log(t2);

// working for genaric functions

var f = function(){
  console.log(this.name);
}

var fboud =f.bind({name: "Koli"});
fboud();

// IIFE

((function(){
  console.log(this.x);
}).bind({x:90}))();

// but when it is comes to the arrow functions, this dowsn't work

((()=>{
  console.log(this.x);  // undefined
}).bind({x : 80}))();

// but when it is in the scope bbound with other object

((function(){
  
  ((()=>{
    console.log(this.x);  // 60
  }).bind({x : 80}))();
}).bind({x:60}))();

// without bounded object

(function(){
  var x = 20;
  ((()=>{
    console.log(this.x);  // undefined
    console.log(x);  // 20
  }).bind({x : 80}))();
})();

// sothat t2 will get ['outer','outer']

//Q3--------------------

var t4 =(function() {
  let f = this ? class g { } : class h { };
  return [
    typeof f,
    typeof h
  ];
})();

console.log(t4); 

//[function, undefined]
// we dont know the h but f is s function

// Q4 ----------------

console.log((typeof (new (class { class () {} })))); // object

console.log(typeof (new (class F extends (String, Array) { })).substring); // undefined read inside variable


// calling internal values , in the upper example , substring has not defined.  
var cl = new (class F extends (String, Array) { substring(){} });

console.log(typeof(cl.substring));

//Q7 --------------

console.log([...[...'...']].length); 

/*
  answer is 3 because  ... is an stiring with 3 letters. 

  [...'...'] is 3 length array
*/ 

// Q8 -----------
//console.log(typeof (function* f() { yield f })().next().next())

// Error

// var rf = (function* f() { yield f })().next(); // return f genarator function

// var fs = rf.value;  // value is a genarator fucntion type not the function
// console.log(fs.next()); // but this fs will not be a function.


console.log(typeof `${{Object}}`.prototype);

//Q 11

//((...x, xs)=>x)(1,2,3) // Error ...x(Rest params must be at the last)

// Q 12

 

let arr = [ ];
for (let { x = 2, y } of [{ x: 1 }, 2, {y:10},[2,3]]) { 
  arr.push(x, y);
}

console.log(arr); // Error


/*
  {x=2,y} of {x:1} // x goes to 1 and y doesnt defined. {1, undefined}
  {x=2,y} of 2     // x goes to 2 and y variable cannot find {2, undefined}

  {x=2,y} of {y}   // in this object y is not initialozed and defined. so that error
  {x=2,y} of {x:1,y:7} // x=1, y=7
  {x=2,y} of (2,3)     // x=2, y undefined.
  {x=2,y} of {y:1}     // x =2 (default), y =1
  */

  // Q 13 ---------------

(function(){
  if(false){
   // let f ={ g() => {}};  Syntax Error (g()=> {})
  }
})();

// correction
(function(){
  if(false){
    let f = { g: () => 1};
  }
  return typeof f;
})();