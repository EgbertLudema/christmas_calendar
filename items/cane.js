function drawCane(ctx, x, y, size, hue) {
    const top = y - size / 2;
    const bottom = y + size / 2;
 
    const width = size * 0.5;
    const thickness = size * 0.1;
 
    const arc = {
       radius : (width - thickness) / 2,
       x,
       get y() { return top + this.radius + thickness / 2 }
    };
 
    // Draw solid line with rounded ends
    ctx.beginPath();
    ctx.strokeStyle = color.lightest(hue);
    ctx.lineWidth = thickness;
    // Rounded caps
    ctx.lineCap = "round";

    // Draw the arc
    ctx.arc(arc.x, arc.y, arc.radius, Math.PI, 0);
    ctx.lineTo(arc.x + arc.radius, bottom);
    ctx.stroke();

    // Set dashlines
    ctx.strokeStyle = color.normal(hue);
    ctx.setLineDash([thickness, thickness]);
    // Set the linecap back to the default square
    ctx.lineCap = "butt";

    // Draw the dashlines on the arc
    ctx.beginPath();
    // Draw dashlines for arc
    ctx.arc(arc.x, arc.y, arc.radius, Math.PI, 0);
    // Draw dashlines
    ctx.lineTo(arc.x + arc.radius, bottom);
    ctx.stroke();
}