var fs=require('fs');
var path='/sys/class/gpio/';
module.exports={
        write:function(number,type,callback){
                fs.writeFile(path+'export',number,function(){
                        fs.writeFile(path+'gpio'+number+'/direction','out',function(){
                                fs.writeFile(path+'gpio'+number+'/value',type,function(){
                                        if(typeof(callback)==='function'){
                                                callback();
                                        }
                                });
                        });
                });
        },
        high:function(number,callback){
                this.write(number,1,callback);
        },
        low:function(number,callback){
                this.write(number,0,callback);
        }
}
