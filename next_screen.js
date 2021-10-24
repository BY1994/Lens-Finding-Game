// 로컬 파일 리소스를 요구하는 경우 CORS 에러 발생
// https://velog.io/@takeknowledge/%EB%A1%9C%EC%BB%AC%EC%97%90%EC%84%9C-CORS-policy-%EA%B4%80%EB%A0%A8-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3gk4gyhreu

var currentScene;

var drawStartButton = function() {
    fill(81, 166, 31);
    rect(width/2, height/2, 50, 25);
    fill(255, 255, 255);
    textSize(16);
    text("START", width/2, height/2+20);
};

// Game Start
var drawScene1 = function() {
    currentScene = 1;
    background(235, 247, 255);
    fill(0, 85, 255);
    textSize(39);
    text("안경알을 찾아주세요", 10, height/2);
};

// Game Page
var drawScene2 = function() {
    currentScene = 2;
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(39);
    text("Lil Winston is born!", 10, 100);
    //image(loadImage("creatures/BabyWinston.png"), width/2, height/2);
    image(BabyWinston, width/2, height/2);

    // TODO: 위치 랜덤화 -> 마우스 클릭
    // 투명도
    // https://p5js.org/ko/examples/image-transparency.html
    tint(255, 127); // 이미지를 투명도 50%로 보이게하기
    image(Winston, width/2, height/2);
};

// TODO: 성공 페이지와 실패 페이지 나누기
// Game End & restart (원래 게임 화면 위에 중첩)
var drawScene3 = function() {
    currentScene = 3;
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(39);
    text("Winston grows up!", 10, 100);
    //image(loadImage("creatures/Winston.png"), width/2, height/2);
    image(Winston, width/2, height/2);
};

var drawScene4 = function() {
    currentScene = 4;
    background(194, 255, 222);
    
    var x = cos(millis()*1); 
    var y = cos(millis()+98);
    
    // face
    //image(loadImage("creatures/Winston.png"),x+177, x+101,50, 50);
    image(Winston,x+177, x+101,50, 50);
    
    // body
    strokeWeight(2);
    line(202, 213, x+203, x+150);
    line(x+220, x*20+266, 202, 213);
    line(x+188, x*2+266, 202, 213);
    line(x+167, x*20+150, 204, 169);
    line(y+164,y*20+148,204, 168);
    
    // drum set
    strokeWeight(3);
    fill(255, 255, 255);
    ellipse(162, 176, 54, 15);
    line(161, 264, 161, 184);
    line(134, 275, 162, 255);
    line(185, 275,162, 257);
    fill(0, 0, 0);
    ellipse(226, 268, 65, 65);
    fill(255, 255, 255);
    ellipse(226, 268, 60, 60);
};

var drawScene5 = function() {
    currentScene = 5;
    
    // Based on https://www.khanacademy.org/cs/drums/6586586242744320
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(39);
    text("Winston has babies!", 10, 47);
    textSize(17);
    text("Drag to make more babies", 10, 78);
    
    //image(loadImage("creatures/Winston.png"), 21, 183);
    image(Winston, 21, 183);
    fill(71, 71, 71);
    rect(32, 185, 108, 15);
    rect(46, 126, 82, 60);
    
    //image(loadImage("creatures/BabyWinston.png"), 195, 250);
    image(BabyWinston, 195, 250);
};

function setup() {
    createCanvas(710, 400);
    //background(102);
    
    Winston = loadImage('https://cdn-icons.flaticon.com/png/512/2002/premium/2002616.png?token=exp=1635088800~hmac=7222f823276d2fd1c84d0c574aa81025'); // 이미지 불러오기
    BabyWinston = loadImage('https://cdn-icons-png.flaticon.com/512/1656/1656373.png'); // 이미지 불러오기

    drawScene1();
    drawStartButton();
}

function draw() {
    if (currentScene === 4) {
        drawScene4();
    }
    drawButton();
};

mouseClicked = function() {
    // Need to modify
    if (mouseX >= width/2 && mouseY <= height/2) {
        if (currentScene === 1) {
            drawScene2();
        } else if (currentScene === 2) {
            drawScene3();
        } else if (currentScene === 3) {
            drawScene4();
        }  else if (currentScene === 4) {
            drawScene5();
        } else if (currentScene === 5) {
            drawScene1();
        }
        drawButton();
    } else {
        if (currentScene === 5) {
            //image(loadImage("creatures/BabyWinston.png"), mouseX-20, mouseY-20);
            image(BabyWinston, mouseX-20, mouseY-20);
        }
    }
};

