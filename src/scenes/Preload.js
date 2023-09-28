
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// background_preload
		this.add.image(960, 540, "Background preload");

		// logo
		this.add.image(966, 454, "Logo");

		// play_Button
		const play_Button = this.add.image(960, 813, "Play-Button");

		this.play_Button = play_Button;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	play_Button;

	/* START-USER-CODE */

	// Write your code here

	preload() {
		this.editorCreate();

		this.editorPreload();

		// this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("GamePlayScene"));
		this.play_Button.setInteractive().on("pointerdown",()=>{
			this.scene.stop("Preload");
			this.scene.start("Level");
		})

		this.play_Button.on("pointerover",()=>{
			this.play_Button.setScale(1.2,1.2)
		})
		this.play_Button.on("pointerout",()=>{
			this.play_Button.setScale(1,1)
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
