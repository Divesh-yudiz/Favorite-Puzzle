
// You can write more code here

/* START OF COMPILED CODE */

class PuzzleMenu extends Phaser.Scene {

	constructor() {
		super("PuzzleMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		this.add.image(960, 540, "Background");

		// rightButton
		const rightButton = this.add.image(1781, 540, "Next-button");
		rightButton.tintTopLeft = 13684944;

		// LeftButton
		const leftButton = this.add.image(126, 540, "Next-button");
		leftButton.flipX = true;

		// go_back_btn
		const go_back_btn = this.add.image(80, 88, "Back-button");

		// tweenContainer1
		const tweenContainer1 = this.add.container(2120, 350);

		// preview_box_6
		const preview_box_6 = this.add.image(140, -35, "Square");
		tweenContainer1.add(preview_box_6);

		// preview_box_7
		const preview_box_7 = this.add.image(663, -35, "Square");
		tweenContainer1.add(preview_box_7);

		// preview_box_8
		const preview_box_8 = this.add.image(1186, -35, "Square");
		tweenContainer1.add(preview_box_8);

		// preview_box_9
		const preview_box_9 = this.add.image(140, 416, "Square");
		tweenContainer1.add(preview_box_9);

		// preview_box_10
		const preview_box_10 = this.add.image(663, 416, "Square");
		tweenContainer1.add(preview_box_10);

		// preview_box_11
		const preview_box_11 = this.add.image(1186, 416, "Square");
		tweenContainer1.add(preview_box_11);

		// preview_box
		const preview_box = this.add.image(-1678, 419, "Square");
		tweenContainer1.add(preview_box);

		// preview_box_1
		const preview_box_1 = this.add.image(-1163, 416, "Square");
		tweenContainer1.add(preview_box_1);

		// preview_box_2
		const preview_box_2 = this.add.image(-659, 416, "Square");
		tweenContainer1.add(preview_box_2);

		// preview_box_3
		const preview_box_3 = this.add.image(-653, -35, "Square");
		tweenContainer1.add(preview_box_3);

		// preview_box_4
		const preview_box_4 = this.add.image(-1158, -39, "Square");
		tweenContainer1.add(preview_box_4);

		// preview_box_5
		const preview_box_5 = this.add.image(-1681, -39, "Square");
		tweenContainer1.add(preview_box_5);

		// flower
		const flower = this.add.image(-1678, -39, "Image-1");
		tweenContainer1.add(flower);

		// butterfly
		const butterfly = this.add.image(-1155, -36, "Image-2");
		tweenContainer1.add(butterfly);

		// ice_cream
		const ice_cream = this.add.image(-657, -29, "Image-3");
		tweenContainer1.add(ice_cream);

		// tulips
		const tulips = this.add.image(-1681, 417, "Image-4");
		tweenContainer1.add(tulips);

		// turtle
		const turtle = this.add.image(-1163, 424, "Image-5");
		tweenContainer1.add(turtle);

		// cat
		const cat = this.add.image(-655, 419, "Image-6");
		tweenContainer1.add(cat);

		// selectPuzzle
		const selectPuzzle = new SelectPuzzle(this, 960, 540);
		this.add.existing(selectPuzzle);
		selectPuzzle.visible = false;

		// CurtenPrefab
		const curtenPrefab = new CurtenPrefab(this, 960, 540);
		this.add.existing(curtenPrefab);
		curtenPrefab.visible = true;

		this.rightButton = rightButton;
		this.leftButton = leftButton;
		this.go_back_btn = go_back_btn;
		this.tweenContainer1 = tweenContainer1;
		this.selectPuzzle = selectPuzzle;
		this.curtenPrefab = curtenPrefab;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	rightButton;
	/** @type {Phaser.GameObjects.Image} */
	leftButton;
	/** @type {Phaser.GameObjects.Image} */
	go_back_btn;
	/** @type {Phaser.GameObjects.Container} */
	tweenContainer1;
	/** @type {SelectPuzzle} */
	selectPuzzle;
	/** @type {CurtenPrefab} */
	curtenPrefab;

	/* START-USER-CODE */

	// Write your code here
	addTween
	create() {

		// c.setinteractiveOnPuzzleImages
		this.editorCreate();
		// this.setinteractiveOnPuzzleImages();
		this.curtenPrefab.doorOpening();
		this.funcToAddEvents();

		this.addTween = new TweenManager(this);

		// this.createIcon.setInteractive().on('pointerdown', this.openFilePicker, this);


		this.pageCount = 0;
		this.totalPages = 1;
		this.leftButton.setAlpha(0);

		// this.rightButton.setInteractive().on("pointerdown", () => {
		// 	if (this.rightButton.alpha === 1) {
		// 		this.pageCount++;
		// 		this.tweens.add({
		// 			targets: this.tweenContainer1,
		// 			x: this.tweenContainer1.x - 1540,
		// 			y: 350,
		// 			duration: 700,
		// 			ease: 'Linear',
		// 			onComplete: () => {
		// 				this.leftButton.setAlpha(1);
		// 				if(this.pageCount === this.totalPages) {
		// 					this.rightButton.setAlpha(0);
		// 				}
		// 			}
		// 		});
		// 	}
		// })

		this.rightButton.on("pointerover", () => {
			this.rightButton.setTint(0xd0d0d0);
		})
		this.rightButton.on("pointerout", () => {
			console.log("im out")
			this.rightButton.setTint(0xffffff)
		})
		this.leftButton.on("pointerover", () => {
			this.leftButton.setTint(0xd0d0d0);
		})
		this.leftButton.on("pointerout", () => {
			console.log("im out")
			this.leftButton.setTint(0xffffff)
		})


		// this.leftButton.setInteractive().on("pointerdown", () => {
		// 	if (this.leftButton.alpha === 1) {
		// 		this.pageCount--;
		// 		this.tweens.add({
		// 			targets: this.tweenContainer1,
		// 			x: this.tweenContainer1.x + 1540,
		// 			y: 350,
		// 			duration: 700,
		// 			ease: 'Linear',
		// 			onComplete: () => {
		// 				this.rightButton.setAlpha(1);
		// 				if(this.pageCount === 0) {
		// 					this.leftButton.setAlpha(0);
		// 					this.pageCount = 0;
		// 				}
		// 			}	
		// 		});
		// 	}
		// });

		this.go_back_btn.setInteractive();
		this.go_back_btn.on('pointerdown', () => {
			this.curtenPrefab.doorClosing();
			setTimeout(() => {
				this.scene.stop("PuzzleMenu")
				this.scene.start("Level");
			}, 5000);

		})
	}


	openFilePicker() {
		// Create an input element of type 'file'
		var fileInput = document.createElement('input');
		fileInput.type = 'file';
		fileInput.accept = 'image/*';

		// Listen for the 'change' event on the input element
		fileInput.addEventListener('change', function (event) {
			var file = event.target.files[0];

			if (file) {
				var reader = new FileReader();

				// Read the selected image as a data URL
				reader.onload = function (event) {
					// Set the image's texture to the loaded data URL
					image.setTexture(event.target.result);
					image.setVisible(true); // Show the image
				};

				reader.readAsDataURL(file);
			}
		});
		// Trigger a click event on the file input to open the file picker
		fileInput.click();
	}

	funcToAddEvents() {
		this.tweenContainer1.each(function (child) {
			// console.log(child)
			// Check if the key of the image matches one of the specified keys
			if (["Image-1", "Image-2", "Image-3", "Image-4", "Image-5", "Image-6"].includes(child.texture.key)) {
				child.setInteractive().on('pointerdown', () => {
					this.tweenContainer1.list.forEach((otherChild) => {
						otherChild.disableInteractive();
					});
					this.selectPuzzle.visible = true;
					// this.addTween.glowEffect(this.selectPuzzle.gold_button)
					this.selectPuzzle.puzzleImage.setTexture(child.texture.key)
					this.selectPuzzle.puzzleImage.setScale(0.8, 0.8)
					// this.selectPuzzle.puzzleImage.setScale(0.28,0.24)
					puzzleKey = this.selectPuzzle.puzzleImage.texture.key
					this.addTween.glowEffect(this.selectPuzzle.new_game_button)
					// console.log(puzzleKey)
				})

				child.on("pointerover", () => {
					child.setAlpha(0.7);
				})
				child.on("pointerout", () => {
					child.setAlpha(1)
				})
			}
		}, this);

		this.selectPuzzle.button_close.setInteractive().on('pointerdown', () => {
			this.selectPuzzle.visible = false;

			this.tweenContainer1.list.forEach((otherChild) => {
				otherChild.setInteractive();
			});
		})

		this.selectPuzzle.new_game_button.setInteractive().on('pointerdown', () => {
			this.selectPuzzle.visible = false;
			this.curtenPrefab.doorClosing();
			setTimeout(() => {
				this.scene.stop("PuzzleMenu");
				this.scene.start("GamePlayScene");
			}, 1700)
		})

		// Reset the scale of all objects to 1
		this.selectPuzzle.levelSelectorContainer.list.forEach((object, index) => {
			// this.addTween.hoverEffect(object)
			object.setInteractive().on("pointerdown", () => {
				// Reset the scale of all objects to 1
				this.selectPuzzle.levelSelectorContainer.list.forEach((otherObject) => {
					otherObject.setScale(1, 1);
				});
				// Set the scale of the clicked object to 1.5
				object.setScale(1.5, 1.5);
				noOfPieces = object._text
				// setImage(object);
				if (object._text == 49) {
					console.log("im 16")
					this.selectPuzzle.dummyPuzzlePiece2.setScale(0.75, 0.75)
					this.selectPuzzle.dummyPuzzlePiece1.setScale(0.75, 0.75)
				} else if (object._text == 25) {
					console.log("im 25")
					this.selectPuzzle.dummyPuzzlePiece2.setScale(1, 1)
					this.selectPuzzle.dummyPuzzlePiece1.setScale(1, 1)
				} else if (object._text ==16) {
					console.log("im 49")
					this.selectPuzzle.dummyPuzzlePiece2.setScale(1.25, 1.25)
					this.selectPuzzle.dummyPuzzlePiece1.setScale(1.25, 1.25)
				}
			});
		});

		function setImage(image) {
			console.log("Into the set Image", image._text)
		}



	}

	update() {
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
