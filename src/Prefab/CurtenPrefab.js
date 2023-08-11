
// You can write more code here

/* START OF COMPILED CODE */

class CurtenPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -971, y ?? -377.06261955491254);

		// rightCurtens
		const rightCurtens = scene.add.image(971, 0, "openingCurtens");
		rightCurtens.scaleX = 1.8;
		rightCurtens.scaleY = 3.35;
		rightCurtens.setOrigin(0, 0.5);
		this.add(rightCurtens);

		// leftCurtne
		const leftCurtne = scene.add.image(-971, 0, "openingCurtens");
		leftCurtne.scaleX = 1.8;
		leftCurtne.scaleY = 3.35;
		leftCurtne.setOrigin(1, 0.5);
		this.add(leftCurtne);

		this.rightCurtens = rightCurtens;
		this.leftCurtne = leftCurtne;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	rightCurtens;
	/** @type {Phaser.GameObjects.Image} */
	leftCurtne;

	/* START-USER-CODE */

	// Write your code here.

	doorClosing(){
		console.log("im in the prefab")
		this.scene.tweens.add({
			targets: this.rightCurtens,
			x: 0,
			y: 0,
			duration: 1000, 
			ease: 'Bounce', 
		});
		this.scene.tweens.add({
			targets: this.leftCurtne,
			x: 0,
			y: 0,
			duration: 1000, 
			ease: 'Bounce', 
		});
	}
	doorOpening(){
		this.scene.tweens.add({
			targets: this.rightCurtens,
			x: 0,
			y: 0,
			duration: 0, 
			ease: 'Linear', 
			onComplete:()=>{
				this.scene.tweens.add({
					targets: this.rightCurtens,
					x: 971,
					y: 0,
					duration: 1000, 
					ease: 'Linear', 
				});
			}
		});
		this.scene.tweens.add({
			targets: this.leftCurtne,
			x: 0,
			y: 0,
			duration:0, 
			ease: 'Linear', 
			onComplete: () => {
				this.scene.tweens.add({
					targets: this.leftCurtne,
					x: -971,
					y: 0,
					duration: 1000, 
					ease: 'Linear', 
				});
			}
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
