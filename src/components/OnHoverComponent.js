
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class OnHoverComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__OnHoverComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {OnHoverComponent} */
	static getComponent(gameObject) {
		return gameObject["__OnHoverComponent"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	awake() {
		console.log("im in user Component ")
		this.gameObject.setInteractive(); // Enable input events for the image
		this.gameObject.on('pointerover', (pointer,gameObjects) => {
			this.gameObject.setAlpha(0.7)
		});
		this.gameObject.on('pointerout', (pointer,gameObjects) => {
			this.gameObject.setAlpha(1)
		});
	}

	// onImagePointerOver() {
	// 	this.gameObject.setAlpha(0.7);
	// }

	// onImagePointerOut() {
	// 	this.gameObject.setAlpha(1);
	// }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
