
// You can write more code here

/* START OF COMPILED CODE */

class CurtenPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -971, y ?? -377.06261955491254);

		// rightCurtens
		const rightCurtens = scene.add.image(971, 0, "openingCurtens");
		rightCurtens.scaleX = 2.5;
		rightCurtens.scaleY = 5;
		rightCurtens.setOrigin(0, 0.5);
		this.add(rightCurtens);

		// leftCurtne
		const leftCurtne = scene.add.image(-971, 0, "openingCurtens");
		leftCurtne.scaleX = 2.5;
		leftCurtne.scaleY = 5;
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
			// this.leftCurtne.setAngle(8)
			// this.rightCurtens.setAngle(8)
		this.scene.tweens.add({
			targets: this.rightCurtens,
			x: -30,
			y: 0,
			angle:-8,
			duration: 1000, 
			ease: 'Sine.easeOut', 
			onComplete:()=>{
				this.scene.tweens.add({
					targets: this.rightCurtens,
					x: 10,
					y: 0,
					angle:2,
					duration: 300, 
					ease: 'Sine.easeOut', 
					onComplete:()=>{
							this.scene.tweens.add({
								targets: this.rightCurtens,
								x: -10,
								y: 0,
								angle:-1,
								duration: 200, 
								ease: 'Sine.easeOut', 
								onComplete:()=>{	
								}
							});
					}
				});
			}
		});
		this.scene.tweens.add({
			targets: this.leftCurtne,
			x: 30,
			y: 0,
			angle:8,
			duration: 1000, 
			ease: 'Sine.easeOut', 
			onComplete:()=>{
				this.scene.tweens.add({
					targets: this.leftCurtne,
					x: -10,
					y: 0,
					angle:2,
					duration: 300, 
					ease: 'Sine.easeOut', 
					onComplete:()=>{
						this.scene.tweens.add({
							targets: this.leftCurtne,
							x: 10,
							y: 0,
							angle:1,
							duration: 200, 
							ease: 'Sine.easeOut', 
							onComplete:()=>{	
							}
						});
					}
				});
			}
		});
	}
	doorOpening(){
		this.scene.tweens.add({
			targets: this.rightCurtens,
			x: 0,
			y: 0,
			angle:0,
			duration:0, 
			ease: 'Sine.easeOut', 
			onComplete:()=>{
				this.scene.tweens.add({
					targets: this.rightCurtens,
					x: 10,
					y: 0,
					angle:-2,
					duration: 500, 
					ease: 'Sine.easeOut', 
					onComplete:()=>{
							this.scene.tweens.add({
								targets: this.rightCurtens,
								x: 1020,
								y: 0,
								angle:-8,
								duration: 1000, 
								ease: 'Sine.easeOut', 
								onComplete:()=>{	
								}
							});
					}
				});
			}
		});
		this.scene.tweens.add({
			targets: this.leftCurtne,
			x: 0,
			y: 0,
			angle:0,
			duration: 0, 
			ease: 'Sine.easeOut', 
			onComplete:()=>{
				this.scene.tweens.add({
					targets: this.leftCurtne,
					x: -10,
					y: 0,
					angle:2,
					duration: 500, 
					ease: 'Sine.easeOut', 
					onComplete:()=>{
						this.scene.tweens.add({
							targets: this.leftCurtne,
							x: -1020,
							y: 0,
							angle:8,
							duration: 1000, 
							ease: 'Sine.easeOut', 
							onComplete:()=>{	
								this.leftCurtne.setAngle(0)
							}
						});
					}
				});
			}
		});
		/////////////////////////////
		// this.scene.tweens.add({
		// 	targets: this.rightCurtens,
		// 	x: 0,
		// 	y: 0,
		// 	duration: 0, 
		// 	ease: 'Linear', 
		// 	onComplete:()=>{
		// 		this.scene.tweens.add({
		// 			targets: this.rightCurtens,
		// 			x: 971,
		// 			y: 0,
		// 			duration: 1000, 
		// 			ease: 'Linear', 
		// 		});
		// 	}
		// });
		// this.scene.tweens.add({
		// 	targets: this.leftCurtne,
		// 	x: 0,
		// 	y: 0,
		// 	duration:0, 
		// 	ease: 'Linear', 
		// 	onComplete: () => {
		// 		this.scene.tweens.add({
		// 			targets: this.leftCurtne,
		// 			x: -971,
		// 			y: 0,
		// 			duration: 1000, 
		// 			ease: 'Linear', 
		// 		});
		// 	}
		// });
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
