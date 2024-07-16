function buildFunctions(){
    var arr=[]
    for(var index=0;index<3;index++){
        arr.push(
            (function(){
                return index
            })()
        )
    }
    return arr
}
var fs=buildFunctions()
console.log(fs);
console.log(fs[0]);
console.log(fs[1]);
console.log(fs[2]);
