# nodegpio
#use:
#npm install nodegpio


example 1:
```
var nodegpio=require('nodegpio');
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
```


example 2:
```
var i=0;
var ii=0;
setInterval(function(){
        ii+=1;
        if(ii<10){
                if(i===0){
                        i=1;
                        nodegpio.high(21,1);
                }else{
                        i=0;
                        nodegpio.low(21,1);
                }
        }else if(ii===10){
                nodegpio.clear(21,function(){
                        console.log('turn off');
                });
        }
},1000);
```
##这是一个node.js版本的gpio库。
##因为我不喜欢python，但是我找了一些node.js的库，却用不了。
##所以，只好自己写一个了。本版本只能写高电平、低电平，和清除pin。
##也许以后几个版本会提供读取支持。
##如果有更多疑问，请私信我。新浪微博 @codetyphon
##http://www.weibo.com/codetyphon
##http://www.codetyphon.com
