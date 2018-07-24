// just break
for(var i=0;i<100;i++){
    console.log(i);
    if(i==10)
        break;
}

// creak as name

outerloop:
for(var i=0;i<100;i++){
    
    innerloop:
    for(var j=0;j<100;j++){
        
        console.log("IN : "+j);
        if(i==10)
            break outerloop;
        
        if(j==10)
            break innerloop;
    }
}
