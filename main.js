function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('console');

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('poses',gotPoses);
}

function modelLoaded(){
	console.log("Model Loaded!");
}

function gotPoses(results){
	console.log(results);
		if(results.length>0){
		noseX=results[0].poses.nose.x;
		noseY=results[0].poses.nose.y;
		console.log("nose x = "+noseX+" and nose y = "+noseY);
	}
}

function draw() {
	game()
}






