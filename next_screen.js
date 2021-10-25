// 로컬 파일 리소스를 요구하는 경우 CORS 에러 발생
// https://velog.io/@takeknowledge/%EB%A1%9C%EC%BB%AC%EC%97%90%EC%84%9C-CORS-policy-%EA%B4%80%EB%A0%A8-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3gk4gyhreu
// color set
// https://colorhunt.co/palette/79b4b7fefbf3f8f0df9d9d9d
// p5 rect center
//https://discourse.processing.org/t/why-the-rectmode-center-doesnt-work-for-me/31009/7

var currentScene;
let startbtn;

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
    text("Again", width/2+2, height*3/4+5);
};

// Game Start
var drawScene1 = function() {
    currentScene = 1;
    background(201, 204, 213);
    fill(157, 157, 157);
    textSize(39);
    text("안경알을 찾아주세요", width/2, height/2);
};

// Game Page
var drawScene2 = function() {
    currentScene = 2;
    background(255, 255, 255);
    image(Room, 0, 0);

    // TODO: 위치 랜덤화 -> 마우스 클릭
    // 투명도
    // https://p5js.org/ko/examples/image-transparency.html
    tint(255, 127); // 이미지를 투명도 50%로 보이게하기
    image(Glasses, width/2, height/2);
};

// Game End & restart (원래 게임 화면 위에 중첩)
var drawScene3 = function() {
    currentScene = 3;
    background(201, 204, 213);
    fill(157, 157, 157);
    textSize(39);
    text("Success", width/2, height/2);
};

function setup() {
    createCanvas(500, 500);

    rectMode(CENTER);
    textAlign(CENTER);

    Room = loadImage('https://github.com/BY1994/Hidden_Pictures_Game/blob/main/images/sample_room.png');
    Glasses = loadImage('https://github.com/BY1994/Hidden_Pictures_Game/blob/main/images/glasses.png');
    //btn = loadImage("https://toppng.com/uploads/preview/start-button-concept-game-start-button-11563520127pwcsff95og.png")
    //startbtn = new Button(10, 10, Winston);

    Glasses.resize(10,10);
    Room.resize(500,500);
    drawScene1();
    drawStartButton();
}

function draw() {
};

mouseClicked = function() {
    // Need to modify
    if (mouseX >= width/2-35 && mouseX <= width/2+35 &&
        mouseY >= height*3/4-15 && mouseY <= height*3/4+15) {
        if (currentScene === 1) {
            drawScene2();
        } else if (currentScene === 2) {
            drawScene3();
            drawReStartButton();
        } else if (currentScene === 3) {
            drawScene2();
        }
    }
};