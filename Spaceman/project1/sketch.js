// var img;
// function preload() {
//   img = loadImage('cat.jpg');
// }

// function setup() {
//   createCanvas(400, 240);
//   image(img, 0, 0);
// }
// var ellipse() = function draw(){ellipse(50, 50, 80, 80)};


function setup() {
    var canvas = createCanvas(700, 500);

    // Move the canvas so it's inside our <div id="sketchHolder">.
    canvas.parent('sketchHolder');

    background(255, 0, 0);
    strokeWeight(6);
    line(515, 115, 600, 115); //top horizontal
    line(515, 115, 515, 130); //top vertical tip
    line(600, 115, 600, 470); //main pole vertical
    line(415, 470, 685, 470); //support bottom post
    line(600, 400, 640, 470) //support beam 1
    line(600, 400, 560, 470) //support beam 2

}

function draw() {

    // ellipse(515,165,60,60)
    // line(515,195,515,280);
    // line(495,245,515,215);
    // line(515,215,535,245);
    // line(485,330,515,280);
    // line(515,280,545,330);
    // slider functionality if I have time
    // var slider = createSlider(0, 255, 127);
    // ellipse(50, 50, 80, 80);
    //draw parts of the man at each wrong answer click event - result of a conditional
}



//ideas: click and drag sound app
//p5 sound library link
//<script language="javascript" type="text/javascript" src="path/to/p5.sound.js"></script>
// p5.js-sound/lib/p5.sound.js