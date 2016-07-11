// JavaScript Document

var fresh = [
  { name: "tomatoes",
    price: 0.80
  },
  { name: "potatoes",
    price: 0.75
  },
  { name: "turnips",
    price: 1.00
  },
  { name: "strawberries",
  	price: 2.40
  }
];
 function getTom (item) {
	var total = document.getElementsById("tom");
  fresh.forEach(getTom); 
  console.log(item);
  total+=item.price;
}
 function getPot (item) {
	var total = document.getElementById("pot");
  fresh.forEach(getPot);
  console.log(item);
  total+=item.price;
 }
 function getTurn (item) {
	var total = document.getElementById("turn");
  fresh.forEach(getTurn);
  console.log(item);
  total+=item.price;
 }
 function getStraw (item) {
	var total = document.getElementById("straw");
  fresh.forEach(getStraw);
  console.log(item);
  total+=item.price;
 };
var groceryTotal = console.log(getTom + getPot + getTurn + getStraw);
	groceryTotal();
	
	var el = document.getElementById("pTotal");
	el.innerHTML = groceryTotal;