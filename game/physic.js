function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    if (keyboard.pressed("q"))
        enemy1.turnLeft(rotateAngle);
    if (keyboard.pressed("d"))
        enemy1.turnRight(rotateAngle);
    if (keyboard.pressed("z"))
        enemy1.accelerate(moveDistance);
    if (keyboard.pressed("s"))
        enemy1.decelerate(moveDistance);

    player1.move();
    enemy1.move();
    controls.update();
}