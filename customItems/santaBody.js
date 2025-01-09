function drawSantaBody(ctx, x, y, size) {
    // Santa's round body
    const body = {
        x,
        y,
        radius: size * 0.5,
        color: "red"
    };

    draw.circle(ctx, body.x, body.y, body.radius, {
        fillStyle: body.color
    });

    // Santa's belt
    const belt = {
        x,
        y: body.y + size * 0.05,
        width: body.radius * 2,
        height: size * 0.1,
        color: "black"
    };

    ctx.fillStyle = belt.color;
    ctx.fillRect(belt.x - belt.width / 2, belt.y - belt.height / 2, belt.width, belt.height);

    // Belt buckle
    const buckle = {
        x: belt.x,
        y: belt.y,
        width: size * 0.2,
        height: size * 0.12,
        color: "gold"
    };

    ctx.fillStyle = buckle.color;
    ctx.fillRect(
        buckle.x - buckle.width / 2,
        buckle.y - buckle.height / 2,
        buckle.width,
        buckle.height
    );

    // Inner rectangle for the buckle
    const innerBuckle = {
        x: buckle.x,
        y: buckle.y,
        width: size * 0.1,
        height: size * 0.05,
        color: "black"
    };

    ctx.fillStyle = innerBuckle.color;
    ctx.fillRect(
        innerBuckle.x - innerBuckle.width / 2,
        innerBuckle.y - innerBuckle.height / 2,
        innerBuckle.width,
        innerBuckle.height
    );
}