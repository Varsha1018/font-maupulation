function setup(){
    video=createCapture(VIDEO);
    video.size(550, 550);
    canvas=createCanvas(550, 430);
    canvas.position(800, 150);
    video.position(150, 100);
    PoseNet=ml5.poseNet(video, modelloaded);
    PoseNet.on("pose", gotPose);
    }
    
    function modelloaded(){
        console.log("PoseNet is Initialised");
    }
    
    function gotPose(results){
        if(results.length>0){
        console.log(results);
        }
    }
    
    
    function draw(){
        background("#696969");
    }