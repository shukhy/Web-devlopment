########### convert kilometerToMeter  ##########

function kilometerToMeter(kilometers) {
    return kilometers * 1000;
  }
  console.log(kilometerToMeter(9));





######### find the total amount of the products ########
 
function budgetCalculator(w,m,b){

    
    var watch = w*50;
    var mobile= m*100;
    var beg=b*200;
    var amount=watch + mobile + beg;

    return amount;

}
console.log(budgetCalculator(2,1,4));

####### find the total cost of the day #######
function hotelCost(days){
    
    var totalAmount = 0;

     
    if (days <= 10) {
      totalAmount = days * 100; 
    }
     else if (days <= 20) {
      totalAmount = 10 * 100 + (days - 10) * 80; 
    } 
    else {
      totalAmount = 10 * 100 + 10 * 80 + (days - 20) * 50;
    }
  
    return totalAmount;
  }
console.log(hotelCost(30));


######## find the largest name from array ##########

function megaFriend(names) {
    
  
    var longestName = names[0];
  
    for (var i = 1; i < names.length; i++) {
      if (names[i].length > longestName.length) {
        longestName = names[i];
      }
    }
  
    return longestName;
  }
  var names = ["Alice", "Bob", "Charlie", "David", "Eleanor"];
  console.log(megaFriend(names));
