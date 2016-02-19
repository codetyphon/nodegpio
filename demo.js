var nodegpio=require('./nodegpio.js');
var i=0;
setInterval(function(){
        if(i===0){
                i=1;
                nodegpio.high(21,1);
        }else{
                i=0;
                nodegpio.low(21,1);
        }
},1000);
