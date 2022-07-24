peter_pan_song="";
harry_potter_song="";
leftWrist_x=0;
leftWrist_y=0;
rightWrist_x=0;
rightWrist_y=0;

function setup()
{
    canvas = createCanvas(600,530);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw()
{
    image(0,0,600,530);
}
function preload()
{
    peter_pan_song= loadSound("music.mp3");
    harry_potter_song= loadSound("music2.mp3");
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized !");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("Left Wrist x = "+leftWrist_x+"Left Wrist y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("Right Wrist x = "+rightWrist_x+"Right Wrist y = "+rightWrist_y);
    }
}