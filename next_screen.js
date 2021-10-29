// 로컬 파일 리소스를 요구하는 경우 CORS 에러 발생
// https://velog.io/@takeknowledge/%EB%A1%9C%EC%BB%AC%EC%97%90%EC%84%9C-CORS-policy-%EA%B4%80%EB%A0%A8-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3gk4gyhreu
// color set
// https://colorhunt.co/palette/79b4b7fefbf3f8f0df9d9d9d
// p5 rect center
//https://discourse.processing.org/t/why-the-rectmode-center-doesnt-work-for-me/31009/7
// 화면 전환 예시
// https://editor.p5js.org/itsai0724/sketches/B1xmLvw6G
// 모바일에서 p5 클릭시
// https://stackoverflow.com/questions/66245111/how-to-make-a-button-work-when-touched-using-p5-code
    // 투명도
    // https://p5js.org/ko/examples/image-transparency.html
// fade in effect
// https://editor.p5js.org/remarkability/sketches/rtM08miUD
// mouse hover effect example
// https://editor.p5js.org/kjhollen/sketches/S1Jxxt-HW
// sound play 강의
// https://www.youtube.com/watch?v=o0toEEP3_y0
// The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page
// https://blog.naver.com/NBlogTop.naver?isHttpsRedirect=true&blogId=brane7&Redirect=Dlog&Qs=/brane7/221268154247
// https://p5js.org/ko/reference/#/p5/userStartAudio
// chrome security disable
// https://stackoverflow.com/questions/59549893/how-to-play-sounds-in-p5-js
// 배경음악
// https://bgmfactory.com/

var currentScene = 1;
let startbtn;
let randx;
let randy;
var fade;
var fadeAmount = 60;
var backgroundx = 800;
var backgroundy = 514;
var btnwidth = 70;
var btnheight = 40;
var Music;

var drawButton = function(msg) {
    if ((mouseX > width/2 - btnwidth/2) &&
        (mouseX < width/2 + btnwidth/2) &&
        (mouseY > height*3/4 - btnwidth/2) &&
        (mouseY < height*3/4 + btnwidth/2)) {
        fill(206, 229, 208);
    } else {
        fill(121, 180, 183);
    }
    rect(width/2, height*3/4, btnwidth, btnheight);
    fill(255, 255, 255);
    textSize(16);
    text(msg, width/2+2, height*3/4+5);
};

// Game Start
var drawScene1 = function() {
    currentScene = 1;
    background(StartPage);
};

// Game Page
var drawScene2 = function() {
    currentScene = 2;
    background(255, 255, 255);
    tint(255, 255);
    image(Room, 0, 0, backgroundx, backgroundy);
    tint(255, 127); // 이미지를 투명도 50%로 보이게하기
    image(Glasses, randx, randy, 15, 15);
};

// Game End & restart (원래 게임 화면 위에 중첩)
var drawScene3 = function() {
    currentScene = 3;
    tint(255, fade);
    image(EndPage, width/2-200, height/2-200, 400, 400);

    if (fade < 255) fade += fadeAmount;
};

function preload(){
    // for local test
    //Room = loadImage('https://cdn-icons-png.flaticon.com/512/1995/1995595.png');
    //Glasses = loadImage('https://cdn-icons-png.flaticon.com/512/1656/1656373.png');
    //StartPage = loadImage('https://cdn-icons-png.flaticon.com/512/1995/1995595.png');
    //EndPage = loadImage('https://cdn-icons-png.flaticon.com/512/1995/1995595.png');

    Room = loadImage('assets/room.png');
    Glasses = loadImage('assets/glasses.png');
    StartPage = loadImage('assets/start_page.png');
    EndPage = loadImage('assets/end_page.png');
    //soundFormats('mp3', 'ogg');
    Music = loadSound('assets/background_music.mp3');
}

function setup() {
    // mimics the autoplay policy
    //getAudioContext().suspend();
    //MonoSynth();
    createCanvas(backgroundx, backgroundy);

    rectMode(CENTER);
    textAlign(CENTER);
}

function draw() {
    if (currentScene == 1) {
        drawScene1();
        drawButton("START");
    } else if (currentScene == 2) {
        drawScene2();
    } else if (currentScene == 3) {
        drawScene3();
        drawButton("AGAIN");
    }
};

function touchStarted() {
    if (currentScene == 1) {
        if (mouseX >= width/2-35 && mouseX <= width/2+35 &&
            mouseY >= height*3/4-15 && mouseY <= height*3/4+15) {
                randx = random(width-15);
                randy = random(height-15);
                currentScene = 2;
                //userStartAudio();
                //getAudioContext().resume();
                Music.play();
        } 
    } else if (currentScene == 2) {
        if (mouseX >= randx && mouseX <= randx+15 &&
            mouseY >= randy && mouseY <= randy+15) {
                fade = 0;
                currentScene = 3;
        }
    } else if (currentScene === 3) {
        if (mouseX >= width/2-35 && mouseX <= width/2+35 &&
            mouseY >= height*3/4-15 && mouseY <= height*3/4+15) {
                randx = random(width-15);
                randy = random(height-15);
                currentScene = 2;
        }
    }
};