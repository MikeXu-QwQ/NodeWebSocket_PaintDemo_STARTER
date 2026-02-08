new p5((p) => {
  p.setup = () => {
    p.createCanvas(200, 200);
    p.background('red');
    p.fill('white');
    p.textSize(20);
    p.text('P5 OK', 50, 110);
    p.noLoop();
  };
});