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

var currentScene = 1;
let startbtn;
let randx;
let randy;
var fade;
var fadeAmount = 60;
var backgroundx = 800;
var backgroundy = 514;

var drawStartButton = function() {
    fill(121, 180, 183);
    rect(width/2, height*3/4, 70, 40);
    fill(255, 255, 255);
    textSize(16);
    text("START", width/2+2, height*3/4+5);
};

var drawReStartButton = function() {
    fill(121, 180, 183);
    rect(width/2, height*3/4, 70, 40);
    fill(255, 255, 255);
    textSize(16);
    text("AGAIN", width/2+2, height*3/4+5);
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
    image(Glasses, randx, randy, 13, 13);
};

// Game End & restart (원래 게임 화면 위에 중첩)
var drawScene3 = function() {
    currentScene = 3;
    tint(255, fade);
    image(EndPage, width/2-200, height/2-200, 400, 400);

    if (fade < 255) fade += fadeAmount;
};

function setup() {
    createCanvas(backgroundx, backgroundy);

    rectMode(CENTER);
    textAlign(CENTER);

    // for local test
    //Room = loadImage('https://cdn-icons.flaticon.com/png/512/2002/premium/2002616.png?token=exp=1635088800~hmac=7222f823276d2fd1c84d0c574aa81025');
    //Glasses = loadImage('https://cdn-icons-png.flaticon.com/512/1656/1656373.png');
    //StartPage = loadImage('https://cdn-icons-png.flaticon.com/512/1995/1995595.png');
    //EndPage = loadImage('https://cdn-icons-png.flaticon.com/512/1995/1995595.png');

    Room = loadImage('images/room.png');
    Glasses = loadImage('images/glasses.png');
    StartPage = loadImage('images/start_page.png');
    EndPage = loadImage('images/end_page.png');
}

function draw() {
    if (currentScene == 1) {
        drawScene1();
        drawStartButton();
    } else if (currentScene == 2) {
        drawScene2();
    } else if (currentScene == 3) {
        drawScene3();
        drawReStartButton();
    }
};

touchStarted = function() {
    if (currentScene == 1) {
        if (mouseX >= width/2-35 && mouseX <= width/2+35 &&
            mouseY >= height*3/4-15 && mouseY <= height*3/4+15) {
                randx = random(width-15);
                randy = random(height-15);
                currentScene = 2;
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