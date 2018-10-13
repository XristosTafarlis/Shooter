function fireBullet() {
	//  To avoid them being allowed to fire too fast we set a time limit
	if (game.time.now > bulletTimer) {
		var BULLET_SPEED = 400;
		var BULLET_SPACING = 250;
		//  Grab the first bullet we can from the pool
		var bullet = bullets.getFirstExists(false);

		if (bullet) {
			//  And fire it
			//  Make bullet come out of tip of ship with right angle
			var bulletOffset = 20 * Math.sin(game.math.degToRad(player.angle));
			bullet.reset(player.x + bulletOffset, player.y);
			bullet.angle = player.angle;
			game.physics.arcade.velocityFromAngle(bullet.angle, BULLET_SPEED, bullet.body.velocity);
			bullet.body.velocity.y += player.body.velocity.y;
			gun1.play('',0,1,false);

			bulletTimer = game.time.now + BULLET_SPACING;
		}
	}
}

function launchEnemies1() {
	var enemy = enemies1.getFirstExists(false);
	if (enemy) {
		//enemy.reset( 700, game.rnd.integerInRange ( 20, 580));
		enemy.reset( 400, 300);
		//enemy.body.velocity.y = game.rnd.integerInRange(-200, 200);
		enemy.body.velocity.x = -300;
		//enemy.body.drag.y = 100;
		if (enemy.x < -30 || enemy.y > 30 || enemy.y < -30)
			enemy.kill();
	}

	//  Send another enemy soon
	game.time.events.add(game.rnd.integerInRange(300, 3000), launchEnemies1);
}