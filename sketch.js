
//assets
let img1_d;
let img2_d;
let img3_d;
let img4_d;
let img5_d;
let img6_d;
let img7_d;
let img8_d;
let img9_d;

let img1_b;
let img2_b;
let img3_b;
let img4_b;
let img5_b;
let img6_b;
let img7_b;
let img8_b;
let img9_b;

let img_submit_button;


function preload() {
  img1_d = loadImage('assets/textures/d1.png');
  img1_b = loadImage('assets/textures/b1.png');
  img2_d = loadImage('assets/textures/d2.png');
  img2_b = loadImage('assets/textures/b2.png');
  img3_d = loadImage('assets/textures/d3.png');
  img3_b = loadImage('assets/textures/b3.png');
  img4_d = loadImage('assets/textures/d4.png');
  img4_b = loadImage('assets/textures/b4.png');
  img5_d = loadImage('assets/textures/d5.png');
  img5_b = loadImage('assets/textures/b5.png');
  img6_d = loadImage('assets/textures/d6.png');
  img6_b = loadImage('assets/textures/b6.png');
  img7_d = loadImage('assets/textures/d7.png');
  img7_b = loadImage('assets/textures/b7.png');
  img8_d = loadImage('assets/textures/d8.png');
  img8_b = loadImage('assets/textures/b8.png');
  img9_d = loadImage('assets/textures/d9.png');
  img9_b = loadImage('assets/textures/b9.png');

  img_submit_button = loadImage('assets/textures/submit_button.png');
}

//values
let pics = [];
let picsCount = 0;
const dpw = 175;
const dph = 175;

let buttons = [];
let buttonsCount = 0;

const rickroll = "https://www.youtube.com/watch?v=xvFZjo5PgG0";

function setup() {
  createCanvas(600, 750);

  //pictures
  pics[0] = new ClickPic(img1_d, img1_b, 20, 95, dpw, dph);
  pics[1] = new ClickPic(img2_d, img2_b, 213, 95, dpw, dph);
  pics[2] = new ClickPic(img3_d, img3_b, 405, 95, dpw, dph);
  pics[3] = new ClickPic(img4_d, img4_b, 20, 290, dpw, dph);
  pics[4] = new ClickPic(img5_d, img5_b, 213, 290, dpw, dph);
  pics[5] = new ClickPic(img6_d, img6_b, 405, 290, dpw, dph);
  pics[6] = new ClickPic(img7_d, img7_b, 20, 486, dpw, dph);
  pics[7] = new ClickPic(img8_d, img8_b, 213, 486, dpw, dph);
  pics[8] = new ClickPic(img9_d, img9_b, 405, 486, dpw, dph);
  picsCount = 9;

  //buttons

  //submit button
  buttons[0] = new Button(0, img_submit_button, 250, 688, 100, 50);

  buttonsCount = 1;
}

function draw() {
  background(240, 240, 240);
  //topbar
  fill(250);
  rect(-1, 0, displayWidth, 75);
  textSize(26);
  fill(0);
  text("Select the pictures with a creeper on them.", 50, 47);
  //bottombar
  fill(250);
  rect(-1, 675, displayWidth, 75);
  textSize(26);
  fill(0);
  //pictures
  for(var i = 0; i < picsCount; i++) {
    pics[i].render();
  }
  //buttons
  for(var i = 0; i < buttonsCount; i++) {
    buttons[i].render();
  }
}

function mousePressed() {
  //pictures
  for(var i = 0; i < picsCount; i++) {
    if(pics[i].isTouching(mouseX, mouseY)) {
      if(pics[i].isSelected()) {
        pics[i].setSelected(false);
      } else {
        pics[i].setSelected(true);
      }
    }
  }
  //buttons
  for(var i = 0; i < buttonsCount; i++) {
    if(buttons[i].isTouching(mouseX, mouseY)) {
      var id = buttons[i].getID();
      if(id === 0) {
        window.location.replace(rickroll);
      }
    }
  }
}

//classes
class ClickPic {
  constructor(img_d, img_b, x, y, w, h) {
    this.img_d = img_d;
    this.img_b = img_b;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.selected = false;
  }

  render() {
    var img = this.img_d;
    if(this.selected) img = this.img_b;
    image(img, this.x, this.y, this.w, this.h);
  }

  setSelected(bool) {
    this.selected = bool;
  }

  isSelected() {
    return this.selected;
  }

  isTouching(x, y) {
    if((x >= this.x && x <= this.x + this.w) && (y >= this.y && y <= this.y + this.h)) {
      return true;
    } else {
      return false;
    }
  }
}

class Button {
  constructor(id, img, x, y, w, h) {
    this.id = id;
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  render() {
    image(this.img, this.x, this.y, this.w, this.h);
  }

  getID() {
    return this.id;
  }

  isTouching(x, y) {
    if((x >= this.x && x <= this.x + this.w) && (y >= this.y && y <= this.y + this.h)) {
      return true;
    } else {
      return false;
    }
  }
}
