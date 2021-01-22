
// 


// CONVERT KILOMETER TO METER
function kilomeerToMeter(kilometer){
  var meter = kilometer * 1000;
  return meter;
}

var totalMeter = kilomeerToMeter(7.5);
console.log(totalMeter);

// HOTEL COST

function hotelCost(day){
  var cost = 0;
  if(day <= 10){
    cost = day * 100;
  } else if(day <= 20){
    var normalDay = 10 * 100;
    var remaining = day - 10;
    var offerDay = remaining *80;
    cost = normalDay + offerDay;
  }else{
    var normalDay = 10 * 100;
    var offerDay = 10 * 80;
    var remaining = day - 20;
    var megaOfferDay = remaining * 70;
    cost = normalDay + offerDay + megaOfferDay;
  }
  return cost;
}

var total = hotelCost(29);
console.log(total);

// BUDGET CALCULATOR
function budgetCalculator(watch, mobile, laptop) {
  var total = (watch * 50) + (mobile * 100) + (laptop * 500);
  return total;
}
var totalPrice = budgetCalculator(30, 20, 10);
console.log(totalPrice);

// MEGA FRIEND 
function megaFriend(names){
  var maxWord = names[0];
  for(var i = 0;i < names.length; i++){
      var element = names [i];
      if(element.length > maxWord.length){
          maxWord = element;
      }
  }
  return maxWord;
}
var friendName = megaFriend(["Suhel", "Rana", "Raju", "rubel"]);
console.log(friendName);

