const a ={
    o : { bar :"bar"},
    getO:()=>{
        return a.o.bar; 
    },

    setO:(o)=>{
        a.o.bar=o;
    }
}

console.log(a.getO());
a.setO("bar 2");
console.log(a.getO());