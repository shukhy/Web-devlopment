function getArraySum(n){
    var sum=0;
    for(var i=0;i<n.length;i++){
        var element =n[i];
        sum = sum + element;
    }
    return sum;
}

var n = [12,10,20,30,40,8];
var result = getArraySum(n);
console.log("total sum:",result);