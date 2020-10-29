var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.font = "48px serif";
ctx.fillText("Воякин Георгий Сергеевич", 100, 50)

ctx.beginPath();
ctx.arc(500, 200, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(500, 200, 25, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300,250);
ctx.lineTo(400,250);
ctx.lineTo(350, 150)
ctx.lineTo(300, 250)
ctx.stroke();

ctx.beginPath();
ctx.moveTo(320,235);
ctx.lineTo(380,235);
ctx.lineTo(350, 180);
ctx.lineTo(320, 235)
ctx.stroke();

ctx.strokeRect(130, 130, 100, 140);
ctx.strokeRect(145, 150, 70, 100);
