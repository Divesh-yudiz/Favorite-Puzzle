const init = () => {
	class Boot extends Phaser.Scene {
		preload() {
			this.load.pack("pack", "assets/preload-asset-pack.json");
			this.load.on(Phaser.Loader.Events.COMPLETE, () =>
				this.scene.start("Preload")
			);
		}
	}
	// if (window.innerWidth < 1050) {
	// 	var game = new Phaser.Game({
	// 		width: 720,
	// 		height: 1180,
	// 		type: Phaser.AUTO,
	// 		transparent:true,
	// 		parent: "game-division",
	// 		scale: {
	// 			mode: Phaser.Scale.FIT,
	// 			autoCenter: Phaser.Scale.CENTER_BOTH,
	// 			orientation: Phaser.Scale.Orientation.PORTRAIT,
	// 		},
	// 		audio: {
	// 			disableWebAudio: false,
	// 		},
	// 		physics: {
	// 			default: 'arcade',
	// 			arcade: {
	// 				gravity: { y: 0 },
	// 				debug: false
	// 			}
	// 		}
	// 	});
	// } else {
	var game = new Phaser.Game({
		width: 1920,
		height: 1080,
		type: Phaser.AUTO,
		backgroundColor:0x808080,
		parent: "game-division",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH,
		},
		audio: {
			disableWebAudio: false,
		},
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: 0 },
				debug: false
			}
		}
	});
	// }
	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("PuzzleMenu", PuzzleMenu);
	game.scene.add("GamePlayScene", GamePlayScene);
	game.scene.add("Boot", Boot, true);
};

window.onload = (event) => {
	init();
};
