var value=[12,23,45,67,89,94];
var max=[0];
for(var i=0;i<value.length;i++){
    var newValue=value[i];
    if(newValue>max){
        max=newValue;
    }
} 
console.log("higest value is:",max);