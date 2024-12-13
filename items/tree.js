function drawTree(ctx, x, y, size, hue) {
    const bottom = y + size / 2;

    const trunkHeight = size * 0.15;
    const trunkWidth = size * .1;

    // Draw trunk
    ctx.lineWidth = trunkWidth;
    ctx.strokeStyle = color.darkest(hue);
    draw.line(ctx, x, bottom, x, y);

    const block = {
        bottom: bottom - size * .2,
        top: bottom - size * .5,
        width: size * .8,
        get left() { return x - this.width / 2 },
        get right() { return x + this.width / 2 },
        color: color.normal(hue)
    }

    ctx.fillStyle = block.color;

    // Draw triangles in a loop, instead of manually drawing each triangle
    branchCount = 4;
    for (let i = 0; i < branchCount; i++) {
        block.width = size * (1 - i * 0.2);
        block.bottom = bottom - trunkHeight - i * (size * 0.2);
        block.top = block.bottom - size * 0.3;

        ctx.beginPath();
        ctx.moveTo(block.left, block.bottom);
        ctx.lineTo(block.right, block.bottom);
        ctx.lineTo(x, block.top);
        ctx.fill();
    }

    // // Draw bottom triangle
    // block.bottom = bottom - size * 0.2;
    // block.top = bottom - size * 0.5;
    // block.width = size * 0.8;
    // drawTriangle(ctx, block, x);

    // // Draw middle triangle
    // block.bottom = bottom - size * 0.4;
    // block.top = block.bottom - size * 0.3;
    // block.width = size * 0.6;
    // drawTriangle(ctx, block, x);

    // // Draw top triangle
    // block.bottom = bottom - size * 0.6;
    // block.top = top;
    // block.width = size * 0.4;
    // drawTriangle(ctx, block, x);
}

// // Draw triangle function
// function drawTriangle(ctx, block, x) {
//     ctx.beginPath();
//     ctx.moveTo(block.left, block.bottom);
//     ctx.lineTo(block.right, block.bottom);
//     ctx.lineTo(x, block.top);
//     ctx.fill();
// }