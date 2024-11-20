let cow;
let bee;
let cloud;
let backOfCard;
let flower;
let leaf;
let cardTimers = {};
let rain;
let milk;
let tree;
let completed;
let message = "";
let message1 = "";
let first = null;
let count;
let flipped = {  
  cow: false,
  bee: false,
  cloud: false,
  flower: false,
  leaf: false,
  rain: false,
  milk: false,
  tree: false
};
let showAllCardsTime = 3000; 
let gameStarted = false;
let positions = {
  cow: { x: 100, y: 200, width: 200, height: 200 },
  bee: { x: 100, y: 400, width: 200, height: 200 },
  cloud: { x: 300, y: 200, width: 200, height: 200 },
  flower: { x: 300, y: 400, width: 200, height: 200 },
  leaf: { x: 500, y: 200, width: 200, height: 200 },
  rain: { x: 500, y: 400, width: 200, height: 200 },
  milk: { x: 700, y: 200, width: 200, height: 200 },
  tree: { x: 700, y: 400, width: 200, height: 200 }
}
let pairs = { cow: 'milk', bee: 'flower', cloud: 'rain', tree: 'leaf', milk: 'cow', flower: 'bee', leaf: 'tree', rain: 'cloud' }
let card;
let matched = [];
let lives = 3;
let heart;
let numMatch = 0;
let correctSound;
let broke;

function preload() {
  cow = loadImage("cow.png");
  bee = loadImage("bee.png");
  cloud = loadImage("cloud.png");
  flower = loadImage("flower.png");
  leaf = loadImage("leaf.png");
  rain = loadImage("rain.png");
  milk = loadImage("milk.png");
  tree = loadImage("tree.png");
  heart = loadImage("heart.png");
  broke = loadImage("broken.png");
  backOfCard = loadImage("backOfCard.jpg");

}

function setup() {
  createCanvas(1600, 880);
  background('teal');
  buttonNextLevel = createButton('Next Level');
  buttonNextLevel.position(width - 200, height - 80);
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
  clear();
  background('teal');

  if (lives > 0&& numMatch<4) {
    textSize(50);
    fill('yellow');
    textFont('Alfa Slab One');
    textStyle(BOLD);
    textAlign(CENTER);
    text("Mix and Match", 200, height - 790);
    fill('yellow');
    text("Level 1", width / 2, height - 790);

    textSize(30);
    text("Click one card and you have 3 seconds to\n memorize the cards!\n Click 2 pictures based on how they match, \n once you complete this level, you will \n be able to move on to the next level", 1250, height - 590);

    if (!gameStarted || millis() - cardTimers.start < showAllCardsTime) {
      for (let card in positions) {
        let pos = positions[card];
        flipped[card] = true;
        image(eval(card), pos.x, pos.y, pos.width, pos.height);
      }
    } else {
      for (let card in positions) {
        if (!matched.includes(card)) {
          let pos = positions[card];
          image(backOfCard, pos.x, pos.y, pos.width, pos.height);  
        }
      }
    }

    if (lives == 1) {
      image(heart, width - 150, height - 850, 75, 75);
      image(broke, width - 215, height - 850, 75, 75);
      image(broke, width - 280, height - 850, 75, 75);
    } else if (lives == 2) {
      image(heart, width - 150, height - 850, 75, 75);
      image(heart, width - 215, height - 850, 75, 75);
      image(broke, width - 280, height - 850, 75, 75);
    } else if (lives == 3) {
      image(heart, width - 150, height - 850, 75, 75);
      image(heart, width - 215, height - 850, 75, 75);
      image(heart, width - 280, height - 850, 75, 75);
    }

    textSize(48);
    fill('yellow');

    if (count == 0) {
      message1 = "Choose matching card!";
      text(message1, width / 2, height - 150);
    } else if (count == 1) {
      message1 = "Correct!";
      text(message1, width / 2, height - 150);
    } else if (count == 2) {
      message1 = "Try again";
      text(message1, width / 2, height - 150);
    }
  } else {
    textSize(80);
    image(broke, width - 150, height - 850, 75, 75);
    image(broke, width - 215, height - 850, 75, 75);
    image(broke, width - 280, height - 850, 75, 75);
    fill('yellow');
    text("Game Over", width / 2, height / 2);
    buttonMainMenu.show();
    buttonNextLevel.hide();
  }
}

function goToNextPage() {
  window.location.href = 'https://fff00be9-7794-4447-8941-1cb7538d7646-00-141pdjiujxepf.worf.replit.dev/'; 
}

function goToMainMenu() {
  window.location.href = 'https://556a1828-37f1-443c-83ff-258e020e2b2d-00-3o4azg5qv5gky.picard.replit.dev/';
}

function mousePressed() {
  if (!gameStarted) {
    cardTimers.start = millis(); 
    gameStarted = true;
  }

  for (let card in positions) {
    let pos = positions[card];
    if (mouseX > pos.x && mouseX < pos.x + pos.width && mouseY > pos.y && mouseY < pos.y + pos.height && !matched.includes(card)) {
      if (!first) {
        cardTimers[card] = millis(); 
        flipped[card] = true; 
        first = card;
        count = 0;
      } else {
        flipped[card] = true; 

        if (pairs[first] === card) {
          count = 1;
          matched.push(first, card);
        } else {
          count = 2;
          lives--;

          setTimeout(() => {
            flipped[first] = false;
            flipped[card] = false;
          }, 1000);
        }
        first = null;
        message1 = "";
      }
    }
  }
}
