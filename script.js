let clubsAce, clubs2, clubs3, clubs4, clubs5, clubs6, clubs7, clubs8, clubs9, clubs10, clubsJack, clubsQueen, clubsKing;
let diamondsAce, diamonds2, diamonds3, diamonds4, diamonds5, diamonds6, diamonds7, diamonds8, diamonds9, diamonds10, diamondsJack, diamondsQueen, diamondsKing;
let heartsAce, hearts2, hearts3, hearts4, hearts5, hearts6, hearts7, hearts8, hearts9, hearts10, heartsJack, heartsQueen, heartsKing;
let spadesAce, spades2, spades3, spades4, spades5, spades6, spades7, spades8, spades9, spades10, spadesJack, spadesQueen, spadesKing;
let drawnCard1, drawnCard2, drawnCard3;
let backOfCard;
let cat, cow, dog, goose, horse, pig, sheep, chicken;

let fullDeck = [];
let message = "";
let currentLevel = 1; 
let buttonNextLevel;


function preload() {

  clubsAce = loadImage('ClubsAce.png');
  clubs2 = loadImage('Clubs2.png');
  clubs3 = loadImage('Clubs3.png');
  clubs4 = loadImage('Clubs4.png');
  clubs5 = loadImage('Clubs5.png');
  clubs6 = loadImage('Clubs6.png');
  clubs7 = loadImage('Clubs7.png');
  clubs8 = loadImage('Clubs8.png');
  clubs9 = loadImage('Clubs9.png');
  clubs10 = loadImage('Clubs10.png');
  clubsJack = loadImage('ClubsJack.png');
  clubsQueen = loadImage('ClubsQueen.png');
  clubsKing = loadImage('ClubsKing.png');

  diamondsAce = loadImage('DiamondAce.png');
  diamonds2 = loadImage('Diamond2.png');
  diamonds3 = loadImage('Diamond3.png');
  diamonds4 = loadImage('Diamond4.png');
  diamonds5 = loadImage('Diamond5.png');
  diamonds6 = loadImage('Diamond6.png');
  diamonds7 = loadImage('Diamond7.png');
  diamonds8 = loadImage('Diamond8.png');
  diamonds9 = loadImage('Diamond9.png');
  diamonds10 = loadImage('Diamond10.png');
  diamondsJack = loadImage('DiamondJack.png');
  diamondsQueen = loadImage('DiamondQueen.png');
  diamondsKing = loadImage('DiamondKing.png');

  heartsAce = loadImage('HeartsAce.png');
  hearts2 = loadImage('Hearts2.png');
  hearts3 = loadImage('Hearts3.png');
  hearts4 = loadImage('Hearts4.png');
  hearts5 = loadImage('Hearts5.png');
  hearts6 = loadImage('Hearts6.png');
  hearts7 = loadImage('Hearts7.png');
  hearts8 = loadImage('Hearts8.png');
  hearts9 = loadImage('Hearts9.png');
  hearts10 = loadImage('Hearts10.png');
  heartsJack = loadImage('HeartsJack.png');
  heartsQueen = loadImage('HeartsQueen.png');
  heartsKing = loadImage('HeartsKing.png');

  spadesAce = loadImage('SpadesAce.png');
  spades2 = loadImage('Spades2.png');
  spades3 = loadImage('Spades3.png');
  spades4 = loadImage('Spades4.png');
  spades5 = loadImage('Spades5.png');
  spades6 = loadImage('Spades6.png');
  spades7 = loadImage('Spades7.png');
  spades8 = loadImage('Spades8.png');
  spades9 = loadImage('Spades9.png');
  spades10 = loadImage('Spades10.png');
  spadesJack = loadImage('SpadesJack.png');
  spadesQueen = loadImage('SpadesQueen.png');
  spadesKing = loadImage('SpadesKing.png');

  backOfCard = loadImage('BackOfCard.png');

  cat = loadImage('Cat.jpg');
  dog = loadImage('Dog.png');
  pig = loadImage('Pig.png');
  cow = loadImage('Cow.jpg');
  sheep = loadImage('Sheep.jpg');
  chicken = loadImage('Chicken.png');
  horse = loadImage('Horse.jpg');
  goose = loadImage('Goose.jpg');

  fullDeck = [
    { name: 'Ace of Clubs', image: clubsAce },
    { name: '2 of Clubs', image: clubs2 },
    { name: '3 of Clubs', image: clubs3 },
    { name: '4 of Clubs', image: clubs4 },
    { name: '5 of Clubs', image: clubs5 },
    { name: '6 of Clubs', image: clubs6 },
    { name: '7 of Clubs', image: clubs7 },
    { name: '8 of Clubs', image: clubs8 },
    { name: '9 of Clubs', image: clubs9 },
    { name: '10 of Clubs', image: clubs10 },
    { name: 'Jack of Clubs', image: clubsJack },
    { name: 'Queen of Clubs', image: clubsQueen },
    { name: 'King of Clubs', image: clubsKing },
    { name: 'Ace of Diamonds', image: diamondsAce },
    { name: '2 of Diamonds', image: diamonds2 },
    { name: '3 of Diamonds', image: diamonds3 },
    { name: '4 of Diamonds', image: diamonds4 },
    { name: '5 of Diamonds', image: diamonds5 },
    { name: '6 of Diamonds', image: diamonds6 },
    { name: '7 of Diamonds', image: diamonds7 },
    { name: '8 of Diamonds', image: diamonds8 },
    { name: '9 of Diamonds', image: diamonds9 },
    { name: '10 of Diamonds', image: diamonds10 },
    { name: 'Jack of Diamonds', image: diamondsJack },
    { name: 'Queen of Diamonds', image: diamondsQueen },
    { name: 'King of Diamonds', image: diamondsKing },
    { name: 'Ace of Hearts', image: heartsAce },
    { name: '2 of Hearts', image: hearts2 },
    { name: '3 of Hearts', image: hearts3 },
    { name: '4 of Hearts', image: hearts4 },
    { name: '5 of Hearts', image: hearts5 },
    { name: '6 of Hearts', image: hearts6 },
    { name: '7 of Hearts', image: hearts7 },
    { name: '8 of Hearts', image: hearts8 },
    { name: '9 of Hearts', image: hearts9 },
    { name: '10 of Hearts', image: hearts10 },
    { name: 'Jack of Hearts', image: heartsJack },
    { name: 'Queen of Hearts', image: heartsQueen },
    { name: 'King of Hearts', image: heartsKing },
    { name: 'Ace of Spades', image: spadesAce },
    { name: '2 of Spades', image: spades2 },
    { name: '3 of Spades', image: spades3 },
    { name: '4 of Spades', image: spades4 },
    { name: '5 of Spades', image: spades5 },
    { name: '6 of Spades', image: spades6 },
    { name: '7 of Spades', image: spades7 },
    { name: '8 of Spades', image: spades8 },
    { name: '9 of Spades', image: spades9 },
    { name: '10 of Spades', image: spades10 },
    { name: 'Jack of Spades', image: spadesJack },
    { name: 'Queen of Spades', image: spadesQueen },
    { name: 'King of Spades', image: spadesKing },
    { name: 'Cat', image: cat },
    { name: 'Chicken', image: chicken },
    { name: 'Cow', image: cow },
    { name: 'Dog', image: dog },
    { name: 'Goose', image: goose },
    { name: 'Horse', image: horse },
    { name: 'Pig', image: pig },
    { name: 'Sheep', image: sheep },
  ];

  shuffle(fullDeck, true);
  drawnCard1 = fullDeck.pop();
  drawnCard2 = fullDeck.pop();
  drawnCard3 = fullDeck.pop();

  let randomIndex = Math.floor(Math.random() * 3);
  cardToPick = [drawnCard1, drawnCard2, drawnCard3][randomIndex].name;
}

