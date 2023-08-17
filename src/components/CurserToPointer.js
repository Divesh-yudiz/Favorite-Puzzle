
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class CurserToPointer extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__CurserToPointer"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {CurserToPointer} */
	static getComponent(gameObject) {
		return gameObject["__CurserToPointer"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		this.gameObject.setInteractive();
		// Change pointer when hovering over the sprite
		this.gameObject.on('pointerover', function () {
			document.body.style.cursor = 'pointer'; // Change cursor to pointer
		});

		// Restore default pointer when moving out of the sprite
		this.gameObject.on('pointerout', function () {
			document.body.style.cursor = 'default'; // Change cursor back to default
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
