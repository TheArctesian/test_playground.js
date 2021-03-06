draw(400, 600, 120, 0) < script >
    var myCanvas = document.getElementById("my_canvas1");
var ctx = myCanvas.getContext("2d");

function draw(startX, startY, len, angle, branchWidth) {
    ctx.lineWidth = branchWidth;

    ctx.beginPath();
    ctx.save();

    ctx.strokeStyle = "blue";
    ctx.fillStyle = "green";

    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();

    ctx.shadowBlur = 10;
    ctx.shadowColor = "rgba(0,0,0,0.8)";

    if (len < 10) {
        ctx.restore();
        return;
    }

    draw(0, -len, len * 0.8, angle - 15, branchWidth * 0.8);
    draw(0, -len, len * 0.8, angle + 10, branchWidth * 0.8);

    ctx.restore();
}
draw(400, 600, 120, 0, 10)