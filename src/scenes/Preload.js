
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

		// loading
		const loading = this.add.sprite(964, 477, "loading_win-sheet0", 0);
		loading.scaleX = 3;
		loading.scaleY = 3;

		this.loading = loading;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	loading;

	/* START-USER-CODE */

	// Write your code here

	preload() {
		this.editorCreate();

		this.editorPreload();

		this.loading.anims.play("loadingAnimation",true) 
		// this.loading.anims.play("loadingAnimation")

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Level"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
