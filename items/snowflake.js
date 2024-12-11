function drawSnowFlake(ctx, x, y, size, hue) {
    ctx.lineWidth = size * 0.05;
    ctx.strokeStyle = color.normal(hue);
    ctx.lineCap = "round";

    ctx.save();
    ctx.translate(x, y);
    // Draws 6 branches
    for (let i = 0; i < 6; i++) {
        drawBranch(ctx, 0, 0, size);
        ctx.rotate(Math.PI / 3);
    }
    ctx.restore();

    // Draw branch function
    function drawBranch(ctx, x, y, size) {
        draw.line(ctx, x, y, x + size * .5, y);
        draw.line(ctx, x + size * .25, y, x + size * .4, y + size * .15);
        draw.line(ctx, x + size * .25, y, x + size * .4, y - size * .15);
    }
}