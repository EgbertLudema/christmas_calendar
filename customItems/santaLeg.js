function drawSantaLeg(ctx, x, y, size, hue, isLeft) {
    const legLength = size * 0.6;
    const legWidth = size * 0.22;
    const skateSize = size * 0.6;

    const legOffsetX = -size * 0.2;
    const legY = y - 40;
    const direction = isLeft ? -1 : 1;

    const legColor = "red";

    ctx.save();

    // Translate to the leg's starting point and apply rotation
    const translateX = x + direction * legOffsetX;
    const translateY = legY;
    ctx.translate(translateX, translateY);
    ctx.rotate(Math.PI / 2);

    // Draw the leg
    draw.line(
        ctx,
        0, 
        0,
        direction * legLength, 
        0,
        {
            lineWidth: legWidth,
            lineCap: "round",
            strokeStyle: legColor
        }
    );

    // Adjust skate position relative to the rotated canvas
    const skateX = direction * legLength;
    const skateY = legWidth - skateSize * 0.62;

    // Draw the skate
    ctx.save();
    ctx.translate(skateX, skateY);
    ctx.rotate(direction * Math.PI / -2);
    drawSkate(ctx, 0, 0, skateSize, hue);
    ctx.restore();

    ctx.restore(); // Restore the canvas state
}
