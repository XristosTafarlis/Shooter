var MainMenu = {
	create: function(){
		this.stage.backgroundColor = '#000020';

		//Creating Title
		var Shooter = game.add.image(600, 150, 'title');
		Shooter.scale.set(2, 2);
		Shooter.anchor.set(0.5, 0.5);
		
		//Creating level 1 button
		var buttonLVL1 = game.add.button(600 , 350, "lvl1", function(){
			game.state.start('GamePlay');
		});
		buttonLVL1.scale.set(2, 2);
		buttonLVL1.anchor.set(0.5, 0.5);

		//Creating level 2 button
		var buttonLVL2 = game.add.button(600 , 500, "lvl2", function(){
			game.state.start('GamePlay');
		});
		buttonLVL2.scale.set(2, 2);
		buttonLVL2.anchor.set(0.5, 0.5);

	}
}
