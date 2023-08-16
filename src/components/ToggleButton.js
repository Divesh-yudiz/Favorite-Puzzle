
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class ToggleButton extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__ToggleButton"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {ToggleButton} */
	static getComponent(gameObject) {
		return gameObject["__ToggleButton"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */
	flag = true
	// Write your code here.
	awake() {
		this.gameObject.setInteractive().on('pointerdown', () => {
			if (this.gameObject.texture.key=="toggleBtnOn") {
				this.gameObject.setTexture('toggleBtnOff');
				// this.flag = false
			}else if(this.gameObject.texture.key=="toggleBtnOff"){
				this.gameObject.setTexture('toggleBtnOn');
			}

			console.log(this.gameObject.texture.key);
		})
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
