function drawSantaArm(ctx, x, y, size, hue, isLeft) {
    const armLength = size * 0.6;
    const armWidth = size * 0.2;
    const gloveSize = size * 0.5;

    const armOffsetX = -size * .35;
    const armY = y;
    const direction = isLeft ? -1 : 1;

    const armColor = "red";

    // Arm
    draw.line(
        ctx,
        x + direction * armOffsetX,
        armY,
        x + direction * (armOffsetX + armLength),
        armY,
        {
            lineWidth: armWidth,
            lineCap: "round",
            strokeStyle: armColor
        }
    );

    // Glove
    ctx.save();
    const gloveX = x + direction * (armOffsetX + armLength);
    const gloveY = armY;

    ctx.translate(gloveX, gloveY);
    ctx.rotate(direction * Math.PI / -2);
    drawGlove(ctx, 0, 0, gloveSize, hue);

    ctx.restore();
}
