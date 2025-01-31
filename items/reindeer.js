function drawReindeer(ctx, x, y, size, hue) {
    // Draw antlers
    drawSnowFlake(ctx, x, y - size * 0.05, size, hue, [0, 0, 0, 0, 1, 1]);
 
    // Draw head
    const headRadius = size * 0.2;
    draw.circle(ctx, x, y, headRadius, {
       fillStyle: color.dark(hue)
    });

    // Draw eyes
    const eye = {
       radius: size * 0.05,
       xOffset: size * 0.1,
    };
    draw.circle(ctx, x - eye.xOffset, y, eye.radius, {
       fillStyle: color.darkest(hue)
    });
    draw.circle(ctx, x + eye.xOffset, y, eye.radius, {
       fillStyle: color.darkest(hue)
    });
 
    // Draw snout
    const snout = {
       x,
       y: y + size * 0.25,
       xRadius: size * 0.3,
       yRadius: size * 0.25
    };
    draw.ellipse(ctx, snout.x, snout.y, snout.xRadius, snout.yRadius, {
       fillStyle: color.lightest(hue)
    });

    // Draw nose
    draw.circle(ctx, x, y + size * 0.2, size * 0.1, {
       fillStyle: "red"
    });
}