function drawCookie(ctx, x, y, size, hue) {
   const radius = size / 4;

   const length = 2 * Math.PI * radius;
   const dashLength = length / 6;

   ctx.setLineDash([0, dashLength]);

   draw.circle(ctx, x, y, radius, {
      lineWidth: radius * 2,
      strokeStyle: "#b6986d",
      lineCap: "round"
   });

   ctx.setLineDash([]);

   ctx.filter = "grayscale(1) brightness(20)";
   drawSnowFlake(ctx, x, y, size * 0.8, hue);
}