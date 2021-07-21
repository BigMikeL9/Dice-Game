

  var diceArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png",
    "images/dice4.png", "images/dice5.png", "images/dice6.png"
  ];
  var randomDice1 = (Math.floor(Math.random() * diceArray.length));
  var randomDice2 = (Math.floor(Math.random() * diceArray.length));


  // First Dice
  document.querySelector(".img1").setAttribute("src", diceArray[randomDice1]);

  // Second Dice
  document.querySelector(".img2").setAttribute("src", diceArray[randomDice2]);


  if (randomDice1 > randomDice2) {
    document.querySelector("h1").innerHTML = "🙌Player 1 Wins!"
  } else if (randomDice1 < randomDice2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🎈"
  } else if (randomDice1 === randomDice2) {
    document.querySelector("h1").innerHTML = "Draw 🚩"
  }



  // Another way
  //
  // var randomDice1 = Math.floor(Math.random() * 6) + 1;
  // var randomDice1Image = "images/dice" + randomDice1 + ".png";
  // document.querySelectorAll("img")[0].setAttribute("src", randomDice1Image); // querySelectorAll("img") returns an array of all the elements of type "img"
  //
  // var randomDice2 = Math.floor(Math.random() * 6) + 1;
  // var randomDice2Image = "images/dice" + randomDice2 + ".png";
  // document.querySelectorAll("img")[1].setAttribute("src", randomDice2Image);
