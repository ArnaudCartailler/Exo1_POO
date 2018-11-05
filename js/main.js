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

// var x = prompt("Age ?");
// var y = prompt("Country ?");
// var z = prompt("Pay ?");

// function site(country, age, pay){
//   country = ["FRANCE", "ENGLAND", "GERMANY"] ;
//   age = 25;
//   pay = ["MASTERCARD", "VISA"];
  
// };

// var real = 2018-x;

// site();

// for(i = 0; i < country.length; i++){
//   if(y === country[i]){
//     break;
//   } else{
//     continue;
//   };
  
// }

// for (u = 0; u < pay.length; u++) {
//   if (z === country[u]) {
//     break;
//   } else {
//     continue;
//   };

// }


// alert("you live in " + y + "." + " You pay with a " + z + "." + " You was born in " + real); 

//EXO 2 :

// var king = {
//   name : "Naudje",
//   attack : 20,
//   health : 100,
//   method : ["magic", "bow"],
// };

// var queen = {
//   name : "Rosi",
//   attack : 25,
//   health : 90,
//   method : ["sword" , "fist"],
// };


// function kingattack(){
//   var tec = Math.round(Math.random());
//   if(tec === 0){
//     console.log("King is using " + king.method[0] + " and Queen has " + (queen.health - king.attack));
//   }else{
//     console.log("Queen is safe because King used" + king.method[1]);
//   }
// }

// function queenattack(){
//   var tec = Math.round(Math.random());
//   if (tec === 0) {
//     console.log("Queen is using " + queen.method[0] + " and King has " + (king.health - queen.attack));
//   } else {
//     console.log("King is safe because Queen used " + queen.method[1]);
//   }
// }


// document.getElementById("go").onclick = function () { turn() };

// function turn(){
// var x = Math.round(Math.random());

// if(x < 1){
//   kingattack();
//   document.getElementById("exo").innerHTML =
//     "King is using " + king.method[0] + " and Queen has " + (queen.health - king.attack) + ". <br />" + "King is safe because Queen used " + queen.method[1];

// }else{
//   queenattack();
//   document.getElementById("exo").innerHTML =
//     "Queen is using " + queen.method[0] + " and King has " + (king.health - queen.attack) + ". <br />" + "Queen is safe because King used " + king.method[1];
// }

// }

// TEST 2

// function Person(first, health, attack, method) {
//   this.name = first;
//   this.health = health;
//   this.attack = attack;
//   this.method = method;
// }

// var king = new Person("Naudje", 100, 20,["sword", "fist"]);
// var queen = new Person("Rosia", 90, 25, ["magic", "bow"]);

// function Other(first, health, attack, mana, heal) {
//   this.name = first;
//   this.health = health;
//   this.attack = attack;
//   this.mana = mana;
//   this.heal = heal;
// }

// var mage = new Other("Kiki", 80, 20, 50, 5);

// function kingattack() {
//   var tec = Math.random();
//   if (tec < 0.33) {
//     queen.health = queen.health - king.attack;
//   } else if (tec > 0.33 && tec < 0.66) {
//     mage.health = mage.health - king.attack;
//   } else if (tec > 0.66) {
//     king.health = king.health;
//   }
// }

// function queenattack() {
//   var tec = Math.random();
//   if (tec < 0.33) {
//     king.health = king.health - queen.attack;
//   } else if (tec > 0.33 && tec < 0.66){
//     mage.health = mage.health - queen.attack;
//   } else if (tec > 0.66) {
//     queen.health = queen.health;
//   }
// }

// function mageattack() {
//   var tec = Math.random();
//   if (tec < 0.33) {
//     mage.health = mage.health + mage.heal;
//     mage.mana = mage.mana - mage.heal;
//   } else if (tec > 0.33 && tec < 0.66){
//     queen.health = queen.health - mage.attack;
//   } else if(tec > 0.66){
//     king.health = king.health - mage.attack;
//   }
// }

// document.getElementById("go").onclick = function () { turn() };

// function turn() {

//   var x = Math.random();
  
//   if (x < 0.33) {
    
//     kingattack();

//   document.getElementById("queen").innerHTML = "queen have " + queen.health + " hp";
//   document.getElementById("king").innerHTML = "king have " + king.health + " hp";
//   document.getElementById("mage").innerHTML = "mage have " + mage.health + " hp and " + mage.mana + " mana.";

//     // document.getElementById("exo").innerHTML =
//     //   "King is using " + king.method[0] + " and Queen has " + queen.health + ". <br />" + "King is safe because Queen used " + queen.method[1];
//     return;

//   } else if (x > 0.33 && x < 0.66) {

//     queenattack();

//     document.getElementById("queen").innerHTML = "queen have " + queen.health + " hp";
//     document.getElementById("king").innerHTML = "king have " + king.health + " hp";
//     document.getElementById("mage").innerHTML = "mage have " + mage.health + " hp and " + mage.mana + " mana.";


//   // document.getElementById("exo").innerHTML =
//   //   "Queen is using " + queen.method[0] + " and King has " + king.health + ". <br />" + "Queen is safe because King used " + king.method[1];
// return;

//   }else if(x > 0.66){

//       mageattack();

//     document.getElementById("queen").innerHTML = "queen have " + queen.health + " hp";
//     document.getElementById("king").innerHTML = "king have " + king.health + " hp";
//     document.getElementById("mage").innerHTML = "mage = " + mage.health + "hp";
//     document.getElementById("magemana").innerHTML = "mage mana = " + mage.mana;
//     // document.getElementById("exo").innerHTML = "Mage is using attacking";
//     }

//   if(queen.health < 0) {
//     console.log("Queen loose");
//     document.getElementById("exo").innerHTML = "King and Mage has won !";
//     document.getElementById("go").style.display = "none";

//   } 
  
//   if(king.health < 0) {
//     console.log("King loose");
//     document.getElementById("exo").innerHTML = "Queen and Mage has won !";
//     document.getElementById("go").style.display = "none";

//   } 
  
//   if(mage.health < 0) {
//     console.log("Mage loose");
//     document.getElementById("exo").innerHTML = "King and Queen has won !";
//     document.getElementById("go").style.display = "none";
//   }

// }
  
 
//Exo 3


// function Product(titre, accro, desc) {
//   this.titre = titre;
//   this.accro = accro;
//   this.desc = desc;
// }



//Exo 4

function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) {
      // Appelle la fonction callback en lui passant la réponse de la requête
      callback(req.responseText);
    } else {
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  req.addEventListener("error", function () {
    console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
}

ajaxGet("http://localhost/js_poo/main.json", function (reponse) {

  var data = JSON.parse(reponse);

  data.person.forEach(user => {
    const addline = document.getElementById('addLine');

    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');

    td1.innerHTML = user.firstname
    td2.innerHTML = user.lastname
    td3.innerHTML = user.age

    addline.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
  });
});

