var PreloadState = {
	preload: function(){
		this.load.baseURL = 'https://XristosTafarlis.github.io/Shooter/';
		this.load.crossOrigin = 'anonymous';
		
		//ionio logo
		var logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 32, ' ');
		logo.anchor.set(0.5, 0.5);
		logo.scale.set(0.75);

		//loading bar
		var loadingBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 64, 'loadingBar');
		loadingBar.anchor.set(0.5, 0.5);
		this.load.setPreloadSprite(loadingBar);
		
		//Sound preloads
		this.load.audio('peru', ['sounds/bgm.mp3', 'sounds/bgm.ogg']);
		
		//Image preloads
		this.load.image('starfield', 'assets/starfield.png');
		this.load.image('ship', 'assets/ship.png');
		this.load.image('bullet', 'assets/bullets/bullet.png');
		this.load.image('title', 'assets/title.png');
		this.load.image('lvl1', 'assets/levels/level1.png');
		this.load.image('lvl2', 'assets/levels/level2.png');

	},
	create: function(){
		game.state.start('MainMenu');
	}
}