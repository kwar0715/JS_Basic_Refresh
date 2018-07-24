var obj = {a:1, b:2, c:3};  

// things in a object
for (var prop in obj) { 
   console.log(prop); 
   console.log(obj[prop]);
}

var abc= [12 , 13 , 123];

// get values
for (let val of abc) {   
    console.log(val) 
}

// get items
for (var prop in abc) { 
    console.log(prop); 
    console.log(abc[prop]); 
}