function setup() {
  createCanvas(1600, 880);
  background('teal');
  buttonNextLevel = createButton('Next Level');
  buttonNextLevel.position(width -200, height - 80);
  buttonNextLevel.mousePressed(nextLevel);

  buttonNextLevel.mousePressed(goToNextPage);
  buttonNextLevel.style('border-radius', '12px');
  buttonNextLevel.style('font-weight', 'bold');
  buttonNextLevel.style('font-family', 'Alfa Slab One');
  buttonNextLevel.style('background-color', 'red');
  buttonNextLevel.style('color', 'white'); 
  buttonNextLevel.style('padding', '10px 20px');
  buttonNextLevel.style('font-size', '27px');

  buttonMainMenu = createButton('Main Menu');
  buttonMainMenu.position(width - 200, height - 164);

  buttonMainMenu.mousePressed(goToMainMenu);
  buttonMainMenu.style('border-radius', '12px');
  buttonMainMenu.style('font-weight', 'bold');
  buttonMainMenu.style('font-family', 'Alfa Slab One');
  buttonMainMenu.style('background-color', 'red');
  buttonMainMenu.style('color', 'white');
  buttonMainMenu.style('padding', '10px 20px');
  buttonMainMenu.style('font-size', '27px');

}

function draw() {
  image(drawnCard1.image, 366.25, 160, 262.5, 367.5);
  image(drawnCard2.image, 668.75, 160, 262.5, 367.5);
  image(drawnCard3.image, 971.25, 160, 262.5, 367.5);
  textSize(50); 
  fill('white'); 
  textFont('Alfa Slab One');
  textStyle(BOLD);
  textAlign(CENTER); 
  text('Please pick ' + cardToPick, width / 2, height - 60);

  textSize(48);
  fill('yellow');
  text(message, width / 2, height - 150);

  if(currentLevel === 1) {

    textSize(50);
    textAlign(CENTER);
    text("Level 1", width / 2, height -790);
  }

  text("Memory Match", 200, height -790);
}

function mousePressed() {

    if (mouseX > 366.25 && mouseX < 366.25 + 262.5 && mouseY > 160 && mouseY < 160 + 367.5) {
      checkSelection(drawnCard1);
    }

    else if (mouseX > 668.75 && mouseX < 668.75 + 262.5 && mouseY > 160 && mouseY < 160 + 367.5) {
      checkSelection(drawnCard2);
    }

    else if (mouseX > 971.25 && mouseX < 971.25 + 262.5 && mouseY > 160 && mouseY < 160 + 367.5) {
      checkSelection(drawnCard3);
    }


}

function checkSelection(selectedCard) {
  if (selectedCard.name == cardToPick) {
    message = 'Correct';
    
  } else {
    message = 'Wrong';
  }
}

function nextLevel() {
  if (currentLevel === 1) {
    currentLevel = 2;  
     
  } else if (currentLevel === 2) {
    currentLevel = 1; 
    
  }
}





function shuffle(array, inPlace) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return inPlace ? array : array.slice();
}
function goToNextPage() {
  window.location.href = 'https://b4d063e3-e0c7-4ba6-9dd9-cc61aad2aee9-00-vdr70kxxjxmg.riker.replit.dev/'; 
}

function goToMainMenu(){
  window.location.href = 'https://6c130543-db2b-4eb9-b4b4-2686a0c2970b-00-3ik1l9i15iuk8.riker.replit.dev/';
}