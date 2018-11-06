//Exo 1 :

// function user(firstname, lastname, country, age, pay){
//   firstname = "Arnaud";
//   lastname = "Cartailler";
//   country = "France";
//   age = 25;
//   pay = ["mastercard", "visa"];

//   var x = 2018 - age;
//     person = function(){
//       alert(firstname +  " " + lastname + " " + x)
//     };

//     person();
// }
//     user();


// Aller plus loin :

var x = prompt("Age ?");
var y = prompt("Country ?");
var z = prompt("Pay ? (visa ? Mastercard ?");


function site(country, _age, pay){
  country = ["FRANCE", "ENGLAND", "GERMANY"] ;
  age = 25;
  pay = ["MASTERCARD", "VISA"];
  year = 2018-x;
  
  if(x = isNaN){
    alert("Mettez votre age en chiffre");
    return;
  }
  
  for(i = 0; i < country.length; i++){
    if(y === country[i]){
      break;
    } else{
      continue;
    };
    
  }
  
  for (u = 0; u < pay.length; u++) {
    if (z === country[u]) {
      break;
    } else {
      continue;
    };
  };
  
  
}

site();


alert("You live in " + y + "." + " You pay with a " + z + "." + " You was born in " + year); 

