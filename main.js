function preload()
{

}
 
function setup()
{
    canvas = createCanvas(500, 500) ;
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
}

function draw()
{
    image(video, 125, 125, 250, 250) 
    fill(151, 230, 180)
    stroke(151, 230, 180)
    circle(50, 50, 80)
    circle(450, 50, 80)
    circle(50, 450, 80)
    circle(450, 450, 80)

    fill( 82, 69, 69)
    stroke( 82, 69, 69)
    rect(90, 40, 325, 20)
    rect(90, 450, 325, 20)
    rect(45, 80, 20, 325)
    rect(450, 80, 20, 325)
}
 
function take_snapshot()
{
    save("KISHALAYA.jpg")
}

