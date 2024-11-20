let bolt;
let backOfCard;
let bone;
let bread;
let butter;
let chair;
let dog;
let nut;
let knife;
let nail;
let fork;
let hammer;
let lives = 3;
let heart;
let table;
let message = "";
let message1 = "";
let first = null;
let cardTimers = {};
let count;
let positions = {
  bolt: { x: 100, y: 200, width: 200, height: 200 },
  bone: { x: 100, y: 400, width: 200, height: 200 },
  bread: { x: 300, y: 200, width: 200, height: 200 },
  chair: { x: 300, y: 400, width: 200, height: 200 },
  butter: { x: 500, y: 200, width: 200, height: 200 },
  nut: { x: 500, y: 400, width: 200, height: 200 },
  dog: { x: 700, y: 200, width: 200, height: 200 },
  table: { x: 700, y: 400, width: 200, height: 200 },
  knife: {x:900, y: 200, width: 200, height: 200},
  hammer: { x: 900, y: 400, width: 200, height: 200 },
  nail: { x: 1100, y: 200, width: 200, height: 200 },
  fork: { x: 1100, y: 400, width: 200, height: 200 }
};
let pairs = { bolt: 'nut', bone: 'dog', bread: 'butter', table: 'chair', nut: 'bolt', dog: 'bone', butter: 'bread', chair: 'table', knife: 'fork', nail: 'hammer', fork: 'knife', hammer: 'nail' };
let card;
let matched = [];
let correctSound;
let broke;
let flipped = {  
  bolt: false,
  bone: false,
  bread: false,
  chair: false,
  butter: false,
  nut: false,
  dog: false,
  table: false,
  hammer: false,
  nail: false,
  fork: false,
  knife: false
};
let showAllCardsTime = 3000; 
let gameStarted = false;

function preload() {
  bolt = loadImage("bolt.png");
  bone = loadImage("bone.png");
  bread = loadImage("bread.png");
  butter = loadImage("butter.png");
  chair = loadImage("chair.png");
  dog = loadImage("dog.png");
  nut = loadImage("nut.png");
  table = loadImage("table.png");
  heart = loadImage("heart.png");
  knife = loadImage("knife.png");
  hammer = loadImage("hammer.png");
  fork = loadImage("fork.png");
  nail = loadImage("nail.png");
  broke = loadImage("broken.png");
  backOfCard = loadImage("backOfCard.jpg");
}

function setup() {
  createCanvas(1600, 880);
  background('teal');

  buttonNextLevel = createButton('Back');
  buttonNextLevel.position(width -200, height - 80);
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

  if (lives > 0) {
    textSize(50);
    fill('yellow');
    textFont('Alfa Slab One');
    textStyle(BOLD);
    textAlign(CENTER);
    text("Mix and Match", 200, height - 790);
    fill('yellow');
    text("Level 2", width / 2, height - 790);


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
  window.location.href = 'https://7206ce6a-193f-4e36-a11f-0bb1ab793ac3-00-2fpnd9yy3dt18.worf.replit.dev/'; 
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
