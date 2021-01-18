var song;
function setup() {
  createCanvas(600, 800);
  angleMode(DEGREES);
  soundFormats('mp3', 'ogg');
  song.play();
 song.setVolume(0.2);
 song.loop();
}

let x = 380;
let y = 625;
var sunYpos = 400;
let Sonne = ["#FFF1A1", "#FFCB4C", "#FFAC00", "#FF6400", "#240800"];
let Himmel = ["#88C1F2","#C4E1F2","#F2CD88","#F2B885","#F2937E"];
let rechteWand = ["#FEC0C4", "#E8ADA5", "#BA8D90"];
let linkeWand = ["#B3767A", "#8F5E61", "#664346"];
let bodenFarbe = ["#EBD9D8", "#CCBCBC", "#AB9E9D"];
let schattenRechts = ["#CC9891", "#9C5B69", "#A67B76"];
let schattenBoden = ["#B0A2A2", "#8C8181", "#6B6363"];
let Vase = ["#FEC0C4", "#E8ADA5", "#BA8D90"];
let Uhr = ["#E8B7A7", "#E8A7B1", "#FECAC4"];
//let Sonnenzeit = [07:00-12:00,12:01-15:59,16:00-20:00,20:01-06:59]


function clock() {

  strokeWeight(1);
  let s = second();
  let m = minute();
  let h = hour();
  let hourAngle = map(h % 12,0, 12, 0, 360);
  let secondAngle = map(s, 0, 60, 0, 360);
  let minuteAngle = map(m, 0, 60, 0, 360);
  let Uhrindex = map(h, 0, 24, 0, Uhr.length);
  let Uhrindexgerundet = Math.floor(Uhrindex)
  
  
  fill(Uhr[Uhrindexgerundet]);
  ellipse(498,297,40,48);
  
  push();
  translate(497,300);
  rotate(secondAngle);
  stroke(25);
  line(0, 0, 17, 0);
  pop();

  push();
  translate(497,300);
  rotate(minuteAngle);
  rotate(-90);
  stroke(25);
  line(0, 0, 20, 0);
  pop();

  push();
  translate(497,300);
  rotate(hourAngle);
  rotate(-90);
  stroke(25);
  line(0, 0, 15, 0);
  pop();
  


}

function pflanze(){
  let h = hour();
  let Vaseindex = map(h, 0, 24, 0, Vase.length);
  let Vaseindexgerundet = Math.floor(Vaseindex)
  //Vase
  fill("#E6B49E");
  ellipse(460, 646, 130, 150);

  fill(Vase[Vaseindexgerundet]);
  ellipse(460,580,120,80);

  fill("#664346");
  ellipse(460,605,108,30);
  
  //Stängle
  strokeWeight(3);
  noFill();
  stroke("#30331F");
  curve(300, 800, 465, 618, 350, 440, 30, 550);
  curve(800, 800, 455, 618, 520, 540, 900, 950);

  //Blätter
  fill("#30331F");
  ellipse(350, 450, 80, 40);
  ellipse(550, 550, 90, 40);
  ellipse(420, 500, 70, 30);
  ellipse(470, 560, 40, 20);
}

function preload(){
  soundFormats('mp3', 'ogg');
  song = loadSound('song.mp3');
}

function draw() {
  
  let s = second();
  let m = minute();
  let h = hour();
  let Himmelindex =map (h,0,24,0,Himmel.length);
  let Himmelindexgerundet = Math.floor(Himmelindex)
  
  background(Himmel[Himmelindexgerundet]);
  noStroke();

  

  let sonnenindex = map(h, 0, 24, 0, Sonne.length);
  let sonnenindexgerundet = Math.floor(sonnenindex)
  //console.log(Sonne[sonnenindexgerundet])

  let rechteWandindex = map(h, 0, 24, 0, rechteWand.length);
  let rechteWandindexgerundet = Math.floor(rechteWandindex)

  let linkeWandindex = map(h, 0, 24, 0, linkeWand.length);
  let linkeWandindexgerundet = Math.floor(linkeWandindex)

  let bodenFarbeindex = map(h, 0, 24, 0, bodenFarbe.length);
  let bodenFarbeindexgerundet = Math.floor(bodenFarbeindex)

  let schattenRechtsindex = map(m, 0, 60, 0, schattenRechts.length);
  let schattenRechtsindexgerundet = Math.floor(schattenRechtsindex)

  let schattenBodenindex = map(m, 0, 60, 0, schattenBoden.length);
  let schattenBodenindexgerundet = Math.floor(schattenBodenindex)

  //Sonne
  fill(Sonne[sonnenindexgerundet]);
  ellipse(60, sunYpos, 50);

  let totalSec = second() + minute() *60 + hour() * 3600;
  //console.log(second() + minute() *60 + hour() * 3600)
  // wieviele sekunden hat ein tag?
  // 24 * 60 * 60 = 86400 sekunden ein ganzer tag
  // 43200 sekunden bis mittag
  if (totalSec > 43200) { // nachmittag ab 12h, 12:00-23:59
    sunYpos = map(totalSec,0,86400,50,300)
  }
  else {
    // von 00:00-11:59
    sunYpos = map(totalSec,0,86400,300,50)
  }
  
  //console.log(sunYpos)
  //sunYpos += h;

  //rechts
  fill(rechteWand[rechteWandindexgerundet]);
  triangle(150, 180, 600, 100, 600, 670);
  triangle(600, 670, 150, 580, 150, 180);

  //links
  fill(linkeWand[linkeWandindexgerundet]);
  triangle(0, 200, 251, 300, 250, 600);
  triangle(0, 650, 251, 600, 1, 200);
  
  //Fenster
  fill(Himmel[Himmelindexgerundet]);
  triangle(100,350,100,400,125,403);
  triangle(125,358,100,351,125,404);

  //Boden
  fill(bodenFarbe[bodenFarbeindexgerundet]);
  triangle(250, 600, 0, 800, 0, 650);
  triangle(0, 800, 250, 600, 600, 800);
  triangle(250, 600, 600, 670, 600, 800);

  //Schatten Boden
  fill(schattenBoden[schattenBodenindexgerundet]);
  triangle(250, 600, 380, 625, 90, 720); //380,625//440,636//540,658//
  //x += 0.25;
  //y += 0.2;
  triangle(250, 600, 0, 650, 0, 800);
  triangle(0, 800, 100, 700, 400, 800);

  //schatten rechts
  fill(schattenRechts[schattenRechtsindexgerundet]);
  triangle(250, 300, 380, 625, 250, 600);

  clock();
  pflanze();
}