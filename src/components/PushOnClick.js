
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class PushOnClick extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__PushOnClick"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {PushOnClick} */
	static getComponent(gameObject) {
		return gameObject["__PushOnClick"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	awake() {

		// this.gameObject.setInteractive().on("pointerdown", () => {
		// 	this.scene.add.tween({
		// 		targets: this.gameObject,
		// 		scaleX: "*=0.8",
		// 		scaleY: "*=0.8",
		// 		duration: 80,
		// 		yoyo: true
		// 	});
		// });

		// this.gameObject.setInteractive().on("pointerover", () => {
		// 	console.log("pointer Over")
		// 	this.scene.add.tween({
		// 		targets: this.gameObject,
		// 		scaleX: 1.7,
		// 		scaleY: 1.7,
		// 		duration: 80,
		// 	});
		// });
		// this.gameObject.setInteractive().on("pointerout", () => {
		// 	console.log("pointer Moved")
		// 	this.scene.add.tween({
		// 		targets: this.gameObject,
		// 		scaleY: 1.5,
		// 		scaleX: 1.5,
		// 		duration: 80,
		// 	});
		// });

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
