function preload() {
classifier = ml5.imageClassifier('DoodleNet');
}

function setup() {
canvas = createCanvas(360, 360);
canvas.center();
background('white');
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}

function classifyCanvas() {
    classifier.classify(canvas, gotResults);
}

function gotResults(error, results){
    if(error)console.log(error);
    else console.log(results);
}

function draw() {
strokeWeight(14);
stroke('red');
if(mouseIsPressed){
line(pmouseX, pmouseY, mouseX, mouseY);
}
}

function clearCanvas() {
    background('white');
}
