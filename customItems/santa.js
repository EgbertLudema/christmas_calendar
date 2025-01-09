function drawSanta(ctx, x, y, size, hue) {
    const headSize = size * 0.7;
    const bodySize = size * 0.6;
    const armSize = size * 0.4;
    const legSize = size * 0.4;

    // Draw Santa's body
    drawSantaBody(ctx, x, y + size * 0.2, bodySize);

    // Draw Santa's head
    drawSantaHead(ctx, x, y - size * 0.3, headSize, hue);

    // Draw Santa's right arm
    drawSantaArm(ctx, x + 40, y, armSize, hue, false);

    // Flip the canvas and draw Santa's left arm
    ctx.save();
    ctx.translate(x, y);
    // Flip horizontally
    ctx.scale(-1, 1);
    // Draw the right arm flipped
    drawSantaArm(ctx, 40, 0, armSize, hue, false);
    ctx.restore(); 

    // Draw Santa's right leg
    drawSantaLeg(ctx, x + 25, y + size * 0.75, legSize, hue, false);

    // Flip the canvas and draw Santa's left leg
    ctx.save();
    ctx.translate(x, y);
    // Flip horizontally
    ctx.scale(-1, 1); 
    // Draw the right leg flipped
    drawSantaLeg(ctx, 25, size * 0.75, legSize, hue, false); 
    ctx.restore();
}
